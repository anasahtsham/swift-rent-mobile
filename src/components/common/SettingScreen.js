import { useEffect, useState } from "react";
import { BackHandler, View } from "react-native";

import { loadTheme } from "../../helpers";

import ButtonGrey from "./buttons/ButtonGrey";
import ThemeSetter from "./buttons/ThemeSetter";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";

const SettingScreen = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);

  useEffect(() => {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
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

  const handleToggle = () => {
    loadTheme().then((theme) => {
      setColors(theme === "dark" ? DarkTheme : DefaultTheme);
    });
  };
  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <ThemeSetter text="Change Theme" onPress={handleToggle} width="80%" />
      <ButtonGrey
        fontSize={FontSizes.small}
        width="30%"
        buttonText="Go Back"
        destinationScreen="Profile"
        navigation={navigation}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
};

export default SettingScreen;
