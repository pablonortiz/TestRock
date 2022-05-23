import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const BottomTabNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.text}>H</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>M</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>A</Text>
      </TouchableOpacity>
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
