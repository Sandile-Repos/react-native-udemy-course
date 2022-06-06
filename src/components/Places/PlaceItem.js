import React from "react";
import { Pressable, StyleSheet, Text, View, Image } from "react-native";

const PaceItem = ({ place, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View>
        <Image source={{ uri: place.imageUrl && place.imageUrl }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PaceItem;

const styles = StyleSheet.create({});
