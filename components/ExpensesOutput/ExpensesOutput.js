import { StyleSheet, View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-01-01'),
    },
    {
        id: 'e2',
        description: 'A pair of pants',
        amount: 39.99,
        date: new Date('2023-02-01'),
    },
    {
        id: 'e3',
        description: 'A pair of socks',
        amount: 19.99,
        date: new Date('2023-03-01'),
    },
];

function ExpensesOutput({ expenses,expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummery expenses={DUMMY_EXPENSES} periodName={expensesPeriod}/>
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
    )
}
export default ExpensesOutput;

const styles = StyleSheet.create({
    container:{
        padding:24,
        paddingBottom:0,
        backgroundColor:GlobalStyles.colors.primary700,
        flex:1,
    }

});