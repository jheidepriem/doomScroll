import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { fetchEarthquakeData, fetchDisasterData} from "./ApiCalls/apiCalls";
import HomeScreen from "./Screens/HomeScreen";
import CategoryScreen from "./Screens/CategoryScreen";
import FilteredScreen from "./Screens/FilteredScreen";
import DisasterDetailsScreen from "./Screens/DisasterDetailsScreen";
import AboutUs from "./Screens/AboutUs";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerStyle: {backgroundColor: "#020d19"}, headerTitleStyle: {color: "#e7e5d7", fontSize: 20}, headerBackTitle: "Back"}}>
          <Stack.Screen name="DoomScroll" component={HomeScreen} screenOptions={{headerBackTitle: "Back"}} />
          <Stack.Screen name="Doom List" component={CategoryScreen} screenOptions={{headerBackTitle: "Back"}}/>
          <Stack.Screen name="Doom Details" component={DisasterDetailsScreen} screenOptions={{headerBackTitle: "Back"}}  />
          <Stack.Screen name="Meet Your Doom" component={FilteredScreen} screenOptions={{headerBackTitle: "Back"}}  />
          <Stack.Screen name="About Us!" component={FilteredScreen} screenOptions={{headerBackTitle: "Back"}}  />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
