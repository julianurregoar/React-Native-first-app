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
        <View style={buttonContainer}>
          <View style={button}>
            <Button title={"CANCEL"} color='red' onPress={onCancel} />
          </View>
          <View style={button}>
            <Button title='ADD' onPress={addGoalHandler} />
          </View>
        </View>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

const { input, inputContainer, buttonContainer, button } = styles;
export default GoalInput;
