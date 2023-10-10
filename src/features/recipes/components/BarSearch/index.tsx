import React, { useState } from "react";
import * as S from "./styles";

import { Pressable, TextInputProps } from "react-native";
import { Control, FieldError, useController } from "react-hook-form";

interface Props extends TextInputProps {
  name: string;
  control?: Control<any>;
  errors?: FieldError;
  defaultValue?: string;
  width?: string;
  height?: number;
  loading?: boolean;
  searchCallback?: (query: string) => void;
}

export function BarSearch({
  width,
  height,
  errors,
  control,
  defaultValue,
  name,
  loading,
  searchCallback,
  ...rest
}: Props) {
  const { field } = useController({
    control,
    defaultValue: defaultValue || "",
    name,
  });
  const [focus, setFocus] = useState(false);

  const handleSearchOnSubmit = () => {
    searchCallback(field.value);
  };

  return (
    <S.Container width={width}>
      <S.ContentInput width={width} isErrored={!!errors}>
        <S.TextInputNative
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={field.value}
          isFocused={focus}
          onChangeText={(text) => {
            field.onChange(text);
            searchCallback(text);
          }}
          onSubmitEditing={handleSearchOnSubmit}
          {...rest}
        />

        {/* <S.Icon isErrored={!!errors}>
          <S.ButtonSearch
            disabled={loading}
            onPress={() => searchCallback(field.value)}
          >
            <Search width={23} height={23} />
          </S.ButtonSearch>
        </S.Icon> */}
      </S.ContentInput>
      {errors && <S.Error>{String(errors?.message)}</S.Error>}
    </S.Container>
  );
}
