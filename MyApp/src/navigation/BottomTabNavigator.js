import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../styles/global';
import ProfileScreen from '../screens/ProfileScreen';
import PostsScreen from '../screens/PostsScreen';
import FooterGrid from '../../assets/icons/FooterGrid';
import User from '../../assets/icons/User';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import Plus from '../../assets/icons/Plus';
import TabIcon from '../components/TabIcon';
import LogOut from '../../assets/icons/LogOut';
import GoBack from '../../assets/icons/GoBack';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Profile'
      screenOptions={({ navigation }) => ({
        headerShown: true,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.white,
          height: 83,
        },
        headerTitleStyle: {
          fontSize: 16,
          color: '#333',
          fontFamily: 'Roboto-Medium',
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingLeft: 82,
          paddingRight: 82,

          paddingTop: 8,
          paddingBottom: 8,
        },
      })}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={({ navigation }) => ({
          title: 'Публікації',
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16 }}>
              <LogOut onPress={() => navigation.navigate('Login')} />
            </TouchableOpacity>
          ),
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={FooterGrid} focused={focused} />
          ),
        })}
      />
      <Tab.Screen
        name='CreatePost'
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: 'Створити публікацію',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            >
              <GoBack />
            </TouchableOpacity>
          ),

          tabBarShowLabel: false,
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={Plus} focused={focused} />
          ),
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={User} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.light_gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusedContainer: {
    backgroundColor: colors.orange,
  },
  text: {
    flex: 1,

    textAlign: 'center',
    fontSize: 16,
    color: '#333',
    fontFamily: 'Roboto-Medium',
  },
});

export default BottomTabNavigator;
