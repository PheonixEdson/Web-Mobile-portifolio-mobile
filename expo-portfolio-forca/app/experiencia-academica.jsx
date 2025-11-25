import { View, Text, StyleSheet } from "react-native";

export default function ExpAcad() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Acadêmica</Text>
      <Text style={styles.item}>• Ciência da Computação - UNICAP (6º período)</Text>
      <Text style={styles.item}>• Pesquisa em detecção de phishing</Text>
      <Text style={styles.item}>• Projetos com IA, redes e programação</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 6 }
});
