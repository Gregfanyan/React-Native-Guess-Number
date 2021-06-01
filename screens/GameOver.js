import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of Rounds: {props.roundsNumber} </Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
});
