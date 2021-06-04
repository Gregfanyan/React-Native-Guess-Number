import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

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
    backgroundColor: Platform.OS === "android" ? Colors.secondary : "white",
    justifyContent: "center",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
  },
  headerText: {
    height: "100%",
    color: Platform.OS === "ios" ? "#ccc" : "white",
    fontSize: 19,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
