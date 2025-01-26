import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export default function HomeIndicator() {
  return <View style={styles.homeIndicator} />;
}

const styles = StyleSheet.create({
  homeIndicator: {
    position: 'absolute',
    bottom: 5,
    width: 134,
    height: 5,
    backgroundColor: colors.black_primary,
    alignSelf: 'center',
  },
});
