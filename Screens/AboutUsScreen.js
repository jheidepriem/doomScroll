import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoadingScreen from "./LoadingScreen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

export default function AboutUsScreen() {
  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text style={styles.text}>Hi there</Text>
      <LoadingScreen></LoadingScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#e7e5d7",
    textAlign: "center",
    flexShrink: 1,
    fontFamily: "Oswald_400Regular",
  },
});
