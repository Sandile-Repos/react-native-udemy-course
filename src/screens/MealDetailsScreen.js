import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>Meal Details screen ({mealId})</Text>
    </View>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({});
