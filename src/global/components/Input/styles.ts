import { PixelRatio } from "react-native";
import styled, { css } from "styled-components/native";
import { horizontalScale, verticalScale } from "../../../utils/scale";

interface IContainerProps {
  isErrored?: boolean;
  width?: string;
  height?: number;
}

const fontScale = PixelRatio.getFontScale();

export const Container = styled.View<IContainerProps>`
  width: ${({ width }) => (width ? width : `100%`)};
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentInput = styled.View<IContainerProps>`
  width: ${({ width }) => (width ? width : `100%`)};
  height: ${({ height }) =>
    height ? `${fontScale * height}px` : `${fontScale * 60}px`};
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.INPUT_BACKGROUND};
  border: 1.2px solid ${({ theme }) => theme.colors.INPUT_BACKGROUND};
  border-radius: 8px;
  ${(props) =>
    props.isErrored &&
    css`
      border: 1.2px solid;
      border-color: ${({ theme }) => theme.colors.RED};
    `}
`;

export const TextInputNative = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.GRAY_DARK};
  font-size: ${verticalScale(16)}px;
`;

export const Icon = styled.View<{ isErrored?: boolean }>`
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isErrored &&
    css`
      color: ${({ theme }) => theme.colors.RED};
    `}
`;

export const ButtonEye = styled.TouchableOpacity`
  margin-right: ${horizontalScale(10)}px;
  height: ${fontScale * 40}px;
  width: ${fontScale * 40}px;
  align-items: center;
  justify-content: center;
`;
