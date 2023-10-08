import React, { useEffect } from "react";
import { StatusBar, Dimensions } from "react-native";
import * as S from "./styles";

import { Container, Header } from "./styles";

import ImageTelaSplashSvg from "../../assets/icons/imageTelaSplash.svg";

import Text from "../../global/components/Text";
import { Logo } from "../../global/components/Logo";
import { verticalScale } from "../../utils/scale";
import Button from "../../global/components/Button";
import { Spacer } from "../../global/components/Spacer";
import { useNavigation } from "@react-navigation/native";
import { AuthScreenNavigationProp } from "../../global/routes/auth.routes";

export function Splash() {
  const navigation = useNavigation<AuthScreenNavigationProp>();
  const screenHeight = Dimensions.get("window").height;

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

      <S.ContainerButton>
        <Button
          title="ENTRAR"
          type="secondary"
          style={{
            maxWidth: 340,
            minWidth: 300,
          }}
          onPress={() => navigation.navigate("SingIn")}
        />

        <Spacer height={16} />

        <Button
          title="Cadastra-se"
          type="primary"
          style={{
            maxWidth: 340,
            minWidth: 300,
          }}
          onPress={() => navigation.navigate("SingUp")}
        />

        <Spacer height={screenHeight * 0.05} />
      </S.ContainerButton>
    </Container>
  );
}
