import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { verticalScale } from "../../../../utils/scale";

export const Container = styled.View`
  width: 100%;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  padding: 21px;
`;

export const ContainerDelete = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const ButtonDelete = styled.TouchableOpacity``;

export const IconDelete = styled(Ionicons)`
  font-size: ${verticalScale(22)}px;
  color: ${({ theme }) => theme.colors.RED};
`;

export const Form = styled.View`
  margin-right: 23px;
  margin-left: 23px;
`;

export const ContainerButton = styled.View`
  margin-top: 33px;
  margin-bottom: 14px;
`;
