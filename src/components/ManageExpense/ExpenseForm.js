import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Input from "./input";

const ExpenseForm = () => {
    const amountChangeHandler = () =>{}
  return (
    <View>
      <Input 
      label="Amount" 
      textInputConfig={{
          keyboardType='decimal-pad',
          onChangeText:amountChangeHandler,
      }}
      />
      <Input 
      label="Date" 
      textInputConfig={{
          placeHolder:'YYYY-MM-DD', 
          maxLength:10, 
          onChangeText:()=>{}
        }} />
      <Input 
      label="Description" textInputConfig={{
          multiline:true,
        //   autoCorrect:false //default is true
        //   autoCapitalize:'none' //default is 'sentences'
        }} />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({});
