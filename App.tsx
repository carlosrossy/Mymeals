import { StatusBar } from "expo-status-bar";
import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Text from "./src/global/components/Text";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator color={theme.colors.PRIMARY} />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text variant="PoppinsBold"> My Meals</Text>
        <Text variant="PoppinsRegular" fontSize={20} color="PRIMARY">
          My Meals
        </Text>
        <Text variant="PoppinsRegular" fontSize={30} color="RED">
          My Meals
        </Text>
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
