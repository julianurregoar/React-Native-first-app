import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, Modal } from "react-native";

const GoalInput = ({ visible, addGoal, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    addGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title={"Cancel"} color='red' onPress={onCancel} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
  },
});

const { input, inputContainer } = styles;
export default GoalInput;
