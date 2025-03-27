import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function ExpensesSummery({periodName, expenses}) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>Total Expenses</Text>
            <Text style={styles.sum}>{expensesSum.toFixed(2)} TK</Text>
        </View>
    )
}
export default ExpensesSummery;

const styles= StyleSheet.create({
    container: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    period:{
        fontSize: 12,
        color: GlobalStyles.colors.primary400,
    },
    sum:{
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
});