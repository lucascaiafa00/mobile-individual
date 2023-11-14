import React from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [lista, setLista] = useState([]);

  const adicionarItem = () => {
    setLista([...lista, { key: String(Date.now()), texto: inputText }]);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite Algo..."
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Aperte Aqui" onPress={adicionarItem} />
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={styles.item}>{item.texto}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
