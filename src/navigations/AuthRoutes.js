import React from "react";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import { createStackNavigator } from "react-navigation-stack";

export default AuthNavigator = createStackNavigator({
  Signin: {
    screen: Signin,
    navigationOptions: {
      headerShown: false,
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      headerShown: false,
    },
  },
});
