import { useFocusEffect } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { loadLanguage, loadTheme } from "../../helpers";
import { icons } from "../../helpers/ImageImports";

import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";

const RatingStars = ({
  rating,
  setRating,
  starHeight = 30,
  starWidth = 30,
}) => {
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

  return (
    <View style={styles.starsContainer}>
      {[...Array(5)].map((_, i) => (
        <TouchableOpacity
          style={{ padding: 5 }}
          key={i}
          onPress={() => setRating(i + 1)}
        >
          <Image
            style={{ width: starWidth, height: starHeight }}
            source={icons.star}
            tintColor={i < rating ? colors.iconYellow : colors.iconGrey}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RatingStars;

const styles = StyleSheet.create({
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
