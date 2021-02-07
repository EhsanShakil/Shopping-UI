import React, { useEffect } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";

const getToken = async () => {
  try {
    await AsyncStorage.getItem("userToken");
    navigation.navigate("Auth");
  } catch (error) {
    console.log("getToken", error);
  }
  return getToken();
};

function Loading() {
  useEffect(() => {
    getToken();
  }, []);
  return <ActivityIndicator size={50} color="#000" style={style.container} />;
}

export default Loading;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
