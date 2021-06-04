import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  ButtonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
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
  let ButtonComponent = TouchableOpacity;
  if (Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.ButtonContainer}>
      <ButtonComponent onPress={props.onPress} activeOpacity={0.8}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

export default MainButton;
