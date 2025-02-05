import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import InputField from '../../src/components/InputField';
import MainButton from '../../src/components/MainButton';
import AvatarPlace from '../../src/components/AvatarPlace';
import bgImage from '../../assets/images/Photo BG.png';
import { colors } from '../../styles/global';
import ІconPlus from '../../assets/icons/PlusInCircle';

export default function RegistrationScreen({ route, navigation }) {
  const [formData, setFormdata] = useState({
    login: '',
    email: '',
    password: '',
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const showPassword = () => {
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleInputChange = (value, inputName) => {
    setFormdata(prevState => ({
      ...prevState,
      [inputName]: value,
    }));
  };
  const onLogin = () => {
    navigation.navigate('Login', {
      email: formData.email,
      password: formData.password,
    });
  };
  const onHome = () => {
    navigation.navigate('Home', {
      email: formData.email,
      password: formData.password,
    });
  };

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
            <AvatarPlace icon={<ІconPlus />} />
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
            <MainButton textButton='Зареєструватися' onPress={onHome} />
            <Text style={styles.smallText}>
              Вже є аккаунт?
              <TouchableWithoutFeedback onPress={onLogin}>
                <Text style={styles.signUpText}> Увійти</Text>
              </TouchableWithoutFeedback>
            </Text>
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
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',

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
