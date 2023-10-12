import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { verticalScale } from "../../utils/scale";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
  padding-bottom: ${getBottomSpace() + verticalScale(37)}px;
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

export const Info = styled.View`
  padding: 0 23px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled.View`
  border-radius: 20px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.BACKGROUND};
`;

export const Image = styled.Image.attrs({
  resizeMode: "cover",
})`
  height: 180px;
  width: 180px;
  border-radius: 100px;
`;

export const ContainerPhoto = styled.View`
  width: 180px;
  height: 180px;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const ContainerCenter = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonLogOut = styled.TouchableOpacity`
  width: 40%;
  border: 2px solid ${({ theme }) => theme.colors.RED};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
