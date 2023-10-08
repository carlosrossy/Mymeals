import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  HeaderButton,
  ContainerTitle,
  ContentPageHome,
} from "./styles";

import HomeSvg from "../../assets/home.svg";
import BackSvg from "../../assets/arrow_back.svg";

import Text from "../Text";

type Props = {
  title?: string;
  isAbout?: boolean;
  handleAbout?: () => void;
  dayWeekFormat?: string;
  isHome?: boolean;
  date?: Number;
  monthFormat?: string;
};

export function HeaderPages({
  title,
  isAbout,
  handleAbout,
  isHome,
  dayWeekFormat,
  date,
  monthFormat,
}: Props) {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <HeaderButton isHome={isHome}>
        <ContentPageHome>
          <Text
            variant="PoppinsMedium"
            fontSize={24}
            color="WHITE"
            marginBottom="md"
            marginLeft="md"
          >{`${dayWeekFormat}`}</Text>
          <Text
            variant="PoppinsMedium"
            fontSize={18}
            color="WHITE"
            marginLeft="md"
          >{`${date} de ${monthFormat}`}</Text>
        </ContentPageHome>
      </HeaderButton>

      {isHome != true && (
        <ContainerTitle>
          <Text
            variant="PoppinsMedium"
            fontSize={24}
            color="WHITE"
            textAlign="center"
          >
            {title}
          </Text>
        </ContainerTitle>
      )}
    </Container>
  );
}
