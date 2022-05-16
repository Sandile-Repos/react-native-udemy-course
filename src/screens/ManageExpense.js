import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>ManageExpense Screen</Text>
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({});
