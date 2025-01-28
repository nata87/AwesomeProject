import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

export default function MainButton({ textButton, data }) {
  return (
    <Pressable style={styles.button} onPress={data}>
      <Text style={styles.textButton}>{textButton}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 43,
    marginBottom: 16,
   

    backgroundColor: colors.orange,
    borderRadius: 100,
  },
  textButton: {
    color: colors.white,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});