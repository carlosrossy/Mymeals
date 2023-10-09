import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";

import { Container, Input, Button } from "./styles";

import CheckSvg from "../../../assets/icons/Check.svg";

interface InputProps {
  addItem: (item: string) => void;
}

export function InputPurchases({ addItem }: InputProps) {
  const [item, setItem] = useState("");

  function handleAddNewItem() {
    addItem(item);
    setItem("");
  }

  return (
    <Container style={styles.shadow}>
      <Input
        placeholder="AdIcione um novo item..."
        value={item}
        onSubmitEditing={handleAddNewItem}
        onChangeText={setItem}
        maxLength={40}
      />
      <Button
        activeOpacity={0.9}
        onPress={handleAddNewItem}
        style={styles.shadow}
      >
        <CheckSvg width={20} height={20} />
      </Button>
    </Container>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#C4C4C4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1.5,
  },
});
