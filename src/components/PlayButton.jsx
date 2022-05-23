import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Image from "../image";

const PlayButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image src={require("../img/play.png")} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  }
});

export default PlayButton;
