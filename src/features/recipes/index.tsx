import React, { useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { RecipesScreenNavigationProp } from "../../global/routes/RecipesRoutes/recipes.routes";

export function Recipes() {
  const navigation = useNavigation<RecipesScreenNavigationProp>();
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const { isLoading } = useQuery(["ShowRecipes"], () =>
    getSearchRecipes({ number: 10 })
  );

  const handleSearch = (text) => {
    setSearchValue(text);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;

    getSearchRecipes({ number: 10, offset: nextPage * 20 }).then((newData) => {
      setAllRecipes((prevRecipes) => [...prevRecipes, ...newData.results]);
      setPage(nextPage);
    });
  };

  const {
    control,
    handleSubmit,
    register,
    formState: { errors: err },
  } = useForm({});

  const navigateToRecipeDetail = (recipe1) => {
    if (recipe1) {
      navigation.navigate("Details", { recipe: recipe1 });
    }
  };

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages title="Receitas" />

      <Spacer height={20} />

      <S.ContainerRecipes>
        <S.Search>
          <View style={{ flex: 1 }}>
            <BarSearch
              placeholder="Pesquisar"
              control={control}
              {...register("search")}
              value={searchValue}
              onChangeText={handleSearch}
              onSubmitEditing={() => {
                console.log("Pesquisar:", searchValue);
              }}
            />
          </View>

          <Spacer width={16} />

          <S.ButtonFilter>
            <Menu />
          </S.ButtonFilter>
        </S.Search>

        <Spacer height={20} />

        <FlatList
          numColumns={2}
          data={allRecipes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <RecipePair
              recipe={item}
              onPress={() => navigateToRecipeDetail(item)}
            />
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
          onEndReached={handleLoadMore}
          onEndReachedThreshold={0.5}
          style={{ marginBottom: 20 }}
        />
      </S.ContainerRecipes>
    </S.Container>
  );
}
