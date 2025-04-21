import { Image, StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton"
import { Timer } from "../components/Timer"
import { Footer } from "../components/Footer"
import { DataAtual } from "../components/DataAtual"


const pomodoro = [
    {
        id: 'focus',
        initialValue: 25,
        image: require('./Imagem Foco.png'),
        display: 'Foco'
    },
    {
        id: 'short',
        initialValue: 5,
        image: require('./Imagem Descanso Curto.png'),
        display: 'Pausa curta'
    },
    {
        id: 'long',
        initialValue: 15,
        image: require('./Imagem Descanso Longo.png'),
        display: 'Pausa longa'

    },
]

export default function Index() {
    
    const [timerType, setTimerType] = useState(pomodoro[0])

    const timerRef = useRef(null)

    const toggleTimer = () => {
        if (timerRef.current) {
            
            clearInterval(timerRef.current)
            return
        }
        const id = setInterval(() => {
            console.log('Timer rolando')
        }, 1000)
        timerRef.current = id
    }
    return (
        <View style= {styles.container}>
            <DataAtual />
            <Image source={timerType.image} />
            <View style = {styles.actions}>
                <View style={styles.context}>
                    {pomodoro.map(p => (
                        <ActionButton
                            key={p.id} 
                            active={ timerType.id === p.id }
                            onPress={ () => setTimerType(p)}
                            display={p.display}
                        />
                    ))}
                </View>
                <Timer totalSeconds={timerType.initialValue}/>
                <FokusButton 
                    title={timerRef.current ? 'Pausar' : 'Começar'}
                    onPress={toggleTimer}    
                />
            </View>
            <Footer />
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
    }
})