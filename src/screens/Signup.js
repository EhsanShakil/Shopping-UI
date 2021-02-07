import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./TextInput";

const Signup = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  const firstKeyDown = () => {
    emailRef.current.focus();
  };

  const secondKeyDown = () => {
    passwordRef.current.focus();
  };

  const submitKeyDown = () => {
    alert("submitted");
  };

  return (
    <View style={style.signup}>
      <Text style={style.heading}>Sign Up</Text>
      <Input
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="Username"
        style={style.input}
        ref={usernameRef}
        returnKeyType={"next"}
        keyboardType={"default"}
        onSubmitEditing={firstKeyDown}
      />
      <Input
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="Email Address"
        style={style.input}
        ref={emailRef}
        returnKeyType={"next"}
        keyboardType={"default"}
        onSubmitEditing={secondKeyDown}
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
      <Button title="Sign Up" ref={submitRef} onPress={() => alert("Signup")} />
      <Text>
        Already have a account?{" "}
        <Text
          style={style.signin}
          onPress={() => navigation.navigate("Signin")}
        >
          Login
        </Text>
      </Text>
    </View>
  );
};

export default Signup;

const style = StyleSheet.create({
  signup: {
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
  heading: {
    fontSize: 24,
  },
  signin: {
    color: "blue",
  },
});
