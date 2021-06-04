import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import BodyText from "../components/BodyText";

import bodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import MainButton from "../components/MainButton";

export default function GameOver(props) {
  return (
    <ScrollView>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContaier: {
    marginHorizontal: Dimensions.get("window").height < 600 ? 1 : 30,
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  textResult: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
  },
});
