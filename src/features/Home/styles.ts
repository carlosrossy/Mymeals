import styled from "styled-components/native";

import { FlatList } from "react-native";

interface Props {
  day: string;
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.BACKGROUND};
`;

//Main
export const Main = styled.View`
  flex: 1;
  margin-top: 24px;
  margin-bottom: 37px;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
`;

export const ContainerListDaysWeek = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const ListDaysWeek = styled(FlatList as new () => FlatList<Props>).attrs(
  {
    showsVerticalScrollIndicator: false,
  }
)``;

export const ContainerMeals = styled.View`
  flex: 1;
`;

export const ContainerModalView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(52, 52, 52, 0.5);
  padding: 20px;
`;
