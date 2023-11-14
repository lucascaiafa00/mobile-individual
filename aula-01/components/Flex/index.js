import { View, StyleSheet } from "react-native";

export default function Flex() {
  return (
    <View style={styles.container}>
      <View style={styles.caixa} />
      <View style={styles.caixa} />
      <View style={styles.caixa} />
      <View style={styles.caixa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   justifyContent: "space-around",
  },
  caixa: {
    width: 100,
    height: 100,
    backgroundColor: "#d9d9d9",
    margin: 10,
  },
});
