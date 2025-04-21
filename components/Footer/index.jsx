import { View, Text, StyleSheet } from "react-native-web"

export const Footer = ( {textoFooter} ) => {
    return (
        <View style={styles.footer}>
            <Text 
                style={styles.footerText}>
                { ( textoFooter == null ? 'Projeto sem fins lucrativos' : textoFooter) }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '80%',

    },
    footerText: {
        textAlign: 'center',
        color: '#98a0a8',
        fontSize: 12.5
    }
})