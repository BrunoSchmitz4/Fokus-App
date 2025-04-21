import { Pressable, Text, StyleSheet } from "react-native"

export const FokusButton = ( {onPress, title} ) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#b872ff',
        borderRadius: 32,
        padding: 8
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#021123'
    }
})