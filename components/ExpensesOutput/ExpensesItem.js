import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesItem({ description, amount, date }) {
    return (
        <Pressable onPress={() => console.log("Pressed!")}>
            <View style={styles.expenseItem}>
                <View>

                    <Text style={[styles.textBase,styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{date.toDateString()}</Text>
                </View>
                <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount.toFixed(2)} TK</Text>
                </View>
            </View>
        </Pressable>
    );
}
export default ExpensesItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        borderRadius: 8,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        overflow: 'hidden',

    },
    textBase: {
        color: GlobalStyles.colors.primary100,
    },
    description: {
        fontSize: 16,
       marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    amount: {
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    },
});