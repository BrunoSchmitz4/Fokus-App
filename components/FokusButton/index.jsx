import { Pressable, Text, StyleSheet } from "react-native"

export const FokusButton = ( {onPress, title, icon} ) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            {icon}
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
        padding: 8,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#021123'
    }
})