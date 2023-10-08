/* eslint-disable no-nested-ternary */
import styled, { css } from "styled-components/native";
import { IButtonType } from ".";

interface IType {
  type?: IButtonType;
  width?: number;
  opacity?: number;
}

const typeWhite = css`
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

const typePrimary = css`
  background-color: ${({ theme }) => theme.colors.PRIMARY};
`;

const typeSecondary = css`
  background-color: ${({ theme }) => theme.colors.MARKER_CIRCLE};
`;

export const Container = styled.TouchableOpacity<IType>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: 56px;
  opacity: ${({ opacity }) => opacity};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 8px;
  ${({ type }) => type === "primary" && typeWhite};
  ${({ type }) => type === "secondary" && typePrimary};
  ${({ type }) => type === "Tertiary" && typeSecondary};
`;
