import { View, ActivityIndicator, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
//  whenever loading data from the server we can use this component
function LoadingOverlay() {
    return (
        <View style={styles.container}>
            <ActivityIndicator size='large' color='white' />
        </View>
    );
}
export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
});