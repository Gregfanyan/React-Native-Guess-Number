import React, { useState, useRef, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyle from "../constants/DefaultStyle";
import TitleText from "../components/TitleText";
import MainScreen from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderListItem = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

export default function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Wrong answer", "try again", [
        { text: "sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setPastGuesses((curRounds) => curRounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };

  return (
    <View style={styles.screen}>
      <TitleText>Opponent'ss Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainScreen onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainScreen>
        <MainScreen onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainScreen>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guessNum, index) =>
            renderListItem(guessNum, pastGuesses.length - index)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "80%",
  },
  listContainer: {
    flex: 1,
    width: "60%",
  },
  list: {
    flexGrow: 1,
    //alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
