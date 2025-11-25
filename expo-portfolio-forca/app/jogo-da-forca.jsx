import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const palavras = ["REACT", "EXPO", "JAVASCRIPT", "ALGORITMO", "UNICAP"];

export default function Forca() {
  const [palavra] = useState(
    palavras[Math.floor(Math.random() * palavras.length)]
  );
  const [tentativas, setTentativas] = useState([]);
  const [erros, setErros] = useState(0);

  const maxErros = 6;

  function clicarLetra(letra) {
    if (tentativas.includes(letra)) return;

    setTentativas([...tentativas, letra]);
    if (!palavra.includes(letra)) {
      setErros(erros + 1);
    }
  }

  function resetar() {
    setTentativas([]);
    setErros(0);
  }

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const ganhou = palavra.split("").every((l) => tentativas.includes(l));
  const perdeu = erros >= maxErros;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>

      <Text style={styles.word}>
        {palavra.split("").map((l, i) =>
          tentativas.includes(l) || perdeu ? l : "_"
        ).join(" ")}
      </Text>

      <Text style={styles.info}>Erros: {erros} / {maxErros}</Text>

      {ganhou && <Text style={styles.vitoria}>🎉 Você venceu!</Text>}
      {perdeu && <Text style={styles.derrota}>❌ Você perdeu!</Text>}

      <View style={styles.teclado}>
        {alfabeto.map((letra) => (
          <TouchableOpacity
            key={letra}
            disabled={tentativas.includes(letra) || ganhou || perdeu}
            style={styles.btn}
            onPress={() => clicarLetra(letra)}
          >
            <Text style={styles.btnText}>{letra}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.reiniciar} onPress={resetar}>
        <Text style={styles.reiniciarTexto}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  word: { fontSize: 30, letterSpacing: 8, marginBottom: 10 },
  info: { marginBottom: 10 },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5
  },
  btn: {
    backgroundColor: "#0070f3",
    padding: 10,
    borderRadius: 5,
    margin: 4
  },
  btnText: { color: "white", fontSize: 14 },
  vitoria: { fontSize: 20, color: "green", marginTop: 10 },
  derrota: { fontSize: 20, color: "red", marginTop: 10 },
  reiniciar: {
    marginTop: 20,
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8
  },
  reiniciarTexto: { color: "white", fontSize: 16 }
});
