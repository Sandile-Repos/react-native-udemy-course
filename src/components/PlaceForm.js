import React, { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, ScrollView, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./Places/ImagePicker";
import LocationPicker from "./Places/LocationPicker";
import Button from "./UI/Button";
import {Place} from '../models/place'

const PlaceForm = ({onCreatePlace}) => {
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
const placeData = new Place(enteredTile, selectedImage, pickedLocation)
onCreatePlace(placeData)

}

  return (
    <ScrollView style={styles.form}>
      <View>
        
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={enteredTile}
        onChangeText={changeTitleHandler}
        />
      </View>
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
