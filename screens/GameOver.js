import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import BodyText from "../components/BodyText";

import bodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

export default function GameOver(props) {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={200}
          source={require("../assets/success.png")}
          // source={{
          //   uri: "https://image.shutterstock.com/image-photo/evening-view-ama-dablam-on-260nw-258841592.jpg",
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContaier}>
        <BodyText style={styles.textResult}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> Rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
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
  resultContaier: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  textResult: {
    textAlign: "center",
    fontSize: 20,
  },
});
