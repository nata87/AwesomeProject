import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { colors } from "../../styles/global";
import userFoto from "../../assets/images/avatar.jpg";
import Avatar from "../components/Avatar";
import Comment from "../../assets/icons/Comment";
import Location from "../../assets/icons/Location";
import img1 from "../../assets/images/Content Block 2.jpg";
import img2 from "../../assets/images/Content Block.jpg";

export default function PostsScreen({ route, navigation }) {
  const onComment = () => {
    navigation.navigate("Comment");
  };
  return (
    <View style={styles.container}>
      <View style={styles.publicationContainer}>
        <Avatar width={60} height={60} userFoto={userFoto} />

        <View style={styles.UserDataContainer}>
          <Text style={styles.UserName}>Natali Romanova</Text>
          <Text style={styles.UserEmail}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={img1} style={styles.image}></Image>
        </View>
        <Text style={styles.smallText}>Ліс</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <View style={styles.comment}>
              <TouchableOpacity onPress={onComment}>
                <Comment fill="none" stroke={colors.border_gray} />
              </TouchableOpacity>
              <Text>0</Text>
            </View>
          </View>

          <View style={styles.comment}>
            <Location />
            <Text style={styles.textLocation}>
              Ivano-Frankivs'k Region, Ukraine
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={img2} style={styles.image}></Image>
        </View>
        <Text style={styles.smallText}>Захід на Чорному морі</Text>
        <View style={styles.detailsContainer}>
          <View style={styles.details}>
            <View style={styles.comment}>
              <Comment fill="none" stroke={colors.border_gray} />
              <Text>0</Text>
            </View>
          </View>

          <View style={styles.comment}>
            <Location />
            <Text>Ukraine</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.white,
  },

  publicationContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 8,
    alignItems: "flex-start",
  },

  UserName: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
  },
  UserEmail: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    color: colors.black_primary,
    opacity: 0.8,
  },
  cardContainer: {
    width: "100%",
    gap: 8,
    marginTop: 32,
  },
  imageContainer: {
    height: 240,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  commentContainer: {
    gap: 16,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  details: {
    flexDirection: "row",
    gap: 24,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  iconPlus: {
    fill: colors.white,
  },
  textLocation: {
    textDecorationLine: "underline",
  },
});
