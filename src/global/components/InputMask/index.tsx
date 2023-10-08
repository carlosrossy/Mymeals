import React, { useState } from "react";
import { FieldError } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Icon } from "../Icon";
import Text from "../Text";
import * as S from "./styles";
import { IIconList } from "../../../styles/icons";
import { TextInputMaskTypeProp } from "react-native-masked-text";

interface Props extends TextInputProps {
  title?: string;
  isActivePassword?: boolean;
  errors?: FieldError;
  type?: TextInputMaskTypeProp;
  width?: string;
  height?: number;
  disabled?: boolean;
  rightIcon?: IIconList;
  onPressRight?: () => any;
}

export function InputMask({
  title,
  isActivePassword,
  type,
  width,
  height,
  errors,
  disabled,
  rightIcon,
  onPressRight,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <S.Container width={width}>
      <S.ContainerHeader>
        <Text
          variant="PoppinsMedium"
          color="PRIMARY"
          fontSize={16}
          style={{
            letterSpacing: 0.15,
            marginBottom: 5,
          }}
        >
          {title}
        </Text>
      </S.ContainerHeader>

      <S.ContentInput width={width} height={height} isErrored={!!errors}>
        <S.TextInputNative
          placeholderTextColor={"#707686"}
          type={type}
          editable={disabled}
          selectTextOnFocus={disabled}
          placeholder="Digite"
          secureTextEntry={isActivePassword ? isOpen : false}
          {...props}
        />
        {rightIcon && (
          <S.ButtonEye onPress={onPressRight}>
            <Icon type={rightIcon} />
          </S.ButtonEye>
        )}
      </S.ContentInput>
      {errors && (
        <Text variant="PoppinsRegular" fontSize={12} color="RED">
          {String(errors?.message)}
        </Text>
      )}
    </S.Container>
  );
}
