import { View, Text } from "react-native";
import { styles } from "./styles";
import { useEffect, useState } from "react";

export default function Saudacao() {
  const [saudacao, setSaudacao] = useState("");

  useEffect(() => {
    const hora = new Date().getUTCHours(); // Corrected: Added parentheses to invoke getUTCHours
    const mensagem =
      hora < 12 ? "Bom Dia" : hora < 18 ? "Boa Tarde" : "Boa Noite";
    setSaudacao(mensagem);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{saudacao}</Text>
    </View>
  );
}
