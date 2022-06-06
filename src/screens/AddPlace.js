import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlaceForm from "../components/PlaceForm";

const AddPlace = ({navigation}) => {
  const createPlaceHandler = (place) => {
  navigation.navigate('AllPlaces', {
    place:place
  })
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;

const styles = StyleSheet.create({});
