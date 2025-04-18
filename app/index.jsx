import { Image, StyleSheet, View } from "react-native";

export default function Index() {
    return (
        <View style= {styles.container}>
            <Image source={require('./Imagem Foco.png')} />
            <View style = {styles.actions} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#021123',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },

    actions: {
        paddingVertical: 24,
        paddingHorizontal: 24,
        backgroundColor: '#14448080',
        width: '80%',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: '#144480'
    }
})