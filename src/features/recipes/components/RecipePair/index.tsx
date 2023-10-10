import React from "react";
import * as S from "./styles";
import Text from "../../../../global/components/Text";
import { Spacer } from "../../../../global/components/Spacer";

export default function RecipePair({ recipe1, recipe2 }) {
  return (
    <S.RecipePairContainer>
      {recipe1 && (
        <S.RecipeContainer>
          <S.RecipePairBackground>
            <S.RecipeImage source={{ uri: recipe1.image }} />
            <Spacer height={10} />
            <Text variant="PoppinsMedium" color="TITLE">
              {recipe1.title}
            </Text>
          </S.RecipePairBackground>
        </S.RecipeContainer>
      )}

      {recipe2 && (
        <S.RecipeContainer>
          <S.RecipePairBackground>
            <S.RecipeImage source={{ uri: recipe2.image }} />
            <Spacer height={10} />
            <Text variant="PoppinsMedium" color="TITLE" textAlign="left">
              {recipe2.title}
            </Text>
          </S.RecipePairBackground>
        </S.RecipeContainer>
      )}
    </S.RecipePairContainer>
  );
}
