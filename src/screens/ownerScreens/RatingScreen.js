import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { icons } from "../../helpers/ImageImports";
import { useFocusEffect } from "@react-navigation/native";

import { loadLanguage, loadTheme } from "../../helpers";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as LoadingTheme from "../../assets/colorScheme/loadingColorScheme";
import { color } from "react-native-elements/dist/helpers";
import { ScrollView } from "react-native-gesture-handler";

const RatingScreen = () => {
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
    <SafeAreaView>
      <View
        style={[
          styles.header,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <Text style={[styles.peronNameText, { color: colors.textPrimary }]}>
          Gulzar
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    marginTop: 20,
    paddingTop: 20,
    paddingLeft: 100,
    width: "90%",
    borderRadius: 20,
    alignSelf: "center",
  },
  peronNameText: {
    fontWeight: "bold",
    fontSize: FontSizes.medium,
  },
});
export default RatingScreen;
