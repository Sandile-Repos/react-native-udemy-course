import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// const Input = ({label, type, maxLength}) => {
const Input = ({ label, textInputConfig }) => {
  return (
    <View>
      <Text>{label}</Text>
      {/* <TextInput keyboardType={type} maxLength={maxLength} /> */}
      <TextInput {...textInputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
