import styled, { css } from "styled-components/native";
import { Entypo } from "@expo/vector-icons";
import { verticalScale } from "../../../utils/scale";

interface Props {
  isHome?: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: ${verticalScale(160)}px;
  background-color: ${({ theme }) => theme.colors.SECONDARY};
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-top: 40px;
  padding-left: 22px;
  padding-right: 22px;
  padding-bottom: 15px;
  justify-content: flex-end;
`;

export const HeaderButton = styled.View<Props>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${({ isHome }) => (isHome ? "-15px" : "10px")};

  ${({ isHome }) =>
    isHome
      ? css`
          align-items: flex-start;
          margin-bottom: ${verticalScale(6)}px;
        `
      : css`
          align-items: center;
        `};
`;

export const Buttons = styled.View``;

export const IconGoBack = styled(Entypo)`
  font-size: 17px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContainerTitle = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;

export const ContentPageHome = styled.View``;
