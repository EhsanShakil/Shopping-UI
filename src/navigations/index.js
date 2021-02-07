import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthNavigator from "./AuthRoutes";
import ClientNavigator from "./ClientRoutes";
import AuthLoading from "../screens/AuthLoading";

export default Router = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      Auth: AuthNavigator,
      ClientRoutes: ClientNavigator,
    },
    {
      initialRouteName: "Auth",
    }
  )
);
