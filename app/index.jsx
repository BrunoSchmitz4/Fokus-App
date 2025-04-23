import { Image, StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton"
import { Timer } from "../components/Timer"
import { Footer } from "../components/Footer"
import { DataAtual } from "../components/DataAtual"
import { IconPlay, IconPause } from "../components/Icons"

const pomodoro = [
    {
        id: 'focus',
        initialValue: 25 * 60,
        image: require('./Imagem Foco.png'),
        display: 'Foco'
    },
    {
        id: 'short',
        initialValue: 5 * 60,
        image: require('./Imagem Descanso Curto.png'),
        display: 'Pausa curta'
    },
    {
        id: 'long',
        initialValue: 15 * 60,
        image: require('./Imagem Descanso Longo.png'),
        display: 'Pausa longa'

    },
]

export default function Index() {
    
    const [timerType, setTimerType] = useState(pomodoro[0])

    const [seconds, setSeconds] = useState(pomodoro[0].initialValue)

    const [timerRunning, setTimerRunning] = useState(false)

    const timerRef = useRef(null)


    // Faz a limpeza com um double Check (limpa intervalo, ref atual e para o timer)
    const clear = () => {
        if (timerRef.current != null) {
            clearInterval(timerRef.current)
            timerRef.current = null
            setTimerRunning(false)
        } 
    }

    // Troca o tipo do timer (foco, pausa longa e curta, definindo novo tipo de timer, reseta contador de segundos e limpa intervalo)
    const toggleTimerType = (newTimerType) => {
        setTimerType(newTimerType)
        setSeconds(newTimerType.initialValue)
        clear()
    }

    // Olha o tipo de timer atual 
    const toggleTimer = () => {
        if (timerRef.current) {
          clear()
          return
        }
      
        setTimerRunning(true)
      
        const id = setInterval(() => {
          setSeconds(oldState => {
              if (oldState === 0) {
                  clear()
                  return timerType.initialValue
              }
              return oldState -1
              })
        }, 1000);
        
        timerRef.current = id;
      };
    
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
                            onPress={ () => toggleTimerType(p)}
                            display={p.display}
                        />
                    ))}
                </View>
                <Timer totalSeconds={seconds}/>
                <FokusButton 
                    title={timerRunning? 'Pausar' : 'Começar'}
                    icon={timerRunning? <IconPause /> : <IconPlay />}
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