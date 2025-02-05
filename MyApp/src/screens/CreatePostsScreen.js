import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import Camera from '../../assets/icons/Camera';
import Cart from '../../assets/icons/Cart';
import LocationIcon from '../../assets/icons/LocationIcon';
import { colors } from '../../styles/global';
import InputField from '../components/InputField';
import MainButton from '../components/MainButton';
import HomeIndicator from '../components/HomeIndicator';
import ToggleCamera from '../../assets/icons/ToggleCamera';

export default function CreatePostsScreen({ route, navigation }) {
  const [postData, setPostData] = useState({
    titlePhoto: '',
    locationName: '',
    photoUri: null,
    latitude: null,
    longitude: null,
  });
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [libraryPermission, requestLibraryPermission] = MediaLibrary.usePermissions();
  const camera = useRef();


  if (!permission) {
    return <View />;
  }
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePhoto = async () => {
    if (!camera) return;

    if (!libraryPermission.granted) {
      requestLibraryPermission();
    }

    const image = await camera?.current?.takePictureAsync();
    setPostData((prevState) => ({
      ...prevState,
      photoUri: image.uri,
    }));
    await MediaLibrary.saveToLibraryAsync(image.uri);
  };

  const editPhoto = () => {
    setPostData((prevState) => ({
      ...prevState,
      photoUri: null,
    }));
  };

  const onPosts = async () => {
    if (!isFormComplete) return;

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      
      setPostData(prevState => {
        const updatedData = {
          ...prevState,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };

        navigation.navigate('Posts', { postData: updatedData });
        return updatedData;
      });

      onClearData();
    } catch (error) {
      Alert.alert('Could not fetch location', error.message);
    }
  };

  const handleInputChange = (value, field) => {
    setPostData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onClearData = () => {
    setPostData({
      titlePhoto: '',
      locationName: '',
      photoUri: null,

    });
  };

  const { titlePhoto, locationName, photoUri } = postData;
  const isFormComplete = photoUri && titlePhoto && locationName;

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.publicationContainer}>
            <View style={styles.cameraContainer}>
              {photoUri ? (
                <TouchableWithoutFeedback>
                  <View style={styles.imagePreview}>
                    <Image source={{ uri: photoUri }} style={styles.image} />
                  </View>
                </TouchableWithoutFeedback>
              ) : (
                <CameraView ref={camera} style={styles.camera} facing={facing}>
                  <TouchableOpacity
                    style={styles.buttonFlipCamera}
                    onPress={toggleCameraFacing}
                  >
                    <ToggleCamera />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cameraIconContainer}
                    onPress={takePhoto}
                  >
                    <Camera />
                  </TouchableOpacity>
                </CameraView>
              )}
            </View>
            <TouchableOpacity onPress={editPhoto}>
              <Text style={styles.textSecondary}>
                {photoUri ? 'Редагувати фото' : 'Завантажте фото'}
              </Text>
            </TouchableOpacity>

            <View style={styles.inputWrap}>
              <View style={styles.inputContainer}>
                <InputField
                  outerStyles={styles.input}
                  placeholder={'Назва...'}
                  value={titlePhoto}
                  onChangeText={(value) => handleInputChange(value, 'titlePhoto')}
                />
              </View>
              {/* <GooglePlacesAutocomplete
                placeholder="Місцевість..."
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
                    borderColor: colors.border_gray
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
                  }
                }}
              /> */}


              <View style={styles.inputContainer}>
                <LocationIcon style={styles.iconLocation} />
                <InputField
                  outerStyles={styles.input}
                  placeholder={'Місцевість...'}
                  value={locationName}
                  onChangeText={(value) => handleInputChange(value, 'locationName')}
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonsContainer}>
            <MainButton
              disabled={!isFormComplete}
              onPress={onPosts}
              textButton={'Опублікувати'}
              outer={isFormComplete ? styles.activeButtton : styles.outerButtton}
              textOuter={isFormComplete ? styles.textActive : styles.textButton}
            />
            <TouchableOpacity onPress={onClearData} style={styles.CartIconContainer}>
              <Cart />
            </TouchableOpacity>
          </View>
          <HomeIndicator />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  contentContainer: { flexGrow: 1 },
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    gap: 32,
    backgroundColor: colors.white,
  },
  publicationContainer: {
    width: '100%',
    gap: 8,
  },
  textSecondary: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.text_gray,
  },
  inputWrap: {
    gap: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  iconLocation: {
    marginLeft: 16,
  },
  outerButtton: {
    marginTop: 0,
    backgroundColor: colors.light_gray,
  },
  activeButtton: {
    marginTop: 0,
    backgroundColor: colors.orange,
  },
  textButton: {
    color: colors.text_gray,
  },
  textActive: {
    color: colors.white,
  },
  buttonsContainer: {
    width: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  CartIconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderRadius: 8,
  },
  camera: {
    position: 'relative',
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
  },
  cameraIconContainer: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 100,
  },
  buttonFlipCamera: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 100,
    color: colors.orange,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

