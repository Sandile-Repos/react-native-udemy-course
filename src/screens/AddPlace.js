import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../../util/database";

const AddPlace = ({navigation}) => {
  const createPlaceHandler = async  (place) => {
  await insertPlace(place)
  navigation.navigate('AllPlaces', {
    place:place
  })
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
