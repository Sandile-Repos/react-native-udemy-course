import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higer or lower</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
