import React from "react";
import { StyleSheet, TextInputProps } from "react-native";

import { Container, ContainerSecondary, TextInput } from "./styles";
import { FieldError } from "react-hook-form";

interface Props extends TextInputProps {
  error?: Boolean;
}

export function Input({ error, ...rest }: Props) {
  return (
    <Container>
      <ContainerSecondary>
        <TextInput {...rest} error={!!error} />
      </ContainerSecondary>
    </Container>
  );
}
