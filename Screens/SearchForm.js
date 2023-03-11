import { StyleSheet, TextInput, View } from "react-native";
import React, { useState, useEffect } from "react";

export default function SearchForm({getSearch}) {

  const [search, setSearch] = useState('')
  
  useEffect(() => {
    getSearch(search)
  }, [search])
  
  return (
    <View>
      <TextInput 
        style={styles.search}
        placeholder="Search"
        placeholderTextColor="#e7e5d7"
        type="text"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#1e2f42",
    color: "#e7e5d7",
    height: 50,
    fontSize: 20,
    textAlign: "center",
  }
});
