import { View, Text, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

export default function Flat() {
  const alunos = [
    { matricula: "123", nome: "Ana" },
    { matricula: "125", nome: "Sergio" },
    { matricula: "1212", nome: "Carlos" },
    { matricula: "1235", nome: "Jorge" },
    { matricula: "1238", nome: "João" },
    { matricula: "1239", nome: "Maria" },
    { matricula: "1230", nome: "Joaquim" },
    { matricula: "654", nome: "Ana" },
    { matricula: "91", nome: "Sergio" },
    { matricula: "12112", nome: "Carlos" },
    { matricula: "12385", nome: "Jorge" },
    { matricula: "12385", nome: "João" },
    { matricula: "12397", nome: "Maria" },
    { matricula: "12930", nome: "Joaquim" },
    { matricula: "1235", nome: "Ana" },
    { matricula: "1255", nome: "Sergio" },
    { matricula: "12212", nome: "Carlos" },
    { matricula: "127435", nome: "Jorge" },
    { matricula: "12388", nome: "João" },
    { matricula: "12349", nome: "Maria" },
    { matricula: "12360", nome: "Joaquim" },
  ];

  const item = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.nome}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={item}
        data={alunos}
        keyExtractor={(a) => a.matricula}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
