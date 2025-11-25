import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.text}>
        Sou estudante de Ciência da Computação na UNICAP e estou no 6º período. 
        Trabalho com desenvolvimento web e mobile e gosto de construir interfaces intuitivas.
      </Text>
      <Text style={styles.text}>
        Tenho conhecimento em React, Next.js, Expo, SQL, Node.js e segurança da informação.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginBottom: 10 }
});
