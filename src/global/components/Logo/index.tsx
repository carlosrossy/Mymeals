import React from "react";

import { Container, ContainerName } from "./styles";

import LogoSvg from "../../../assets/icons/logotipo.svg";
import Text from "../Text";

export function Logo() {
  return (
    <Container>
      <LogoSvg width={50} height={46} />

      <ContainerName>
        <Text variant="PoppinsRegular" color="WHITE" fontSize={24}>
          My
        </Text>
        <Text variant="PoppinsSemiBold" color="WHITE" fontSize={24}>
          Meals
        </Text>
      </ContainerName>
    </Container>
  );
}
