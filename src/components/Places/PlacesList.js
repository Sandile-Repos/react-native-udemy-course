import { StyleSheet, Text, View, FlatList } from "react-native";

import PlaceItem from "./PlaceItem";
const PlacesList = ({ places }) => {
  if (!places || places.length === 0) {
    <View style={styles.fallBackContainer}>
      <Text style={styles.fallBackText}>
        No places added yet - start adding some
      </Text>
    </View>;
  }
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  fallBackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
  },
});
