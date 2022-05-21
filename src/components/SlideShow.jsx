import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SlideShow = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Dummy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "50%",
    height: 120,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 20
  }
});

export default SlideShow;
