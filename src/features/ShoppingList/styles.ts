import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { verticalScale } from "../../utils/scale";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  padding-bottom: ${getBottomSpace() + verticalScale(37)}px;
`;

export const ContainerSecondary = styled.View`
  flex: 1;
  margin-top: 24px;
  margin-bottom: 37px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const ButtonClean = styled.TouchableOpacity`
  width: 100px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.RED};
  margin-bottom: 5px;
`;

export const ContainerAviso = styled.View`
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
`;

export const ViewInput = styled.View`
  width: 100%;
  position: absolute;
  bottom: 5px;
`;
