import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.secondary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontSize: 19,
    fontFamily: "open-sans-bold",
  },
});

function MainButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default MainButton;
