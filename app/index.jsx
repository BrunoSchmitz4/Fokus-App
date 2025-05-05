import { Text, View, StyleSheet, Image } from "react-native"
import { FokusButton } from '../components/FokusButton'
import { Footer } from '../components/Footer'
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/FokusLogo.svg')} />
            <View style={styles.inner}>
                <Text style={styles.title}>Otimize sua {'\n'}produtividade, {'\n'}
                    <Text style={styles.Bold}>mergulhe no que {'\n'}importa</Text>
                </Text>
                <Image source={ require('../assets/images/Imagem tela inicial.svg') }/>
                {/* Se eu quero uma navegação sem retorno, devo usar o replace, para reiniciar o stack */}
                <FokusButton title="Quero iniciar!" onPress={() => router.navigate('/pomodoro')}/>
                <Footer />
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
    inner: {
        gap: 16
    },
    title: {
        color: '#FFFF',
        textAlign: 'center',
        fontSize: 26
    },
    Bold: {
        fontWeight: 'bold'
    }
})