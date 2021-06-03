import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function BodyText(props) {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
}

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
