import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../features/Home";

import ShopSvg from "../../assets/icons/icon-menu/shoppingList.svg";
import HomeSvg from "../../assets/icons/icon-menu/home.svg";
import { ShoppingList } from "../../features/ShoppingList";
import RecipesRoutes from "./RecipesRoutes/recipes.routes";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#003333",
        tabBarInactiveTintColor: "#46464C",
        tabBarIconStyle: { marginTop: 12, marginBottom: 8 },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: "below-icon",
        tabBarLabelStyle: { fontSize: 12, paddingBottom: 12 },
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          height: "8%",
          elevation: 5,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 0.1,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <HomeSvg
              width={size}
              height={size}
              fill={focused ? "#003333" : "#CCCCCC"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Lista de Compras"
        component={ShoppingList}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <ShopSvg
              width={size}
              height={size}
              fill={focused ? "#003333" : "#CCCCCC"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Receitas"
        component={RecipesRoutes}
        options={{
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-restaurant-outline"
              size={size}
              color={focused ? "#003333" : "#CCCCCC"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
