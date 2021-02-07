import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Checkout from "./Checkout";

function PrductDetails({ navigation }) {
  const title = navigation.getParam("title");
  const image = navigation.getParam("image");
  const price = navigation.getParam("price");

  const [icon1, setIcon1] = useState(true);
  const [icon2, setIcon2] = useState(false);

  return (
    <View style={style.body}>
      <TouchableOpacity style={style.icons}>
        <TouchableOpacity
          style={style.icon}
          onPress={() => {
            setIcon2(false) || setIcon1(true);
          }}
          activeOpacity={0.6}
        >
          {icon1 ? (
            <>
              <Ionicons name="md-shirt" size={35} color="orange" />
              <Text
                style={{
                  zIndex: 1,
                  display: "flex",
                  color: "red",
                  position: "absolute",
                  left: 120,
                  top: 100,
                }}
              >
                <Checkout image={image} title={title} price={price} />
              </Text>
            </>
          ) : (
            <Ionicons name="md-shirt" size={35} color="grey" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={style.icon}
          onPress={() => {
            setIcon1(false) || setIcon2(true);
          }}
          activeOpacity={0.6}
        >
          {icon2 === false ? (
            <Ionicons name="md-shirt" size={35} color="grey" />
          ) : (
            <>
              <Ionicons name="md-shirt" size={35} color="orange" />
              <Text
                style={{
                  zIndex: 1,
                  display: "flex",
                  color: "red",
                  position: "absolute",
                  left: 120,
                  top: 250,
                }}
              >
                <Checkout image={image} title={title} price={price} />
              </Text>
            </>
          )}
        </TouchableOpacity>

        {/* <TouchableOpacity style={style.icon}>
          <Ionicons name="md-shirt" size={35} color="grey" />
        </TouchableOpacity> */}

        {/* <TouchableOpacity
          style={style.icon}
          onPress={() => setSelected(!selected)}
        >
          <Ionicons name="md-shirt" size={35} color="grey" />
        </TouchableOpacity> */}
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={style.icon}
        onPress={() => setSelected(!selected)}
      >
        {selected ? (
          <Entypo name="heart" size={50} color="black" />
        ) : (
          <Entypo name="heart-outlined" size={50} color="black" />
        )}
      </TouchableOpacity> */}
      <View style={style.container}>
        <Text style={style.text}>{title}</Text>
        <Image
          source={{ uri: image }}
          resizeMode="contain"
          style={style.detailImage}
        />
      </View>
    </View>
  );
}

export default PrductDetails;

const style = StyleSheet.create({
  // icon: {
  //   position: "absolute",
  //   right: 20,
  //   top: 20,
  //   zIndex: 1,
  // },
  icons: {
    display: "flex",
    flexDirection: "column",
    height: 120,
    justifyContent: "space-between",
    position: "absolute",
    zIndex: 1,
    top: 20,
    left: 20,
  },
  body: {
    display: "flex",
    flex: 1,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    position: "absolute",
    bottom: 10,
    zIndex: 1,
    padding: 10,
    fontSize: 20,
  },
  detailImage: {
    width: "70%",
    height: "100%",
    backgroundColor: "white",
  },
  icon: {
    borderWidth: 1,
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  // icon2: {
  //   display: "flex",
  //   position: "absolute",
  //   zIndex: 1,
  //   top: 20,
  //   left: 10,
  //   borderWidth: 1,
  //   width: 50,
  //   height: 50,
  //   borderRadius: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "white",
  // },
});
