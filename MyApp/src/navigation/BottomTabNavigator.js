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
import { logoutDB } from '../utils/auth';
import { useDispatch } from 'react-redux';
import CommentsScreen from '../screens/CommentsScreen';
import MapScreen from '../screens/MapScreen';

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName='Posts'
      screenOptions={({ }) => ({
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
          display: 'flex',
        },
      })}
    >
      <Tab.Screen
        name='Posts'
        component={PostsScreen}
        options={({ }) => ({
          title: 'Публікації',
          headerRight: () => (
            < TouchableOpacity
              style={{ marginRight: 16 }}
              onPress={() => logoutDB(dispatch)}
            >
              <LogOut />
            </TouchableOpacity>
          ),

          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon icon={FooterGrid} focused={focused} />
          ),
        })}
      />
      < Tab.Screen
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
      < Tab.Screen
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

      {/* <Tab.Screen
        name='Comment'
        component={CommentsScreen}

        options={({ navigation }) => ({
          title: 'Коментарі',
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
          headerLeft: ({ }) => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}>
              <GoBack />
            </TouchableOpacity>
          )
        })}

      /> */}

      {/* <Tab.Screen
        name='Map'
        component={MapScreen}

        options={({ navigation }) => ({
          title: 'Карта',
          tabBarButton: () => null,
          tabBarStyle: { display: 'none' },
          headerLeft: ({ }) => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}>
              <GoBack />
            </TouchableOpacity>
          ),
        })}
      /> */}

    </Tab.Navigator >
  );
};



export default BottomTabNavigator;
