import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../../styles/global';

export default function InputField({
  placeholder,
  value,
  isPasswordVisible,
  isShowButton,
  onChangeText,
  showPassword,
  IconComponent,
  outerStyles,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused && styles.focusedInput,
        outerStyles,
      ]}
    >
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#BDBDBD'
        secureTextEntry={isPasswordVisible}
      />
      {isShowButton && (
        <Pressable style={styles.button} onPress={showPassword}>
          {IconComponent ? (
            <IconComponent />
          ) : (
            <Text style={styles.textShowPassword}>
              {isPasswordVisible ? 'Показати' : 'Приховати'}
            </Text>
          )}
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    width: '100%',
    height: 50,
    paddingRight: 16,
    paddingLeft: 16,

    backgroundColor: colors.light_gray,
    borderWidth: 1,
    borderColor: colors.border_gray,
    borderRadius: 8,
  },
  focusedInput: {
    borderColor: colors.orange,
    color: colors.black_primary,
  },

  input: {
    flex: 1,
    height: 50,

    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
  textShowPassword: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
  },
});
