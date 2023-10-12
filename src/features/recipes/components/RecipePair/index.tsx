import React, { useEffect, useState } from "react";
import * as S from "./styles";
import Text from "../../../../global/components/Text";
import { Spacer } from "../../../../global/components/Spacer";
import { TouchableOpacity } from "react-native";
import { recipesTranslation } from "../../translations";
interface RecipePairProps {
  recipe: {
    title: string;
    image: string;
  } | null;
  onPress: (recipe: { title: string; image: string }) => void;
}

export default function RecipePair({ recipe, onPress }: RecipePairProps) {
  const translatedTitle = recipe ? recipesTranslation[recipe.title] : "";

  return (
    <S.RecipePairContainer>
      {recipe && (
        <TouchableOpacity onPress={() => onPress(recipe)}>
          <S.RecipeContainer>
            <S.RecipePairBackground>
              <S.RecipeImage source={{ uri: recipe.image }} />
              <Spacer height={10} />
              <Text
                variant="PoppinsMedium"
                color="TITLE"
                numberOfLines={2}
                ellipsizeMode="tail"
                textAlign="center"
              >
                {translatedTitle || recipe.title}
              </Text>
            </S.RecipePairBackground>
          </S.RecipeContainer>
        </TouchableOpacity>
      )}
    </S.RecipePairContainer>
  );
}
