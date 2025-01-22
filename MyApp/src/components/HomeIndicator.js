import React from "react";
import { View, StyleSheet } from "react-native";

export default function HomeIndicator() {
  return <View style={styles.homeIndicator} />;
}

const styles = StyleSheet.create({
  homeIndicator: {
    position: "absolute",
    bottom: 5,
    width: 134,
    height: 5,
    backgroundColor: "#212121",
    alignSelf: "center",
  },
});
