import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

import bodyText from "../components/BodyText";
import TitleText from "../components/TitleText";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={200}
          //source={require("../assets/success.png")}
          source={{
            uri: "https://image.shutterstock.com/image-photo/evening-view-ama-dablam-on-260nw-258841592.jpg",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of Rounds: {props.roundsNumber} </BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
