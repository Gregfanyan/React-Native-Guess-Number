import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import Colors from "../../constants/Colors";
import TitleText from "../TitleText";

export default function Header(props) {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndriod,
        }),
      }}
    >
      <TitleText style={styles.headerText}>{props.title}</TitleText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 100,
    paddingTop: 50,
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndriod: {
    backgroundColor: Colors.secondary,
  },
  headerText: {
    height: "100%",
    color: Platform.OS === "ios" ? "#ccc" : "white",
    fontSize: 19,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});
