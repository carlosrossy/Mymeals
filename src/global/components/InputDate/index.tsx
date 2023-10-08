import React, { useState } from "react";
import * as S from "./styles";
import { View, TextInput, Platform, TouchableOpacity } from "react-native";

import Text from "../Text";

import { FieldError } from "react-hook-form";
import RNDateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";

interface InputDateProps {
  value: Date;
  onChange: (date: Date) => void;
  errors?: FieldError;
  editable?: boolean;
  width?: string;
}

export function InputDate(props: InputDateProps) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(
    props.value || new Date()
  );

  const toggleDatePicker = () => {
    if (props.editable) {
      setShowDatePicker((prevState) => !prevState);
    }
  };

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    setShowDatePicker(Platform.OS === "ios");
    if (selectedDate) {
      setSelectedDate(selectedDate);
      props.onChange(selectedDate);
    }
  };

  const formatDate = (date: Date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View>
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
          Data de nascimento
        </Text>
      </S.ContainerHeader>

      <TouchableOpacity
        onPress={toggleDatePicker}
        disabled={!props.editable}
        style={{ width: "100%" }}
      >
        <S.ContentInput isErrored={!!props.errors}>
          <S.TextInputNative
            placeholder="Data de Nascimento"
            editable={false}
            placeholderTextColor="#707686"
            value={props.value ? formatDate(props.value) : ""}
          />
          <S.IconContainer>
            <S.CalendarIcon />
          </S.IconContainer>
        </S.ContentInput>
      </TouchableOpacity>

      {props.errors && (
        <Text variant="PoppinsRegular" fontSize={12} color="RED">
          {String(props.errors.message)}
        </Text>
      )}

      {showDatePicker && props.editable && (
        <RNDateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
}
