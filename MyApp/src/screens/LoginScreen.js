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
import bgImage from '../../assets/images/Photo BG.png';
import { colors } from '../../styles/global';

export default function LoginScreenScreen({ route, navigation }) {
  const [formData, setFormdata] = useState({
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

  const onSignUp = () => {
    navigation.navigate('SignUp', {
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
            <Text style={styles.titleText}>Увійти</Text>
            <View style={styles.containerInput}>
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
            <MainButton textButton='Увійти' onPress={onHome} />
            <Text style={styles.smallText}>
              Немає акаунту?
              <TouchableWithoutFeedback onPress={onSignUp}>
                <Text style={styles.signUpText}> Зареєструватися</Text>
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
    height: 489,
    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: colors.white,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  containerInput: {
    alignItems: 'center',
    gap: 16,
  },

  titleText: {
    marginTop: 32,
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
