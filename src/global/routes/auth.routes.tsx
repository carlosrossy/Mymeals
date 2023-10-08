import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Splash } from "../../features/Splash";
import { SingIn } from "../../features/auth/screens/SingIn";

const Stack = createNativeStackNavigator();

export type RootAuthRoutesList = {
  Splash: undefined;
  SingIn: undefined;
};

export type AuthScreenNavigationProp =
  NativeStackNavigationProp<RootAuthRoutesList>;
export default function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SingIn" component={SingIn} />
      {/* <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="InsertToken" component={InsertToken} />
      <Stack.Screen name="ChoosePassword" component={ChoosePassword} /> */}
    </Stack.Navigator>
  );
}
