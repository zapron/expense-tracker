import { createContext, useReducer } from "react";
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const DUMMY_EXPENSE = [
  {
    id: `e1`,
    description: `A pair of shoes`,
    amount: 58.0,
    date: new Date(`2022-10-26`),
  },
  {
    id: `e2`,
    description: `A pair of gloves`,
    amount: 50.0,
    date: new Date(`2022-10-27`),
  },
  {
    id: `e3`,
    description: `A pair of tshirts`,
    amount: 1000.6,
    date: new Date(`2022-10-28`),
  },
  {
    id: `e4`,
    description: `A cycle`,
    amount: 26000.5,
    date: new Date(`2022-10-29`),
  },
  {
    id: `e5`,
    description: `A pump`,
    amount: 500.0,
    date: new Date(`2022-10-30`),
  },
  {
    id: `e6`,
    description: `A pair of tshirts`,
    amount: 1000.6,
    date: new Date(`2022-10-28`),
  },
  {
    id: `e7`,
    description: `A cycle`,
    amount: 26000.5,
    date: new Date(`2022-10-29`),
  },
  {
    id: `e8`,
    description: `A pump`,
    amount: 500.0,
    date: new Date(`2022-10-30`),
  },
];

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}
function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSE);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

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
  );
}

export default ExpensesContextProvider;
