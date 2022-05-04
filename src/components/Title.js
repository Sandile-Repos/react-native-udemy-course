import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.accent500,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
