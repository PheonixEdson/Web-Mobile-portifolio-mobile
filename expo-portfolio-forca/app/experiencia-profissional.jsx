import { View, Text, StyleSheet } from "react-native";

export default function ExpProf() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiência Profissional</Text>
      <Text style={styles.item}>• Desenvolvimento de sistemas em React</Text>
      <Text style={styles.item}>• Desenvolvimento mobile com Expo</Text>
      <Text style={styles.item}>• Administração de sistemas e redes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  item: { fontSize: 16, marginBottom: 6 }
});
