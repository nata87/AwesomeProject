import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function BigButton({ textButton }) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log("press on button")}
    >
      <Text style={styles.textButton}>{textButton}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 343,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  textButton: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
