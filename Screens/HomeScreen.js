import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

export default function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setInterval(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  const categories = [
    { id: 1, type: "Earthquakes", endpoint: "earthquakes"},
    { id: 2, type: "Volcanoes", endpoint: "volcanoes"},
    { id: 3, type: "Wildfires", endpoint: "wildfires"},
    { id: 4, type: "Severe Storms", endpoint: "severeStorms"},
    { id: 5, type: "Asteroids", endpoint: "asteroids"},
    { id: 6, type: "About Us", endpoint: "about us"}
  ];
  
  const [images, setImages] = useState([
    require("../assets/redHouse1.png"),
    require("../assets/volcano1.png"),
    require("../assets/wildfire1.png"),
    require("../assets/storm.png"),
    require("../assets/asteroid.png"),
    require("../assets/asteroid.png")
// replace bottom png with a new image for out about us page
  ]);

  let [fontsLoaded] = useFonts({
    Oswald_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  const pressHandler = (endpoint) => {
    navigation.navigate("Doom List", endpoint)
  };

  return (
    <View style={styles.screen}>
      {loading &&<LoadingScreen></LoadingScreen>}
      {!loading && <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.box} onPress={() => pressHandler(item.endpoint)}>
            <Image source={images[index]} style={styles.image}/>
            <Text style={styles.text}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#e7e5d7",
    textAlign: "center",
    padding: 10,
    flexShrink: 1,
    marginLeft: 15,
    fontFamily: "Oswald_400Regular", 
  },
  box: {
    // marginVertical: 15,
    backgroundColor: "#1e2f42",
    borderRadius: 15,
    flex: 1,
    flexDirection: "row",
    height: 150,
    alignItems: "center",
    paddingLeft: 20,
    marginBottom: 20
  },
  screen: {
    backgroundColor: "#020d19",
    height: "100%",
  },
  image: {
    height: 70,
    width: 85
  }
});
