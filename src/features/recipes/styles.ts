import styled from "styled-components/native";

import { getBottomSpace } from "react-native-iphone-x-helper";
import { verticalScale } from "../../utils/scale";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  /* padding-bottom: ${getBottomSpace() + verticalScale(37)}px; */
`;
