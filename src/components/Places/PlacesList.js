import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Colors } from "../../../constants/colors";

import PlaceItem from "./PlaceItem";

const PlacesList = ({ places }) => {
  const navigation = useNavigation()

  const selectedPlaceHandler = (id) => {
    navigation.navigate('PlaceDetails', {
      placeId:id
    })
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - start adding some
        </Text>
      </View>
    );
  }
  return (
    <FlatList
    style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect={selectedPlaceHandler} />}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list:{
    margin:24
  },
  fallBackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
