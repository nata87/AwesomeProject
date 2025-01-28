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
  const [formData, setFormdata] = useState({
    login: '',
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const showPassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const consolData = () => {
    console.log(formData);
  };

  const handleInputChange = (value, inputName) => {
    setFormdata(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };

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
                onChangeText={value => handleInputChange(value, 'login')}
                placeholder='Логін'
                value={formData.login}
              />
              <InputField
                placeholder='Адреса електронної пошти'
                onChangeText={value => handleInputChange(value, 'email')}
                value={formData.email}
              />
              <InputField
                placeholder='Пароль'
                onChangeText={value => handleInputChange(value, 'password')}
                value={formData.password}
                isPasswordVisible={isPasswordVisible}
                isShowButton={true}
                showPassword={showPassword}
              />
            </View>
            <MainButton textButton='Зареєструватися' data={consolData} />
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
    padding:16,
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