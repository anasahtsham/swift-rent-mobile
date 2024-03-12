import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { icons } from "../../helpers/ImageImports";

import { loadLanguage, loadTheme } from "../../helpers";

import * as DarkTheme from "../../assets/color_scheme/DarkColorScheme";
import * as DefaultTheme from "../../assets/color_scheme/DefaultColorScheme";
import * as LoadingTheme from "../../assets/color_scheme/LoadingColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";

const RatingScreen = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);

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
    });
  }

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
            tintColor="white"
          />
          <Text style={[styles.personNameText, { color: colors.textPrimary }]}>
            Gulzaar
          </Text>
          <Text
            style={[
              styles.personRoleText,
              { color: colors.textLightBlue, paddingLeft: 100, paddingTop: 10 },
            ]}
          >
            Manager
          </Text>
        </View>
        <Text style={[styles.addressLineText, { color: colors.textPrimary }]}>
          House 540, Street 321, G-11/1, {"\n"}Islamabad
        </Text>
      </View>
      <View style={styles.descriptionTitleContainer}>
        <Text style={[styles.discriptionTitle, { color: colors.textPrimary }]}>
          Describe Your Expirience
        </Text>
      </View>
      <TextInput
        style={[
          styles.descriptionBox,
          {
            backgroundColor: colors.backgroundSecondary,
            borderColor: colors.borderPrimary,
          },
        ]}
      />
      <View style={{ flex: 1 }}>
        <View style={styles.starsContainer}>
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={colors.iconYellow}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={colors.iconYellow}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={colors.iconYellow}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={colors.iconYellow}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={colors.iconYellow}
          />
        </View>
        <View>
          <View style={styles.thumbsContainer}>
            <Image
              style={[styles.thumbsIcon, { marginRight: 20 }]} // add marginRight here
              source={icons.like}
              tintColor={colors.iconGreen}
            />
            <Image
              style={styles.thumbsIcon}
              source={icons.dislike}
              tintColor={colors.iconGrey}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    paddingLeft: 64,
    marginTop: -20,
  },

  userIcon: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  row: {
    flexDirection: "row",
  },

  descriptionTitle: {
    fontSize: FontSizes.small,
    paddingLeft: 20, // increase this value to move the text to the right
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
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
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
