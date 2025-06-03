import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
// this is for error overlay
function ErrorOverlay({ message, onConfirm }) {
    return (
        <View style={styles.container}>
            <Text style={[styles.text,styles.tittle]}>An Error Occurred</Text>
            <Text style={[styles.text,styles.message]}>{message}</Text>
            <Button onPress={onConfirm}>Okay</Button>
        </View>
    );
}
export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: GlobalStyles.colors.error500,
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        color: GlobalStyles.colors.error500,
        textAlign: 'center',
        marginBottom: 24,
    }
});