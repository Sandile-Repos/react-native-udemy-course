import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import MealsList from "../components/MealsList/MealsList";
// import { FavouritesContext } from "../store/context/favaourites-context";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = () => {
  // const favouriteMealCtx = useContext(FavouritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

  const favouriteMeals = MEALS.filter((meal) =>
    // favouriteMealCtx.ids.includes(meal.id)
    favouriteMealIds.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
