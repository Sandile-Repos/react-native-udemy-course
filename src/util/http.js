import axios from "axios";

const BACKEND_URL = "https://rn-backend-5c142-default-rtdb.firebaseio.com";

export const storeExpense = (expenseData) => {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
};
export const fetchExpense = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
};
