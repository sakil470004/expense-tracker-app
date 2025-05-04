import { createContext, useReducer } from "react";


export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, data,id }) => { },
    setExpenses: (expenses) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, data }) => { },

});
function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            
            return [action.payload, ...state];

        case 'SET':
            const inverted= action.payload.reverse();
            return  inverted;
            

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
    const [expensesState, dispatch] = useReducer(expensesReducer, []);
    const addExpense = (expenseData) => {
        dispatch({ type: 'ADD', payload: expenseData });
    };
    const setExpenses = (expenses) => {
        dispatch({ type: 'SET', payload: expenses });
    }
    const deleteExpense = (id) => {
        dispatch({ type: 'DELETE', payload: id });
    }
    const updateExpense = (id, expenseData) => {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    };

    const value = {
        expenses: expensesState,
        addExpense: addExpense,
        setExpenses: setExpenses,
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