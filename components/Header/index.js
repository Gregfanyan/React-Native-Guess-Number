import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/Colors";
import TitleText from "../TitleText";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    paddingTop: 50,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
  },
  headerText: {
    height: "100%",
    color: "black",
    fontSize: 19,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
