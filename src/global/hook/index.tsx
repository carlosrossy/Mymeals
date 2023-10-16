import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import theme from "../../styles/theme";
import { MealProvider } from "./meals";
import { AuthProvider } from "./auth";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <NavigationContainer>
          <AuthProvider>
            <MealProvider>{children}</MealProvider>
          </AuthProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};
