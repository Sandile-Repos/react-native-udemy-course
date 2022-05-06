import React from "react";
import { View, Text, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTile
      id={itemData.item.id}
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
};

const CategoriesScreen = () => {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};

export default CategoriesScreen;
