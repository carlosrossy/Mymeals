import React from "react";
import { TouchableOpacity } from "react-native";
import { Container, SelectedVisible } from "./styles";
import Text from "../Text";
import theme from "../../../styles/theme";

interface Day {
  day: string;
  selected: boolean;
}

interface Props {
  data: Day;
  onPress: () => void;
}

export function DayWeekSelected({ data, onPress }: Props) {
  const textColor = data.selected ? "PRIMARY" : "TITLE";

  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Text variant="PoppinsMedium" fontSize={13} color={textColor}>
          {data.day}
        </Text>

        <SelectedVisible selected={data.selected} />
      </Container>
    </TouchableOpacity>
  );
}
