import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors } from '../../styles/global';
import userFoto from '../../assets/images/avatar.jpg';
import Avatar from '../components/Avatar';
import Comment from '../../assets/icons/Comment';
import LocationIcon from '../../assets/icons/LocationIcon';
import img1 from '../../assets/images/Content Block 2.jpg';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../utils/firestore';


export default function PostsScreen({ navigation }) {
  const [posts, setPosts] = useState([]);

  const user = useSelector(state => state.user.userInfo);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  const { name: displayName, email } = user || {};

  const onComment = (id, photoUri) => {
    navigation.navigate('Comment', { postId: id, photoUri });
  };

  const onMap = (latitude, longitude) => {
    navigation.navigate('Map', { latitude, longitude })
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.publicationContainer}>
          <Avatar width={60} height={60} userFoto={userFoto} />

          <View style={styles.UserDataContainer}>
            <Text style={styles.UserName}>{displayName}</Text>
            <Text style={styles.UserEmail}>{email}</Text>
          </View>
        </View>
        {posts.length > 0 ? (
          posts.map(post => (
            <View key={post.id} style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: post.photoUri }} style={styles.imagePost} />
              </View>
              <Text style={styles.smallText}>{post.titlePhoto}</Text>
              <View style={styles.detailsContainer}>
                <TouchableOpacity onPress={() => onComment(post.id, post.photoUri)} style={styles.comment}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  publicationContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'flex-start',
  },

  UserName: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
  },
  UserEmail: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: colors.black_primary,
    opacity: 0.8,
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
    borderRadius: 8,
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
  textLocation: {
    textDecorationLine: 'underline',
  },
});
