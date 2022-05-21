import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const ProgramsButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ color: "white" }}>Programación</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    padding: 10,
    borderColor: "white",
    backgroundColor: "black",
    alignSelf: "center",
    marginTop: 20
  }
});

export default ProgramsButton;
