import React, { useEffect } from "react";
import { StatusBar, Dimensions } from "react-native";

import { Container, Header } from "./styles";

import ImageTelaSplashSvg from "../../assets/icons/imageTelaSplash.svg";

import Text from "../../global/components/Text";
import { Logo } from "../../global/components/Logo";
import { verticalScale } from "../../utils/scale";

export function Splash() {
  const { width, height } = Dimensions.get("window");

  // const { loadStorageHourMeal } = useMealStorage();

  // useEffect(() => {
  //     loadStorageHourMeal();
  // }, []);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <Logo />
        <ImageTelaSplashSvg
          width={verticalScale(251)}
          height={verticalScale(251)}
        />

        <Text
          variant="PoppinsRegular"
          color="WHITE"
          fontSize={25}
          textAlign="center"
        >
          Controle suas {`\n`}
          refeições de maneira {`\n`}
          fácil e simplificada
        </Text>
      </Header>
      {/* <ButtonEnter /> */}
    </Container>
  );
}
