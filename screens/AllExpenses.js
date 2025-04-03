import { Text, View } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { useContext } from "react";

function AllExpenses() {
   const expensesCtx= useContext(ExpensesContext);
  return (
    <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} />
  );
}
export default AllExpenses;