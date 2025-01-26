import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useFonts } from 'expo-font';
import InputField from '../../src/copmonents/InputField';
import MainButton from '../../src/copmonents/MainButton';
import AvatarPlace from '../../src/copmonents/AvatarPlace';
import bgImage from '../../assets/images/Photo BG.png';
import { colors } from '../../styles/global';

export default function RegistrationScreen() {

  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../assets/fonts/Roboto_Condensed-Regular.ttf'),
    'Roboto-Medium': require('../../assets/fonts/Roboto_Condensed-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.wrapper}>
        <ImageBackground
          source={bgImage}
          resizeMode='cover'
          style={styles.image}
        >
          <View style={styles.containerForm}>
            <Text style={styles.titleText}>Реєстрація</Text>
            <AvatarPlace />
            <View style={styles.containerInput}>
              <InputField
                
                placeholder='Логін'
                
              />
              <InputField
                placeholder='Адреса електронної пошти'
                
              />
              <InputField
                placeholder='Пароль'
                
                isShowButton={true}
               
              />
            </View>
            <MainButton textButton='Зареєструватися' />
            <Text style={styles.smallText}>Вже є аккаунт? Увійти</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  containerForm: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    height: 549,
    backgroundColor: 'white',
    padding: 16,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  
  },

  containerInput: {
    alignItems: 'center',
    gap: 16,
  },

  titleText: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
  },
});
