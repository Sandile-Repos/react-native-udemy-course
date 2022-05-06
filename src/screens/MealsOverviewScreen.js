import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  //   const route = useRoute();
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen -{catId}</Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
