import { StyleSheet, View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";



function ExpensesOutput({ expenses,expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummery expenses={expenses} periodName={expensesPeriod}/>
            <ExpensesList expenses={expenses} />
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