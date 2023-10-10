import React from "react";
import * as S from "./styles";
import Text from "../../../../global/components/Text";
import { Spacer } from "../../../../global/components/Spacer";
import { TouchableOpacity } from "react-native";

interface RecipePairProps {
  recipe: {
    title: string;
    image: string;
  } | null;
  onPress: (recipe: { title: string; image: string }) => void;
}

export default function RecipePair({ recipe, onPress }: RecipePairProps) {
  return (
    <S.RecipePairContainer>
      {recipe && (
        <TouchableOpacity onPress={() => onPress(recipe)}>
          <S.RecipeContainer>
            <S.RecipePairBackground>
              <S.RecipeImage source={{ uri: recipe.image }} />
              <Spacer height={10} />
              <Text variant="PoppinsMedium" color="TITLE">
                {recipe.title}
              </Text>
            </S.RecipePairBackground>
          </S.RecipeContainer>
        </TouchableOpacity>
      )}
    </S.RecipePairContainer>
  );
}
