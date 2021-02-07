import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Details = ({ navigation }) => {
  const expireToken = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      navigation.navigate("Auth");
    } catch (error) {
      console.log("expireToken", error);
    }
  };
  return (
    <View style={style.details}>
      <Text style={style.text}>This is a Detail Component</Text>
      <Button title="Logout" onPress={() => expireToken()} />
    </View>
  );
};

export default Details;

const style = StyleSheet.create({
  details: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen",
  },
  text: {
    fontSize: 24,
  },
});
