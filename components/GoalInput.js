import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet } from "react-native";

const GoalInput = ({ setCourseGoals }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
  };
  return (
    <View style={inputContainer}>
      <TextInput
        placeholder='Course Goal'
        style={input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title='ADD' onPress={addGoalHandler.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
  },
});

const { input, inputContainer } = styles;
export default GoalInput;
