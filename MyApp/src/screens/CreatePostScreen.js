import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Camera from "../../assets/icons/Camera";
import Cart from "../../assets/icons/Cart";
import Location from "../../assets/icons/Location";
import { colors } from "../../styles/global";
import InputField from "../components/InputField";
import MainButton from "../components/MainButton";
import HomeIndicator from "../components/HomeIndicator";

export default function CreatePostsScreen() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.publicationContainer}>
          <View style={styles.imageContainer}>
            <View style={styles.cameraIconContainer}>
              <Camera />
            </View>
          </View>
          <Text style={styles.textSecondary}>Завантажте фото</Text>
          <View style={styles.inputWrap}>
            <View style={styles.inputContainer}>
              <InputField outerStyles={styles.input} placeholder={"Назва..."} />
            </View>
            <View style={styles.inputContainer}>
              <Location style={styles.iconLocation} />
              <InputField
                outerStyles={styles.input}
                placeholder={"Місцевість..."}
              />

              {/* <GooglePlacesAutocomplete
            placeholder='Місцевість...'
            minLength={4}
            enablePoweredByContainer={false}
            fetchDetails
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              // console.log(data, details);
              setAddress(data.description);
            }}
            query={{ key: PLACES_KEY }}
            styles={{
              container: {
                flex: 1,
              },
              textInputContainer: {
                flexDirection: 'row',
                paddingHorizontal: 8,
              },
              textInput: {
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 15,
                flex: 1,
                borderBottomWidth: 1,
                borderColor: colors.border_gray,
              },
              row: {
                backgroundColor: '#FFFFFF',
                padding: 13,
                height: 44,
                flexDirection: 'row',
              },
              predefinedPlacesDescription: {
                color: '#1faadb',
              },
              listView: {
                maxHeight: 160,
              },
            }}
          /> */}
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <MainButton
            textButton={"Опублікувати"}
            outer={styles.outerButtton}
            textOuter={styles.textButton}
          />
          <View style={styles.CartIconContainer}>
            <Cart />
          </View>
        </View>
        <HomeIndicator />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: "center",
    gap: 32,
    backgroundColor: colors.white,
  },

  publicationContainer: {
    width: "100%",
    gap: 8,
  },
  imageContainer: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderRadius: 8,
  },
  cameraIconContainer: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.white,
    borderRadius: 100,
  },
  textSecondary: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.text_gray,
  },
  inputWrap: {
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: colors.border_gray,
  },
  input: {
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: colors.white,
    borderWidth: 0,
  },
  inputIcon: {
    borderBottomWidth: 0,
  },
  iconLocation: {
    marginLeft: 16,
  },
  outerButtton: {
    marginTop: 0,
    backgroundColor: colors.light_gray,
  },
  textButton: {
    color: colors.text_gray,
  },
  buttonsContainer: {
    width: "100%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  CartIconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light_gray,
    justifyContent: "center",
    alignItems: "center",
  },
});
