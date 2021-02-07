import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const firstKeyDown = () => {
    passwordRef.current.focus();
  };

  const secondKeyDown = () => {
    submitRef.current.focus();
  };

  const submitKeyDown = () => {
    alert("submitted");
  };

  const setToken = async () => {
    if (email.toLowerCase() === "test" && password.toLowerCase() === "test") {
      await AsyncStorage.setItem("userToken", "abc");
      navigation.navigate("ClientRoutes");
      setLoggedIn(true);
    } else {
      console.log("setToken", error);
      setLoggedIn(false);
      setError("email or password is wrong");
    }
  };

  return (
    <View style={style.login}>
      <Text style={style.heading}>Login</Text>
      <Input
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email Address"
        style={style.input}
        ref={emailRef}
        returnKeyType={"next"}
        keyboardType={"default"}
        onSubmitEditing={firstKeyDown}
      />
      <Input
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        style={style.input}
        ref={passwordRef}
        returnKeyType={"done"}
        keyboardType={"default"}
      />
      <Button title="Login" ref={submitRef} onPress={() => setToken()} />
      {!loggedIn && <Text style={{ color: "red" }}>{error}</Text>}
      <Text>
        Don't have a account?{" "}
        <Text
          style={style.signup}
          onPress={() => navigation.navigate("Signup")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
};
export default Signin;

const style = StyleSheet.create({
  login: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 2,
    padding: 10,
    width: "80%",
    margin: 10,
  },
  signup: {
    color: "blue",
  },
  heading: {
    fontSize: 24,
  },
});
