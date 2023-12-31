import Checkbox from "expo-checkbox";
import styled from "styled-components/native";

interface Itype {
  top?: number;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Header = styled.View<Itype>`
  top: ${({ top }) => top};
  width: 100%;
  padding: 0px 23px;
  flex-direction: row;
  align-items: center;
`;

export const Form = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const ContainerButtons = styled.View`
  min-width: 300px;
  max-width: 340px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  align-self: center;
  align-items: center;
`;

export const CheckBoxContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;

export const CheckBox = styled(Checkbox)`
  width: 16px;
  height: 16px;
  border: #5b5b58;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
