import React, { useState } from "react";
import { View, ScrollView, StatusBar, ActivityIndicator } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { AntDesign } from "@expo/vector-icons";
import * as S from "./styles";
import Text from "../../../global/components/Text";
import { Spacer } from "../../../global/components/Spacer";
import {
  IRecipe,
  RecipesScreenNavigationProp,
} from "../../../global/routes/RecipesRoutes/recipes.routes";
import { getRecipesDetails } from "../../../services/recipesDetails";
import { unitMapping } from "../../../utils/TypeUnit";
import theme from "../../../styles/theme";
import { IRecipeDetailsResponse } from "../models/ingredients";
import { InstructionsData } from "../models/instrutions";
import { getRecipesInstructions } from "../../../services/Instructions";
interface IParamsRoutes {
  recipe: IRecipe;
}

export function Details() {
  const navigation = useNavigation<RecipesScreenNavigationProp>();
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

  const {
    data: instructionsData,
    isLoading: instructionsLoading,
    isError: instructionsError,
  } = useQuery<InstructionsData>(["instructions", recipe.id], () =>
    getRecipesInstructions(recipe.id)
  );

  if (isLoading || instructionsLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={theme.colors.PRIMARY} />
      </View>
    );
  }

  if (
    isError ||
    !ingredients ||
    instructionsError ||
    !instructionsData ||
    instructionsData.length === 0
  ) {
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
    <ScrollView>
      <S.Container>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />

        <View>
          <S.ButtonGoBack onPress={navigation.goBack}>
            <AntDesign name="arrowleft" size={24} color="white" />
          </S.ButtonGoBack>
          <S.RecipeImage source={{ uri: recipe.image }} />
        </View>

        <S.ContentContainer>
          <Text variant="PoppinsSemiBold" fontSize={24} color="TITLE">
            {recipe.title}
          </Text>

          <Spacer height={20} />

          <S.Section>
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
                ingredientes não encontrados
              </Text>
            )}
          </S.Section>

          <S.Section>
            {instructionsData?.length > 0 ? (
              instructionsData.map((instructionSet, index) => (
                <View key={index}>
                  <Text variant="PoppinsSemiBold" fontSize={16}>
                    {instructionSet.name}
                  </Text>
                  {instructionSet.steps.map((step, stepIndex) => (
                    <View key={stepIndex}>
                      <Text variant="PoppinsRegular" fontSize={16}>
                        Passo {step.number}: {step.step}
                      </Text>
                    </View>
                  ))}
                </View>
              ))
            ) : (
              <Text
                variant="PoppinsRegular"
                fontSize={18}
                textAlign="center"
                marginTop="large"
              >
                Dados de preparo não encontrados
              </Text>
            )}
          </S.Section>
        </S.ContentContainer>
      </S.Container>
    </ScrollView>
  );
}
