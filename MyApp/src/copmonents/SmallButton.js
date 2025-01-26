import React from 'react';
import { Pressable, StyleSheet, Image } from 'react-native';
import { colors } from '../../styles/global';

export default function SmallButton({ icon }) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => console.log('press on avatar btn')}
    >
      <Image style={styles.iconButton} source={icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: '100%',
    top: '100%',
    transform: [{ translateX: -12.5 }, { translateY: -39 }],

    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',

    borderColor: colors.orange,
    backgroundColor: colors.white,
    borderRadius: 100,
    borderWidth: 1,
  },
  iconButton: {},
});
