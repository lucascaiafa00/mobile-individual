import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}
