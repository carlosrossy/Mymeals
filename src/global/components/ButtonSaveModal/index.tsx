import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";
import Text from "../Text";

type Props = TouchableOpacityProps & {
  title: string;
  isModal: boolean;
};

export function ButtonSaveModal({ title, isModal, ...rest }: Props) {
  return (
    <Container isModal={isModal} disabled={!isModal} {...rest}>
      <Text
        variant="PoppinsSemiBold"
        color="WHITE"
        textAlign="center"
        fontSize={16}
      >
        {title}
      </Text>
    </Container>
  );
}
