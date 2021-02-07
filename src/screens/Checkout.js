import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

const Checkout = ({ image, title, price }) => {
  return (
    <View style={style.container}>
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={style.checkoutImage}
      />

      <View style={style.header}>
        <Text numberOfLines={1} style={style.title}>
          {title}
        </Text>
        <Text style={style.desc}>Description</Text>
        <Text style={style.price}>${price}</Text>
      </View>
      <View style={style.icon}>
        <TouchableOpacity style={style.basket}>
          <SimpleLineIcons name="basket" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            width: 30,
            borderColor: "white",
          }}
        />
        <TouchableOpacity style={style.heart}>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Checkout;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    opacity: 0.8,
    width: 200,
    justifyContent: "space-between",
  },
  header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    width: 120,
    overflow: "hidden",
  },
  desc: {
    fontSize: 12,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },
  basket: {
    margin: 5,
  },
  heart: {
    margin: 5,
  },
  icon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: 40,
    borderRadius: 10,
    position: "relative",
    top: 45,
    right: 50,
  },
  checkoutImage: {
    opacity: 0.8,
    width: "30%",
    margin: 5,
  },
});
