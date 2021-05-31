import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

const generateRandomBetween = (min, max, exclude) => {
    min=Math.ceil(min);
    max=Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max-min)) +min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);
    } else{
        return rndNum
    }
}

export default function StartGameScreen(props) {
const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice));

  return (
   
  );
}

const styles = StyleSheet.create({
  
});
