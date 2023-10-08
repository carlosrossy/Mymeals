import styled from "styled-components/native";

interface DaySelected {
  selected: boolean;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ContainerMeals = styled.TouchableOpacity`
  width: 85%;
`;
export const ContainerSecondaryMeal = styled.View<DaySelected>`
  width: 100%;
  padding: 19px 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left-width: 5px;
  border-color: ${({ theme, selected }) =>
    selected ? theme.colors.SECONDARY : theme.colors.PRIMARY};
  background-color: ${({ theme }) => theme.colors.WHITE};
`;
