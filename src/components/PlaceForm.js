import React, { useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./Places/ImagePicker";
import LocationPicker from "./Places/LocationPicker";
import Button from "./UI/Button";

const PlaceForm = () => {
  const [enteredTile, setEnteredTile] = useState("");
  const changeTitleHandler = (enteredText) => {
    setEnteredTile(enteredText);
  };

const SavePlaceHandler = () => {

}

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={enteredTile}
        onChangeText={changeTitleHandler}
      />
      <ImagePicker />
      <LocationPicker />
      <Button onPress={SavePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: { flex: 1, padding: 24 },
  label: { fontWeight: "bold", marginBottom: 4, color: Colors.primary500 },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
