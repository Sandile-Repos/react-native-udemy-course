import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { GlobalStyles } from "../constants/styles";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
