import styled from "styled-components/native";

export const RecipePairContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding: 5px;
`;

export const RecipePairBackground = styled.View`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  height: 260px; 
`;

export const RecipeContainer = styled.View`
  align-items: center;
`;

export const RecipeImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 10px;
`;
