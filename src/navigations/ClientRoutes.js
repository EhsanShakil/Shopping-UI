import React from "react";
import Products from "../screens/Products";
import Details from "../screens/Details";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import ProductDetails from "../screens/PrductDetails";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Basket from "../screens/Basket";
import { Entypo } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Header from "../screens/Header";

const Clients = createBottomTabNavigator(
  {
    Products: {
      screen: Products,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              bottom: 2,
            }}
          >
            <Feather name="home" size={30} color={tintColor} />
            <Text>Home</Text>
          </View>
        ),
        tabBarOptions: {
          activeTintColor: "#fcb549",
          showLabel: false,
          style: {
            height: 70,
            borderTopColor: "white",
          },
        },
      },
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        tabBarIcon: () => (
          <View style={style.basket}>
            <Entypo name="shopping-bag" size={50} color="white" />
          </View>
        ),
        tabBarOptions: {
          activeTintColor: "#fcb549",
          showLabel: false,
          style: {
            height: 70,
            borderTopColor: "white",
          },
        },
      },
    },
    Details: {
      screen: Details,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              bottom: 2,
            }}
          >
            <Ionicons name="person-outline" size={30} color={tintColor} />
            <Text>Mine</Text>
          </View>
        ),
        tabBarOptions: {
          activeTintColor: "#fcb549",
          showLabel: false,
          style: {
            height: 70,
            borderTopColor: "white",
          },
        },
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        height: 100,
      },
    },
  }
);

export default ClientNavigator = createStackNavigator({
  Clients: {
    screen: Clients,
    navigationOptions: {
      header: () => <Header />,
    },
  },

  ProductDetails: {
    screen: ProductDetails,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const style = StyleSheet.create({
  basket: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fcb549",
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "white",
    position: "relative",
    bottom: 30,
  },
});
