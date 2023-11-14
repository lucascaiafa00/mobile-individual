import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function List() {
  const [feed, setFeed] = useState([
    { _id_: 1, nome: "Mariana", idade: 50, email: "m@hotmail.com" },
    { _id_: 2, nome: "Maria", idade: 34, email: "ma@hotmail.com" },
    { _id_: 3, nome: "Jorge", idade: 14, email: "j@hotmail.com" },
    { _id_: 4, nome: "Ana", idade: 18, email: "a@hotmail.com" },
    { _id_: 5, nome: "Carla", idade: 19, email: "c@hotmail.com" },
  ]);

  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Pessoa data={item} />}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

function Pessoa(props) {
  return (
    <View style={styles.pessoa}>
      <Text style={styles.texto}>{props.data.nome}</Text>
      <Text style={styles.texto}>{props.data.idade}</Text>
      <Text style={styles.texto}>{props.data.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 100,
    backgroundColor: "lightblue",
    padding: 10,
    flex: 1,
  },
  pessoa: {
    justifyContent: "center",
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
  },
  texto: {
    color: "#fff",
  },
});
