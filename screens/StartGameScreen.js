import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return <View style={styles.screen}>The Game Screen</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
