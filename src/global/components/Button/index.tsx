/* eslint-disable prettier/prettier */
import React from "react";
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import * as S from "./styles";
import Text from "../Text";

export type IButtonType = "primary" | "secondary" | "Tertiary";

interface Props extends TouchableOpacityProps {
  title: string;
  type?: IButtonType;
  activeLoad?: boolean;
  width?: number;
  isInactive?: boolean;
  opacity?: number;
}

export default function Button({
  title,
  type = "primary",
  activeLoad,
  width,
  isInactive = false,
  opacity = 1,
  ...rest
}: Props) {
  const textColor = type === "primary" ? "TEXT" : "WHITE";

  return (
    <TouchableOpacity
      disabled={isInactive ? true : activeLoad}
      onPress={rest.onPress}
      activeOpacity={0.7}
    >
      <S.Container type={type} width={width} opacity={opacity} {...rest}>
        {activeLoad ? (
          <ActivityIndicator color="#f2f2f2" size={40} />
        ) : (
          <Text
            variant="PoppinsRegular"
            color={textColor}
            fontSize={20}
            textTransform="uppercase"
          >
            {title}
          </Text>
        )}
      </S.Container>
    </TouchableOpacity>
  );
}
