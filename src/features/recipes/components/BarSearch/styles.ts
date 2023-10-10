import styled, { css } from "styled-components/native";

interface IContainerProps {
  isErrored: boolean;
  width: string;
  height: number;
}

export const Container = styled.View<IContainerProps>`
  width: ${({ width }) => (width ? width : `100%`)};
`;

export const ContentInput = styled.View<IContainerProps>`
  width: ${({ width }) => (width ? width : `100%`)};
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.INPUT_BACKGROUND};
  border-radius: 9px;

  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.RED};
    `}
`;

export const TextInputNative = styled.TextInput`
  flex: 1;
  height: 56px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: 14px;
`;

export const Icon = styled.View<IContainerProps>`
  margin: 0px 12px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isErrored &&
    css`
      color: ${({ theme }) => theme.colors.RED};
    `}
`;
export const ButtonSearch = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;
export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.RED};
  font-size: 12px;
  padding: 5px;
`;
