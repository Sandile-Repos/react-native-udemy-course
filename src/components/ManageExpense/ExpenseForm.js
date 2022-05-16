import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  //   const [amountValue, setAmountValue] = useState("");
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangedHandler = (inputIdentifier, enteredValue) => {
    setInputValues((curInput) => {
      return {
        ...curInput,
        [inputIdentifier]: enteredValue,
      };
    });
  };
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.inputRow}>
        <Input
          style={styles.rowInput}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            value: inputValues.amount,
            onChangeText: inputChangedHandler.bind(this, "amount"),
          }}
        />
        <Input
          style={styles.rowInput}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            value: inputValues.date,
            onChangeText: inputChangedHandler.bind(this, "date"),
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          //   autoCorrect:false //default is true
          //   autoCapitalize:'none' //default is 'sentences'
          value: inputValues.description,
          onChangeText: inputChangedHandler.bind(this, "description"),
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
});
