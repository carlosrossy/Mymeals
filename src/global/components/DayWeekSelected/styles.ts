import styled from "styled-components/native";
import { verticalScale } from "../../../utils/scale";

interface DaySelected {
  selected: boolean;
}

export const Container = styled.View`
  align-items: center;
`;

export const SelectedVisible = styled.View<DaySelected>`
  width: ${verticalScale(5)}px;
  height: ${verticalScale(5)}px;
  border-radius: 2.5px;
  background-color: ${({ selected, theme }) =>
    selected ? theme.colors.PRIMARY : theme.colors.BACKGROUND};
`;
