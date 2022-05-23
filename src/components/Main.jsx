import React from "react";
import { View } from "react-native";
import Header from "./Header";
import SlideShow from "./SlideShow";
import ProgramsButton from "./ProgramsButton";
import BottomTabNavigation from "./BottomTabNavigation";
import PlayButton from "./PlayButton";

const Main = () => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, backgroundColor: "grey" }}>
        <SlideShow />
        <ProgramsButton />
        <BottomTabNavigation />
        <PlayButton />
      </View>
    </>
  );
};

export default Main;
