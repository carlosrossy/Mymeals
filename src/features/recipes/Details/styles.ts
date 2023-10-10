import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -30px;
`;

export const RecipeImage = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 100%;
  height: 231px;
`;

export const IngredientContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const IngredientImage = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 20px;
`;

export const Section = styled.View`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 2;
`;

export const ButtonGoBack = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 20px;
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
