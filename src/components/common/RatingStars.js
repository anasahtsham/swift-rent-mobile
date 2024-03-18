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

const RatingStars = ({ rating, setRating }) => {
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

  console.log(rating);

  return (
    <View style={{ flexDirection: "row" }}>
      {[...Array(5)].map((_, i) => (
        <TouchableOpacity key={i} onPress={() => setRating(i + 1)}>
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={i < rating ? colors.iconYellow : colors.iconGrey}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starIcon: {
    width: 30,
    height: 30,
  },
});
export default RatingStars;
