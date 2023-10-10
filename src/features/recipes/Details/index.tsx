import React, { useState } from "react";
import * as S from "./styles";

import Text from "../../../global/components/Text";
import {
  StatusBar,
  Image,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { HeaderPages } from "../../../global/components/HeaderPages";
import { Spacer } from "../../../global/components/Spacer";
import { useNavigation, useRoute } from "@react-navigation/native";
import { IRecipe } from "../../../global/routes/RecipesRoutes/recipes.routes";
import { useQuery } from "@tanstack/react-query";
import { getRecipesDetails } from "../../../services/recipesDetails";
import theme from "../../../styles/theme";
import { unitMapping } from "../../../utils/TypeUnit";

interface IParamsRoutes {
  recipe: IRecipe;
}

interface IIngredient {
  name: string;
  image: string;
  amount: {
    metric: {
      value: number;
      unit: string;
    };
    us: {
      value: number;
      unit: string;
    };
  };
}

interface IRecipeDetailsResponse {
  ingredients: IIngredient[];
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { recipe } = route.params as IParamsRoutes;

  const {
    data: ingredientsData,
    isLoading,
    isError,
  } = useQuery<IRecipeDetailsResponse>(["ingredients", recipe.id], () =>
    getRecipesDetails(recipe.id)
  );

  const ingredients = ingredientsData?.ingredients || [];

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.PRIMARY} />
      </View>
    );
  }

  if (isError || !ingredients) {
    return (
      <S.Container>
        <Text
          variant="PoppinsRegular"
          fontSize={18}
          textAlign="center"
          marginTop="large"
        >
          Dados não encontrados
        </Text>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <S.RecipeImage source={{ uri: recipe.image }} />

      <S.ContentContainer>
        <Text variant="PoppinsSemiBold" fontSize={24} color="TITLE">
          {recipe.title}
        </Text>

        <Spacer height={20} />

        <Text variant="PoppinsMedium" fontSize={18}>
          Ingredientes:
        </Text>

        {ingredients.length > 0 ? (
          ingredients.map((item, index) => (
            <View key={index}>
              <Text variant="PoppinsRegular" fontSize={16}>
                {item.name} - {item.amount.metric.value}{" "}
                {unitMapping[item.amount.metric.unit]}
              </Text>
            </View>
          ))
        ) : (
          <Text
            variant="PoppinsRegular"
            fontSize={18}
            textAlign="center"
            marginTop="large"
          >
            Dados não encontrados
          </Text>
        )}
      </S.ContentContainer>
    </S.Container>
  );
}
