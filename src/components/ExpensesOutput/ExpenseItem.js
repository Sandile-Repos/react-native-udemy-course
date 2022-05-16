import React from "react";
import { StyleSheet, Text, View, Pressable, Platform } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../../util/date";
const ExpenseItem = ({ id, description, amount, date }) => {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={expensePressHandler}
        style={({ pressed }) => pressed && styles.pressed}
        android_ripple={{ color: GlobalStyles.colors.primary800 }}
      >
        <View style={styles.expenseItem}>
          <View>
            <Text style={[styles.textBase, styles.description]}>
              {description}
            </Text>
            <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
          </View>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{amount.toFixed(2)}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary800,
    borderRadius: 8,
    borderRadius: 6,
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    shadowOpacity: 0.4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressed: {
    opacity: 0.75,
  },
  expenseItem: {
    padding: 12,
    // marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    // elevation: 3,
    // shadowColor: GlobalStyles.colors.gray500,
    // shadowOffset: { width: 1, height: 1 },
    // shadowRadius: 4,
    // shadowOpacity: 0.4,
    overflow: "hidden",
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
