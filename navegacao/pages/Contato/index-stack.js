import { View, Text, Button } from "react-native";
import React from "react";
import { StackActions, useNavigation } from "@react-navigation/native";

export default function Contato() {
  const navigation = useNavigation();
  function handleHome() {
    navigation.dispatch(StackActions.popToTop());
  }

  return (
    <View>
      <Text>Tela de Contato</Text>
      <Button title="Voltar Home" onPress={handleHome} />
    </View>
  );
}
