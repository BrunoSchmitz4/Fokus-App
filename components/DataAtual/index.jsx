import { Text, StyleSheet } from "react-native-web"

const dateNow = new Date()
const formatedDateNow = dateNow.toLocaleString("pt-BR", {
    weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit"
})

export const DataAtual = () => {
    return (
        <Text style={styles.textDataAtual}>{ formatedDateNow }</Text>
    )
}

const styles = StyleSheet.create({
    textDataAtual: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 600,
        textAlign: "center"
    }
})