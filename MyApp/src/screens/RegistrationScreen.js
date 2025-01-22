import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import InputField from "../components/InputField";
import BigButton from "../components/BigButton";
import { useFonts } from "expo-font";
import Avatar from "../components/Avatar";
import bgImage from "../../assets/Photo BG.png";

export default function RegistrationScreen() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto_Condensed-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto_Condensed-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.containerForm}>
          <Avatar />
          <Text style={styles.titleText}>Реєстрація</Text>
          <InputField placeholder="Логін" />
          <InputField placeholder="Адреса електронної пошти" />
          <InputField placeholder="Пароль" isTextShow={true} />
          <BigButton textButton="Зареєструватися" />
          <Text style={styles.smallText}>Вже є аккаунт? Увійти</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  containerForm: {
    position: "relative",
    width: "100%",
    height: 549,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleText: {
    marginTop: 92,
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  smallText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
});
