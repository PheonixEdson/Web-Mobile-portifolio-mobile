import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/foto.jpg")} style={styles.avatar} />

      <Text style={styles.title}>Antônio Edson Alves de Holanda Neto</Text>

      <Text style={styles.bio}>
        Sou estudante de Ciência da Computação na UNICAP.
        Atualmente estou no sexto período.
        No tempo livre gosto de jogar e ir à academia.
      </Text>

      <View style={styles.linksArea}>
        <Link href="/sobre" asChild>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Sobre</Text></TouchableOpacity>
        </Link>

        <Link href="/experiencia-academica" asChild>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Experiência Acadêmica</Text></TouchableOpacity>
        </Link>

        <Link href="/experiencia-profissional" asChild>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Experiência Profissional</Text></TouchableOpacity>
        </Link>

        <Link href="/projetos" asChild>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Projetos</Text></TouchableOpacity>
        </Link>

        <Link href="/jogo-da-forca" asChild>
          <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Jogo da Forca</Text></TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold"
  },
  bio: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16
  },
  linksArea: {
    marginTop: 30,
    width: "100%"
  },
  btn: {
    backgroundColor: "#0070f3",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8
  },
  btnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center"
  }
});
