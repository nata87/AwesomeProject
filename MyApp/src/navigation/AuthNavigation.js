import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import CommentsScreen from "../screens/CommentsScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { TouchableOpacity } from "react-native";
import GoBack from "../../assets/icons/GoBack";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {
          fontSize: 16,
          color: "#333",
          fontFamily: "Roboto-Medium",
        },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegistrationScreen} />
      <Stack.Screen
        name="Comment"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerShown: true,
          title: "Коментарі",
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
