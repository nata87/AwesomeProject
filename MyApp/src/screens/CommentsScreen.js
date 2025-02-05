import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { colors } from '../../styles/global';
import imgPublication from '../../assets/images/Content Block.jpg';
import Avatar from '../components/Avatar';
import InputField from '../components/InputField';
import Arrow from '../../assets/icons/Arrow';

export default function CommentsScreen() {
  return (
    <>
      <ScrollView
        style={styles.wrapper}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.container}>
          <View style={styles.publicationContainer}>
            <View style={styles.imageContainer}>
              <Image source={imgPublication} style={styles.image}></Image>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <View style={styles.commentWrapper}>
              <Avatar
                width={28}
                height={28}
                userFoto={require('../../assets/images/Ellipse.jpg')}
              />
              <View style={styles.comment}>
                <Text style={styles.commentText}>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
                <Text style={styles.date}>09 червня, 2020 | 08:40</Text>
              </View>
            </View>

            <View style={styles.commentWrapper}>
              <View style={styles.comment}>
                <Text style={styles.commentText}>
                  A fast 50mm like f1.8 would help with the bokeh. I’ve been
                  using primes as they tend to get a bit sharper images.
                </Text>
                <Text style={styles.date}>009 червня, 2020 | 09:14</Text>
              </View>
              <Avatar
                width={28}
                height={28}
                borderRadius={100}
                userFoto={require('../../assets/images/avatar.jpg')}
              />
            </View>

            <View style={styles.commentWrapper}>
              <Avatar
                width={28}
                height={28}
                userFoto={require('../../assets/images/Ellipse.jpg')}
              />
              <View style={styles.comment}>
                <Text style={styles.commentText}>
                  Thank you! That was very helpful!
                </Text>
                <Text style={styles.date}>09 червня, 2020 | 09:20</Text>
              </View>
            </View>
          </View>
          <InputField
            placeholder='Коментувати...'
            isShowButton={true}
            IconComponent={() => <Arrow />}
            outerStyles={styles.input}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    marginTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: 'center',
    gap: 32,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 58,
    height: 44,
    borderBottomColor: colors.border_gray,
    borderBottomWidth: 0.5,
  },
  title: {
    marginTop: 11,
    marginBottom: 11,
    fontFamily: 'Roboto-Medium',
    fontSize: 17,
  },
  publicationContainer: {
    width: '100%',
  },
  imageContainer: {
    width: '100%',
    height: 240,
  },
  image: { width: '100%', borderRadius: 8 },
  commentContainer: {
    gap: 16,
  },
  commentWrapper: {
    width: '100%',
    flexDirection: 'row',
    gap: 16,
  },
  comment: {
    flex: 1,
    alignItems: 'flex-end',
    flexShrink: 1,
    padding: 16,
    gap: 8,

    backgroundColor: colors.light_gray,
    borderRadius: 8,
  },

  commentText: {
    width: '100%',

    fontFamily: 'Roboto-Regular',
    fontSize: 13,
  },

  date: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: colors.text_gray,
  },
  input: {
    borderRadius: 100,
    backgroundColor: colors.light_gray,
  },
});
