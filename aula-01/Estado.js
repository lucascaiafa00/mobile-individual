import { Button, Text, View } from "react-native";
import { useState } from "react";
import React from "react";

export default function App() {
  const [nome, setNome] = useState("Joaquim");
  const [idade, setIdade] = useState(25);

  return (
    <View style={{ marginTop: 25 }}>
      <Button
        title="Alterar nome"
        onPress={() => {
          setNome("Maria");
          setIdade(23);
        }}
      ></Button>
      <Text>{nome}</Text>
      <Text>{idade}</Text>
    </View>
  );
}
