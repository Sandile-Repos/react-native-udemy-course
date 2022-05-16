import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 999.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 729.99,
    date: new Date("2022-01-03"),
  },
  {
    id: "e3",
    description: "Golf Shirts",
    amount: 449.99,
    date: new Date("2021-12-25"),
  },
  {
    id: "e4",
    description: "A Book",
    amount: 120.99,
    date: new Date("2022-02-15"),
  },
  {
    id: "e5",
    description: "Desk Fan",
    amount: 350.0,
    date: new Date("2022-01-28"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 729.99,
    date: new Date("2022-01-03"),
  },
  {
    id: "e7",
    description: "Golf Shirts",
    amount: 449.99,
    date: new Date("2021-12-25"),
  },
  {
    id: "e8",
    description: "A Book",
    amount: 120.99,
    date: new Date("2022-02-15"),
  },
  {
    id: "e9",
    description: "Desk Fan",
    amount: 350.0,
    date: new Date("2022-01-28"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
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
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
};

export default ExpensesContextProvider;
