import React from 'react';
import { StyleSheet, View } from 'react-native';
import SmallButton from './SmallButton';
import iconPlus from '../../assets/images/Plus.png';
import { colors } from '../../styles/global';

export default function AvatarPlace() {
  return (
    <View style={styles.containerAvatar}>
      <SmallButton icon={iconPlus} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerAvatar: {
    width: 120,
    height: 120,
    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 }],
  },
}); 
