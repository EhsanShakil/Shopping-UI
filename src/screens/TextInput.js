import React from "react";
import { TextInput } from "react-native";

const Input = (
  {
    onChangeText,
    value,
    placeholder,
    style,
    onSubmitEditing,
    returnKeyType,
    keyboardType,
  },
  ref
) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={style}
      onSubmitEditing={onSubmitEditing}
      ref={ref}
      blurOnSubmit={returnKeyType === "next" ? false : true}
      returnKeyType={returnKeyType}
      keyboardType={keyboardType}
    />
  );
};

const forwardInput = React.forwardRef(Input);

export default forwardInput;
