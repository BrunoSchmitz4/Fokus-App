import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";

const pomodoro = [
    {
        id: 'focus',
        initialValue: 25,
        image: require('./Imagem Foco.png')
    },
    {
        id: 'short',
        initialValue: 5,
        image: require('./Imagem Descanso Curto.png')
    },
    {
        id: 'long',
        initialValue: 15,
        image: require('./Imagem Descanso Longo.png')

    },
]

export default function Index() {
    
    const [timerType, setTimerType] = useState(pomodoro[0])

    return (
        <View style= {styles.container}>
            <Image source={timerType.image} />
            <View style = {styles.actions}>
                <View style={styles.context}>
                    <Pressable style={styles.contextButtonActive}>
                        <Text style={styles.contextButtonText}>
                            Foco
                        </Text>                      
                    </Pressable>
                    <Pressable>
                        <Text style={styles.contextButtonText}>
                                Pausa Curta
                        </Text>
                    </Pressable>
                    <Pressable>
                        <Text style={styles.contextButtonText}>
                            Pausa Longa
                        </Text>
                    </Pressable>
                </View>
                <Text style={styles.timer}>
                    { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', { minute: '2-digit', second: '2-digit' }) }
                </Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        Começar
                    </Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Projeto fictício sem fins lucrativos.
                </Text>
            </View>
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
        borderColor: '#144480',
        gap: 32
    },
    context: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    contextButtonText: {
        fontSize: 12.5,
        color: '#fff',
        padding: 8
    },
    contextButtonActive: {
        backgroundColor: '#144480',
        borderRadius: 8
    },
    timer: {
        fontSize: 54,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#b872ff',
        borderRadius: 32,
        padding: 8
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#021123'
    },
    footer: {
        width: '80%',

    },
    footerText: {
        textAlign: 'center',
        color: '#98a0a8',
        fontSize: 12.5
    }
})