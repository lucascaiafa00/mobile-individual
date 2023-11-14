import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Feather from "react-native-vector-icons/Feather";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Contato"
          component={Contato}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="list" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
