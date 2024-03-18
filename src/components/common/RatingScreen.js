import { useFocusEffect, useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { icons } from "../../helpers/ImageImports";

import { loadLanguage, loadTheme } from "../../helpers";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";
import RatingStars from "./RatingStars";
const RatingScreen = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);

  //a constant that stores the current theme so it can be used to conditionally change image tint color
  const [theme, setTheme] = useState(null);

  //update theme on load
  useFocusEffect(() => {
    updateTheme();
  });

  const [languages, setLanguage] = useState(English);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  //update theme on clicking toggle theme button
  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
      setTheme(theme); // Store the theme in state for local use
    });
  }

  //state to store the rating
  const [rating, setRating] = useState(0);
  console.log("Rating:" + rating);
  //state to store the choice of thumbs up or down
  const [choice, setChoice] = useState(null);
  console.log("Choice: " + choice);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bodyBackground }}>
      <View
        style={[
          styles.header,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <View style={styles.row}>
          <Image
            style={styles.userIcon}
            source={icons.userIcon}
            tintColor={theme === "light" ? "black" : "white"}
          />
          <Text
            style={[
              styles.personNameText,
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            Gulzaar
          </Text>
          <Text
            style={[
              styles.personRoleText,
              styles.fontRegular,
              {
                color: colors.textGreen,
                paddingLeft: 90,
                paddingTop: 10,
                fontSize: FontSizes.small,
              },
            ]}
          >
            Manager
          </Text>
        </View>
        <Text
          style={[
            styles.addressLineText,
            styles.fontRegular,
            { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          House 540, Street 321,
        </Text>
        <Text
          style={[
            styles.addressLineText,
            styles.fontRegular,
            {
              color: colors.textPrimary,
              fontSize: FontSizes.small,
              paddingTop: 25,
            },
          ]}
        >
          G-11/1, Islamabad
        </Text>
      </View>
      <View style={styles.descriptionTitleContainer}>
        <Text
          style={[
            styles.descriptionTitle,
            styles.fontRegular,
            { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          Describe Your Expirience
        </Text>
      </View>
      <TextInput
        style={[
          styles.descriptionBox,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderPrimary,
          },
        ]}
      />
      <View style={{ flex: 1 }}>
        <RatingStars rating={rating} setRating={setRating} />

        <View style={styles.thumbsContainer}>
          <TouchableOpacity onPress={() => setChoice("like")}>
            <Image
              style={[styles.thumbsIcon, { marginRight: 20 }]} // add marginRight here
              source={icons.like}
              tintColor={choice === "like" ? colors.iconGreen : colors.iconGrey}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChoice("dislike")}>
            <Image
              style={styles.thumbsIcon}
              source={icons.dislike}
              tintColor={
                choice === "dislike" ? colors.iconRed : colors.iconGrey
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  header: {
    height: 320,
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 20,
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
  },
  personNameText: {
    fontSize: FontSizes.medium,
    paddingLeft: 10,
  },
  personTextContainer: {
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  personRoleText: {
    fontWeight: "bold",
    fontSize: FontSizes.small,
  },
  addressLineText: {
    fontSize: FontSizes.extraSmall,
    paddingLeft: 70,
    marginTop: -25,
  },

  userIcon: {
    width: 55,
    height: 55,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
  },

  descriptionTitle: {
    fontSize: FontSizes.small,
    marginTop: 20,
  },
  descriptionTitleContainer: {
    marginTop: -230,
    marginLeft: 50,
  },

  descriptionBox: {
    height: 100,
    width: 300,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 3,
    padding: 10,
    borderWidth: 1,
  },
  starIcon: {
    width: 30,
    height: 30,
    marginTop: 5,
  },

  thumbsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  thumbsIcon: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
});
export default RatingScreen;
