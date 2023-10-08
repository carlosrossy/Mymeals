import styled from "styled-components/native";
import { verticalScale } from "../../../../utils/scale";

interface IInput {
  error?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(39)}px;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 5px;
  margin-top: 3px;
`;

export const ContainerSecondary = styled.View`
  width: 100%;
  height: ${verticalScale(40)}px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.WHITE};
  border-radius: 5px;
  margin-top: -2px;
`;

export const TextInput = styled.TextInput<IInput>`
  flex: 1;
  color: ${({ theme }) => theme.colors.TITLE_SECONDARY};
  font-size: ${verticalScale(18)}px;
  padding-top: 8px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.colors.RED : theme.colors.PRIMARY};
`;
