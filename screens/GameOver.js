import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

import bodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <BodyText>Number of Rounds: {props.roundsNumber} </BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Image source={require('../assets/favicon.png')} />
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
