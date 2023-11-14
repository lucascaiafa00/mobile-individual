import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Sobre" component={Sobre} />
        <Tab.Screen name="Contato" component={Contato} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
