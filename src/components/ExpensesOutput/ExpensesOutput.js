import { View, StyleSheet } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

import { GlobalStyles } from "../constants/styles";

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
];
const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary500,
  },
});
