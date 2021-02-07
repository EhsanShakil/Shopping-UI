import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

const style = StyleSheet.create({
  header: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

function Header() {
  return (
    <View style={style.header}>
      <StatusBar backgroundColor="#fcb549" />
      <TouchableOpacity>
        <Entypo name="dots-three-horizontal" size={30} color="black" />
      </TouchableOpacity>
      <Text style={style.heading}>SHOP</Text>
      <TouchableOpacity>
        <Entypo name="shopping-bag" size={30} color="orange" />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
