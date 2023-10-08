import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../features/Home";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
