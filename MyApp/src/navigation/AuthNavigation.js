import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import CommentsScreen from '../screens/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
import { TouchableOpacity } from 'react-native';
import GoBack from '../../assets/icons/GoBack';
import MapScreen from '../screens/MapScreen';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const Stack = createStackNavigator();

const AuthNavigator = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.userInfo);
  console.log("USER in auth", user)
  const initialRouteName = user ? "Home" : "Login";

  useEffect(() => {
    if (user && user?.uid) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  }, [user]);


  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 16,
          color: '#333',
          fontFamily: 'Roboto-Medium',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name='Home' component={BottomTabNavigator} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='SignUp' component={RegistrationScreen} />

      <Stack.Screen
        name='Comment'
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Коментарі',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <GoBack />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name='Map'
        component={MapScreen}
        options={({ navigation }) => ({
          headerShown: true,

          title: 'Карта',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <GoBack />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>


  );
};

export default AuthNavigator;
