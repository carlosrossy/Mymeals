import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../features/Home";

import HomeSvg from "../../assets/icons/icon-menu/home.svg";
import { ShoppingList } from "../../features/ShoppingList";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeSvg
              width={18}
              height={18}
              fill={focused ? "#003333" : "#003333"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ShoppingList"
        component={ShoppingList}
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeSvg
              width={18}
              height={18}
              fill={focused ? "#003333" : "#003333"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
