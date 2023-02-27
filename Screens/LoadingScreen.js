import React from "react";
import { Animated, StyleSheet, View, Image, Easing } from "react-native";

const LoadingScreen = () => {
  const spinValue = new Animated.Value(0);

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      <Animated.View
        style={[
          styles.meteorContainer,
          {
            transform: [{ rotate: spin }],
          },
        ]}
      >
        <Image
          style={styles.meteor}
          source={require("../assets/asteroid3.png")}
        ></Image>
      </Animated.View>
      <View style={styles.earthContainer}>
        <Image
          style={styles.earth}
          source={require("../assets/splash.png")}
        ></Image>
      </View>
    </View>
  );
};

export default LoadingScreen;

// working css for iphone 14
const styles = StyleSheet.create({
  earthContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  earth: {
    height: "80%",
    width: "80%",
  },
  meteorContainer: {
    position: "absolute",
    top: 65,
    left: 178,
  },
  meteor: {
    height: 350,
    width: 30,
  },
});
