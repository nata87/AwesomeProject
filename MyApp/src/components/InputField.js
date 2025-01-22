import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function InputField({ placeholder, isTextShow }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#BDBDBD"
      />
      {isTextShow && <Text style={styles.textShowPassword}>Показати</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",

    width: 343,
    height: 50,
    marginBottom: 16,
    paddingRight: 16,
    paddingLeft: 16,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  input: {
    flex: 1,
    height: 50,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  textShowPassword: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
