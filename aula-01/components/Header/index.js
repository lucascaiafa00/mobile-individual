import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Voltar</Text>
      <Text style={styles.text}>Home</Text>
      <Text style={styles.text}>Detalhes</Text>
    </View>
  );
}
