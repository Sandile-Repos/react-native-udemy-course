import { useState } from "react";
import { ImageBackground, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import StartGameScreen from "./src/screen/StartGameScreen";
import GameScreen from "./src/screen/GameScreen";
import Colors from "./src/constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: "#ddb52f",
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
