import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Flexbox from "./Flexbox";

export default function App() {
  const [outputText, setOutputText] = useState("Open up App.js");
  return (
    <View>
      <Flexbox />
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder='Course Goal'
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 2,
            padding: 10,
          }}
        />
        <Button title='Add' />
      </View> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
