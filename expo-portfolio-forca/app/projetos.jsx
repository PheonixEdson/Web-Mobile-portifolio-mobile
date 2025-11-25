import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Projetos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos</Text>

      <Text style={styles.project}>• Portfólio em Next.js</Text>
      <Text style={styles.project}>• Sistema de agendamento para clínica</Text>
      <Text style={styles.project}>• Projeto de detecção de phishing</Text>

      <Link href="/jogo-da-forca" asChild>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Abrir Jogo da Forca</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  project: { fontSize: 16, marginBottom: 8 },
  btn: {
    marginTop: 20,
    backgroundColor: "#0070f3",
    padding: 15,
    borderRadius: 8
  },
  btnText: { color: "white", textAlign: "center", fontSize: 16 }
});
