import React from "react";
import * as S from "./styles";
import { StatusBar } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { HeaderPages } from "../../global/components/HeaderPages";
import Text from "../../global/components/Text";
import { Spacer } from "../../global/components/Spacer";
import { useAuth } from "../../global/hook/auth";
import theme from "../../styles/theme";

export function Profile() {
  const { User, SingOut } = useAuth();

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages title="Perfil" />

      <Spacer height={20} />

      <S.ContainerCenter>
        <S.ContainerPhoto>
          {User.imageUrl ? (
            <S.Image
              source={{
                uri: `${User.imageUrl}?time=${new Date().getTime()}`,
              }}
            />
          ) : (
            <S.Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232",
              }}
            />
          )}
        </S.ContainerPhoto>

        <Text
          variant="PoppinsSemiBold"
          fontSize={20}
          color="TITLE"
          marginTop="md"
        >
          {User.name}
        </Text>
      </S.ContainerCenter>

      <S.Info>
        <S.Section>
          <S.Row>
            <Text variant="PoppinsSemiBold" fontSize={20} color="TITLE">
              Nascimento
            </Text>

            <S.InfoContainer>
              <Text variant="PoppinsSemiBold" fontSize={17} color="TITLE">
                {User.birthDate}
              </Text>
            </S.InfoContainer>
          </S.Row>

          <Spacer height={10} />

          <S.Row>
            <Text variant="PoppinsSemiBold" fontSize={20} color="TITLE">
              Altura
            </Text>

            <Spacer height={10} />

            <S.InfoContainer>
              <Text variant="PoppinsSemiBold" fontSize={17} color="TITLE">
                {User.altura}
              </Text>
            </S.InfoContainer>
          </S.Row>

          <Spacer height={10} />

          <S.Row>
            <Text variant="PoppinsSemiBold" fontSize={20} color="TITLE">
              Peso
            </Text>

            <S.InfoContainer>
              <Text variant="PoppinsSemiBold" fontSize={17} color="TITLE">
                {User.peso}
              </Text>
            </S.InfoContainer>
          </S.Row>

          <Spacer height={10} />

          <S.Row>
            <Text variant="PoppinsSemiBold" fontSize={20} color="TITLE">
              Sexo
            </Text>

            <S.InfoContainer>
              <Text variant="PoppinsSemiBold" fontSize={17} color="TITLE">
                {User.sexo}
              </Text>
            </S.InfoContainer>
          </S.Row>
        </S.Section>

        <Spacer height={20}/>

        <S.ContainerCenter>
          <S.ButtonLogOut onPress={SingOut}>
            <MaterialIcons name="logout" size={24} color={theme.colors.RED} />

            <Spacer width={10} />

            <Text
              variant="PoppinsSemiBold"
              fontSize={24}
              color="RED"
              marginTop="sm"
            >
              Sair
            </Text>
          </S.ButtonLogOut>
        </S.ContainerCenter>
      </S.Info>
    </S.Container>
  );
}
