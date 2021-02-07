import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Basket = () => {
  return (
    <View style={style.basket}>
      <Text style={style.text}>This is a Basket Component</Text>
    </View>
  );
};

export default Basket;

const style = StyleSheet.create({
  basket: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  text: {
    fontSize: 24,
  },
});
