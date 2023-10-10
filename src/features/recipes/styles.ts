import styled from "styled-components/native";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { verticalScale } from "../../utils/scale";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  /* padding-bottom: ${getBottomSpace() + verticalScale(37)}px; */
`;

export const ContainerRecipes = styled.View`
  flex: 1;
  margin: 0 16px;
`;

export const ButtonFilter = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.PRIMARY};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const Search = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
