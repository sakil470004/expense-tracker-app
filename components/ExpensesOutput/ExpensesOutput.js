import { StyleSheet, Text, View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>
    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }

    return (
        <View style={styles.container}>
            <ExpensesSummery expenses={expenses} periodName={expensesPeriod} />
            {content}
        </View>
    )
}
export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 16,
        marginTop: 32,
    },

});