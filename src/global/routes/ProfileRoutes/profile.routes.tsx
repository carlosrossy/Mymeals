import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Profile } from "../../../features/Profile";

const Stack = createNativeStackNavigator();

export type RootProfileRoutesList = {
  Profile: undefined;
};

export type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootProfileRoutesList>;

export default function ProfileRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
