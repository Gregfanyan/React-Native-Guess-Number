import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    textShadowRadius: 6,
    elevation: 6,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});
