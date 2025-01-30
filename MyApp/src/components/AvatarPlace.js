import React from "react";
import { Image, StyleSheet, View } from "react-native";
import SmallButton from "./SmallButton";

import { colors } from "../../styles/global";

export default function AvatarPlace({ icon, isAvatar }) {
  return (
    <View style={styles.containerAvatar}>
      {isAvatar && <Image source={isAvatar} />}
      <SmallButton icon={icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 + 16 }],
  },
});
