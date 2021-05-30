import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 50,
    backgroundColor: "#f7287b",
    alignItems: "center",
  },
  headerText: {
    color: "black",
    fontSize: 18,
  },
});
