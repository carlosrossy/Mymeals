import styled, { css } from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { View, ViewProps } from "react-native";
import { verticalScale } from "../../../utils/scale";

interface ItemsProps {
  done: boolean;
}

export const Container = styled.View`
  width: 100%;

  margin-bottom: ${getBottomSpace() + verticalScale(160)}px;
  justify-content: center;
`;

export const Items = styled.View<ItemsProps>`
  width: 99%;
  height: ${verticalScale(46)}px;
  flex-direction: row;

  background-color: ${({ theme }) => theme.colors.MARKER};
  border-radius: 4px;
  flex-wrap: wrap;
  margin-top: 2px;
  margin-bottom: 11px;
  margin-left: 2px;

  background-color: ${({ theme, done }) =>
    done ? theme.colors.MARKER : theme.colors.WHITE};
`;

export const ContainerItem = styled.TouchableOpacity<ItemsProps>`
  flex: 1;
  height: ${verticalScale(46)}px;
  flex-direction: row;
  align-items: center;

  padding-left: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const Marker = styled.View<ItemsProps>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-width: 1.5px;
  border-color:  ${({ theme, done }) =>
    done ? 'transparent' : theme.colors.GRAY};

  background-color: ${({ theme, done }) =>
    done ? theme.colors.MARKER_CIRCLE : theme.colors.WHITE};
`;

export const ViewTitle = styled.View`
  flex: 1;
  background-color: rebeccapurple;
  justify-content: center;
  /* margin-left: 11px;
  margin-right: 5px; */
`;

export const Delete = styled.TouchableOpacity`
  width: 41px;
  background-color: ${({ theme }) => theme.colors.RED};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
  justify-content: center;
`;
