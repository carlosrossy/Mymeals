import styled from "styled-components/native";
import { verticalScale } from "../../../utils/scale";

interface Props {
  isModal: Boolean;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: ${verticalScale(56)}px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${({ isModal, theme }) =>
    isModal ? theme.colors.MARKER_CIRCLE : theme.colors.TEXT};
`;
