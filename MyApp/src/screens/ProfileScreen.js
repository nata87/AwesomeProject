import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import AvatarPlace from "../../src/components/AvatarPlace";
import bgImage from "../../assets/images/Photo BG.png";
import { colors } from "../../styles/global";
import img1 from "../../assets/images/Content Block 2.jpg";
import img2 from "../../assets/images/Content Block.jpg";
import img3 from "../../assets/images/Content Block 3.jpg";
import Comment from "../../assets/icons/Comment";
import Like from "../../assets/icons/Like";
import Location from "../../assets/icons/Location";
import LogOut from "../../assets/icons/LogOut";
import IconPlus from "../../assets/icons/PlusInCircle";
import avatar from "../../assets/images/avatar.jpg";

export default function ProfileScreen({ route, navigation }) {
  const onLogin = () => {
    navigation.navigate("Login");
  };
  const onComment = () => {
    navigation.navigate("Comment");
  };
  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={styles.contentContainer}
    >
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.image}>
        <View style={styles.containerProfile}>
          <AvatarPlace
            icon={
              <IconPlus
                style={{
                  transform: [{ rotate: "45deg" }],
                }}
                fill={colors.white}
                stroke={colors.text_gray}
                plusColor={"yellow"}
              />
            }
            isAvatar={avatar}
          />

          <View style={styles.iconLogOut}>
            <LogOut onPress={onLogin} />
          </View>
          <Text style={styles.titleText}>Natali Romanova</Text>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={img1} style={styles.image}></Image>
            </View>
            <Text style={styles.smallText}>Ліс</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <View style={styles.comment}>
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>8</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>153</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Location />
                <Text>Ukraine</Text>
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
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>3</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>200</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Location />
                <Text>Ukraine</Text>
              </View>
            </View>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image source={img3} style={styles.image}></Image>
            </View>
            <Text style={styles.smallText}>Старий будиночок у Венеції</Text>
            <View style={styles.detailsContainer}>
              <View style={styles.details}>
                <View style={styles.comment}>
                  <TouchableOpacity onPress={onComment}>
                    <Comment />
                  </TouchableOpacity>
                  <Text>50</Text>
                </View>
                <View style={styles.comment}>
                  <Like />
                  <Text>200</Text>
                </View>
              </View>

              <View style={styles.comment}>
                <Location />
                <Text>Italy</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  //   contentContainer: { flexGrow: 1 },
  containerProfile: {
    position: "relative",
    alignItems: "center",
    marginTop: 147,
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "white",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  userFoto: {
    width: 120,
    height: 120,

    backgroundColor: colors.light_gray,
    borderRadius: 16,

    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -60 + 16 }],
  },
  titleText: {
    marginTop: 46,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  smallText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: colors.blue,
  },
  iconLogOut: {
    width: "100%",
    alignItems: "flex-end",
    paddingTop: 22,
  },
  cardContainer: {
    width: "100%",
    gap: 8,
    marginTop: 32,
  },
  imageContainer: {
    height: 240,
  },
  image: { width: "100%", borderRadius: 8 },
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
});
