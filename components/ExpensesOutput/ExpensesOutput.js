import { View } from "react-native";
import ExpensesSummery from "./ExpensesSummery";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses }) {
    return (
        <View>
            <ExpensesSummery />
            <ExpensesList expenses={expenses} />
        </View>
    )
}
export default ExpensesOutput;