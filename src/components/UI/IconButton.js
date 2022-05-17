import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const IconButton = ({ icon, size, color, onPress, type }) => {
  let IconType = Ionicons;
  if (type === "antdesign") {
    IconType = AntDesign;
  }
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <IconType name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
