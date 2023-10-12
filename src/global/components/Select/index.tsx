import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../Text";
import { Entypo } from "@expo/vector-icons";

import * as S from "./styles";
import { FieldError } from "react-hook-form";
import theme from "../../../styles/theme";

export interface DropdownOption {
  label: string;
  value: string;
}

interface GenderPickerProps {
  onSelectGender: (gender: DropdownOption | null) => void;
  errors?: FieldError;
  onChange: (value: string) => void;
}

const GenderPicker: React.FC<GenderPickerProps> = ({
  onSelectGender,
  errors,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: DropdownOption) => {
    setSelectedOption(option);
    toggleDropdown();
    onSelectGender(option);
    onChange(option.value);
  };

  const options: DropdownOption[] = [
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
  ];

  return (
    <View>
      <Text
        variant="PoppinsMedium"
        color="PRIMARY"
        fontSize={16}
        style={{
          letterSpacing: 0.15,
          marginBottom: 5,
        }}
      >
        Gênero
      </Text>
      <S.GenreSelectButton onPress={toggleDropdown} isErrored={!!errors}>
        <Text
          variant="PoppinsRegular"
          fontSize={16}
          color={selectedOption ? "PRIMARY" : "GRAY_DARK"}
          style={{ flex: 1, marginLeft: 12 }}
        >
          {selectedOption ? selectedOption.label : "Selecione"}
        </Text>
        <Entypo
          name={isOpen ? "chevron-up" : "chevron-down"}
          size={26}
          color={theme.colors.PRIMARY}
        />
      </S.GenreSelectButton>

      {errors && (
        <Text variant="PoppinsRegular" fontSize={12} color="RED">
          {String(errors?.message)}
        </Text>
      )}

      {isOpen && (
        <View
          style={{
            position: "absolute",
            top: 100,
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: theme.colors.INPUT_BACKGROUND,
            borderWidth: 1,
            borderColor: theme.colors.GRAY_DARK,
            borderRadius: 8,
          }}
        >
          {options.map((option: DropdownOption) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => selectOption(option)}
              style={{
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.GRAY_DARK,
              }}
            >
              <Text variant="PoppinsMedium" color="GRAY_DARK" fontSize={16}>
                {option.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default GenderPicker;
