import { View, StyleSheet, Image } from "react-native";
import { colors } from "../../styles/global";

export default function Avatar({ width, height, borderRadius = 16, userFoto }) {
  return (
    <View style={[styles.avatar, { width, height, borderRadius }]}>
      <Image source={userFoto} style={{ width, height, borderRadius }} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: colors.light_gray,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
});
