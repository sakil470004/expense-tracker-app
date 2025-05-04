import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";
// to combine offline and online data we need to work on this component
function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();
  const expensesCtx = useContext(ExpensesContext);
  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      // get all the expenses from the server
      try {
        const expenses = await fetchExpenses();
        expensesCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not fetch expenses!');
        return;
      }
      setIsFetching(false);
      // set the expenses in the context
    }
    // call the function
    getExpenses();

  }, [])
  function errorHandler() {
    setError(null);
  }
  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }
  if (isFetching) {
    return <LoadingOverlay />
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