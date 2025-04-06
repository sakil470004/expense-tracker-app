import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig }) {
    const inputStyles = [styles.input];
    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput {...textInputConfig}
                style={inputStyles}
            />
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 4,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        paddingVertical: 6,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        maxHeight: 200,
        textAlignVertical: 'top',
    },

})