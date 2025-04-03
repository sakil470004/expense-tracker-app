import { createContext, useReducer } from "react";
// dummy data
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
    {
        id: 'e4',
        description: 'A Rosted Chicken',
        amount: 120,
        date: new Date('2025-04-04'),
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, data }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, data }) => { },

});
function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id }, ...state];

        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedExpenses = [...state];//taking a copy of the state
            updatedExpenses[updatableExpenseIndex] = updatedItem;//overwriting the item
            return updatedExpenses;

        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    // useReducer takes a reducer function and an initial state
    // and returns the current state and a dispatch function
    // that can be used to update the state
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    };
    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    }
    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    };

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <ExpensesContext.Provider value={value}>
            {children}
        </ExpensesContext.Provider>
    )
}
export default ExpensesContextProvider;