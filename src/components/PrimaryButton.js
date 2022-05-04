import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const PrimaryButton = ({ children, onPress }) => {
  // const pressHandler = () => {
  //   onPress()
  // };
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        // onPress={pressHandler}
        onPress={onPress}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.button}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  button: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
