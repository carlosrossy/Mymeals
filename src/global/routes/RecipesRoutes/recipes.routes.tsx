import React from "react";
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { Recipes } from "../../../features/recipes";
import { Details } from "../../../features/recipes/Details";

const Stack = createNativeStackNavigator();

export interface IRecipe {
  id: number;
  title: string;
  imageType: string;
  image: string;
}

export type RootRecipesRoutesList = {
  Recipes: undefined;
  Details: { recipe: IRecipe };
};

export type RecipesScreenNavigationProp =
  NativeStackNavigationProp<RootRecipesRoutesList>;

export default function RecipesRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Recipes"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Recipes" component={Recipes} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}
