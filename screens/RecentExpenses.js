import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
// to combine offline and online data we need to work on this component
function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const expensesCtx = useContext(ExpensesContext);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      // get all the expenses from the server
      const expenses = await fetchExpenses();
      setIsFetching(false);
      // set the expenses in the context
      expensesCtx.setExpenses(expenses);
    }
    // call the function
    getExpenses();

  }, [])
  if (isFetching) {
    return <LoadingOverlay  />
  }
  // the expenses are already in the context so we can use them
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return (expense.date >= date7DaysAgo) && (expense.date <= today);
  });
  return (
    <ExpensesOutput expensesPeriod={"Last 7 Day"} expenses={recentExpenses} fallbackText='No Expenses Registered In 7 Days' />
  );
}
export default RecentExpenses;