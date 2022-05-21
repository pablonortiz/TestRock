import React from "react";
import { View, StyleSheet } from "react-native";
import Image from "../image";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image src={require("../img/ROCK_B.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Header;
