
import React from "react";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./src/global/config/react-query";

import theme from "./src/styles/theme";
import Routes from "./src/global/routes";
import { AppProvider } from "./src/global/hook";

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
    <>
      <StatusBar backgroundColor="#F77F00" barStyle="light-content" />
      <AppProvider>
        <QueryClientProvider client={queryClient}>
          <Routes />
        </QueryClientProvider>
      </AppProvider>
    </>
  );
}
