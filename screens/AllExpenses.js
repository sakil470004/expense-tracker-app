import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

// this is not working for now. But with some change I can make it work
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallbackText='No Register Expenses' />
  );
}
export default AllExpenses;