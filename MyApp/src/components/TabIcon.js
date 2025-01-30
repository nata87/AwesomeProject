import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../styles/global";

const TabIcon = ({ icon: Icon, focused, outer }) => {
  return (
    <View
      style={[styles.iconContainer, focused && styles.focusedContainer, outer]}
    >
      <Icon stroke={focused ? colors.white : colors.black_primary_80} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 8,
    width: 40,
    height: 40,
  },
  focusedContainer: {
    width: 70,
    backgroundColor: colors.orange,
  },
});

export default TabIcon;
