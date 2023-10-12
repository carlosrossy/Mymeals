import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  HeaderButton,
  ContainerTitle,
  ContentPageHome,
  ProfileImage,
} from "./styles";

import HomeSvg from "../../assets/home.svg";
import Profile from "../../../assets/ProfileImage.svg";

import Text from "../Text";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../../hook/auth";
import { Ionicons } from "@expo/vector-icons";
import { abbreviateDayOfWeek } from "../../../utils/formatDate";

type Props = {
  title?: string;
  isAbout?: boolean;
  handleAbout?: () => void;
  dayWeekFormat?: string;
  isHome?: boolean;
  date?: Number;
  monthFormat?: string;
  handleLogOut?: boolean;
};

export function HeaderPages({
  title,
  isAbout,
  handleAbout,
  isHome,
  dayWeekFormat,
  date,
  monthFormat,
  handleLogOut,
}: Props) {
  const navigation = useNavigation();
  const { User } = useAuth();

  return (
    <Container>
      <ContentPageHome>
        {dayWeekFormat && date && monthFormat && (
          <>
            <Text
              variant="PoppinsMedium"
              fontSize={24}
              color="WHITE"
              marginLeft="md"
            >
              Olá {User.name}
            </Text>
            <Text
              variant="PoppinsMedium"
              fontSize={18}
              color="WHITE"
              marginLeft="md"
            >{`${abbreviateDayOfWeek(
              dayWeekFormat
            )} ,${date} de ${abbreviateDayOfWeek(monthFormat)}`}</Text>
          </>
        )}
      </ContentPageHome>

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

      {isHome && (
        <ProfileImage
          source={{
            uri: `${User?.imageUrl}?time=${new Date().getTime()}`,
          }}
        />
      )}
    </Container>
  );
}
