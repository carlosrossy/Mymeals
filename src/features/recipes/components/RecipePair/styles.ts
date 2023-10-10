import styled from "styled-components/native";

export const RecipePairContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  flex: 1;
`;

export const RecipePairBackground = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 180px;
`;

export const RecipeContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const RecipeImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 140px;
  height: 140px;
  border-radius: 10px;
`;
