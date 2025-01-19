import React from "react";
import { StyleSheet, View } from "react-native";
import SmallButton from "./SmallButton";
import addIcon from "../../assets/add.png";

export default function Avatar() {
  return (
    <View style={styles.containerAvatar}>
      <SmallButton icon={addIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 }],
  },
});
