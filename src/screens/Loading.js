import React from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

function Loading() {
  return <ActivityIndicator size={50} color="blue" style={style.container} />;
}

export default Loading;

const style = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
