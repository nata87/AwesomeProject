import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import AvatarPlace from '../../src/components/AvatarPlace';
import bgImage from '../../assets/images/Photo BG.png';
import { colors } from '../../styles/global';
import img1 from '../../assets/images/Content Block 2.jpg';
import img2 from '../../assets/images/Content Block.jpg';
import img3 from '../../assets/images/Content Block 3.jpg';
import Comment from '../../assets/icons/Comment';
import Like from '../../assets/icons/Like';
import LocationIcon from '../../assets/icons/LocationIcon';
import LogOut from '../../assets/icons/LogOut';
import IconPlus from '../../assets/icons/PlusInCircle';
import avatar from '../../assets/images/avatar.jpg';
import { logoutDB } from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsByUserId } from '../utils/firestore';

export default function ProfileScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const user = useSelector(state => state.user.userInfo);
  console.log("USER in profile", user)

  const dispatch = useDispatch();
  const onComment = (id) => {
    navigation.navigate('Comment', { postId: id });
  };

  const onMap = (latitude, longitude) => {
    navigation.navigate('Map', { latitude, longitude })
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPostsByUserId(user.uid);
      setPosts(allPosts);
    };

    fetchPosts();
  }, [user.uid]);

  const { name: displayName } = user || {};
  console.log("USER", user)

  return (
    <ScrollView
      style={styles.wrapper}
    >
      <ImageBackground source={bgImage} resizeMode='cover' style={styles.imageBG}>
        <View style={styles.containerProfile}>
          <AvatarPlace
            icon={
              <IconPlus
                style={{
                  transform: [{ rotate: '45deg' }],
                }}
                fill={colors.white}
                stroke={colors.text_gray}
                plusColor={'yellow'}
              />
            }
            isAvatar={avatar}
          />

          <View style={styles.iconLogOut}>
            <LogOut onPress={() => logoutDB(dispatch)} />
          </View>
          <Text style={styles.titleText}>{displayName}</Text>
          {posts.length > 0 ? (
            posts.map(post => (
              <View key={post.id} style={styles.cardContainer}>
                <View style={styles.imageContainer}>
                  <Image source={{ uri: post.photoUri }} style={styles.imagePost} />
                </View>
                <Text style={styles.smallText}>{post.titlePhoto}</Text>
                <View style={styles.detailsContainer}>
                  <TouchableOpacity onPress={() => onComment(post.id)} style={styles.comment}>
                    <Comment fill='none' stroke={colors.border_gray} />
                    <Text>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => onMap(post.latitude, post.longitude)} style={styles.comment}>
                    <LocationIcon />
                    <Text style={styles.textLocation}>{post.locationName}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <Text>Немає постів</Text>
          )}

        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },

  containerProfile: {
    position: 'relative',
    alignItems: 'center',

    marginTop: 147,

    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userFoto: {
    width: 120,
    height: 120,

    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: 'absolute',
    top: -60,
    left: '50%',
    transform: [{ translateX: -60 + 16 }],
  },
  titleText: {
    marginTop: 46,
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
  },
  smallText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: colors.blue,
  },
  iconLogOut: {
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 22,
  },
  cardContainer: {
    width: '100%',
    gap: 8,
    marginTop: 32,

  },
  imageContainer: {
    height: 240,
  },
  imagePost: {
    width: '100%',
    height: 240,
    borderRadius: 8
  },
  commentContainer: {
    gap: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  details: {
    flexDirection: 'row',
    gap: 24,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  iconPlus: {
    fill: colors.white,
  },
});
