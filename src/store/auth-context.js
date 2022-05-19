import { createContext, useReducer } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

// const expensesReducer = (state, action) => {
//   switch (action.type) {
//     case "ADD":
//       return [{ ...action.payload }, ...state];
//     case "SET":
//       const inverted = action.payload.reverse();
//       return inverted;
//     case "UPDATE":
//       const updatableExpenseIndex = state.findIndex(
//         (expense) => expense.id === action.payload.id
//       );
//       const updatableExpense = state[updatableExpenseIndex];
//       const updatedItem = { ...updatableExpense, ...action.payload.data };
//       const updatedExpenses = [...state];
//       updatedExpenses[updatableExpenseIndex] = updatedItem;
//       return updatedExpenses;
//     case "DELETE":
//       return state.filter((expense) => expense.id !== action.payload);
//     default:
//       return state;
//   }
// };

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();
  const authenticate = (token) => {
    setAuthToken(token);
  };

  const logout = (token) => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
