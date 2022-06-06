import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView } from "react-native";
import { setSelectedLog } from "react-native/Libraries/LogBox/Data/LogBoxData";
import { Colors } from "../../constants/colors";
import ImagePicker from "./Places/ImagePicker";
import LocationPicker from "./Places/LocationPicker";
import Button from "./UI/Button";

const PlaceForm = () => {
  const [enteredTile, setEnteredTile] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();
  
  const changeTitleHandler = (enteredText) => {
    setEnteredTile(enteredText);
  };

  const takeImageHandler = (imageUri)=>{
    setSelectedImage(imageUri)
  }

  const pickedLocationHandler = useCallback((location)=>{
    setPickedLocation(location)
  },[])

const SavePlaceHandler = () => {
console.log(enteredTile)
console.log(selectedImage)
console.log(pickedLocation)
}

  return (
    <ScrollView style={styles.form}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={enteredTile}
        onChangeText={changeTitleHandler}
      />
      <ImagePicker onTakeImage={takeImageHandler}/>
      <LocationPicker onPickLocation={pickedLocationHandler}/>
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
