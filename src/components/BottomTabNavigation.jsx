import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BottomTabNavigation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>H</Text>
      <Text style={styles.text}>M</Text>
      <Text style={styles.text}>C</Text>
      <Text style={styles.text}>A</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "black",
    flexDirection: "row",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    bottom: 0,
    width: "100%"
  },
  text: {
    color: "white",
    fontSize: 35,
    margin: 50
  }
});

export default BottomTabNavigation;
