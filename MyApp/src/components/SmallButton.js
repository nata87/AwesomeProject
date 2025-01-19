import React from "react";
import { Pressable, StyleSheet, Image } from "react-native";

export default function SmallButton({ icon }) {
  return (
    <Pressable style={styles.button}>
      <Image style={styles.iconButton} source={icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    left: "100%",
    top: "100%",
    transform: [{ translateX: -12.5 }, { translateY: -39 }],
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  iconButton: {
    width: 25,
    height: 25,
  },
});
