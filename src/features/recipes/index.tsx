import React from "react";
import { ActivityIndicator, StatusBar, FlatList, View } from "react-native";

import Text from "../../global/components/Text";

import * as S from "./styles";
import { HeaderPages } from "../../global/components/HeaderPages";
import { useQuery } from "@tanstack/react-query";
import { getSearchRecipes } from "../../services/recipes";
import RecipePair from "./components/RecipePair";
import { Spacer } from "../../global/components/Spacer";
import theme from "../../styles/theme";
import { BarSearch } from "./components/BarSearch";
import { useForm } from "react-hook-form";

import Menu from "../../assets/icons/menu_button.svg";

export function Recipes() {
  const { isLoading, isError, data, error } = useQuery(
    ["ShowRecipes"],
    getSearchRecipes
  );

  React.useEffect(() => {
    if (!isLoading && !isError && data) {
      console.log(data);
    }
  }, [isLoading, isError, data]);

  const recipes = data.results;

  const pairedRecipes = [];
  for (let i = 0; i < recipes.length; i += 2) {
    const recipe1 = recipes[i];
    const recipe2 = i + 1 < recipes.length ? recipes[i + 1] : null;
    pairedRecipes.push([recipe1, recipe2]);
  }

  const {
    control,
    handleSubmit,
    register,
    formState: { errors: err },
  } = useForm({});

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages title="Receitas" />

      <Spacer height={20} />

      <S.ContainerRecipes>
        <S.Search>
          <View style={{ flex: 1 }}>
            <BarSearch
              searchCallback={() => console.log("clicou")}
              placeholder="Pesquisar"
              control={control}
              {...register("search")}
              // errors={errors?.search}
            />
          </View>

          <Spacer width={16} />

          <S.ButtonFilter>
            <Menu />
          </S.ButtonFilter>
        </S.Search>

        <Spacer height={20} />

        <FlatList
          data={pairedRecipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RecipePair recipe1={item[0]} recipe2={item[1]} />
          )}
          ListEmptyComponent={() =>
            isLoading ? (
              <ActivityIndicator size="large" color={theme.colors.PRIMARY} />
            ) : (
              <Text
                variant="PoppinsRegular"
                fontSize={18}
                textAlign="center"
                marginTop="large"
              >
                Dados não encontrados
              </Text>
            )
          }
        />
      </S.ContainerRecipes>
    </S.Container>
  );
}
