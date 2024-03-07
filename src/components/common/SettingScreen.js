import { BackHandler, View } from "react-native";
import { useEffect, useState } from "react";

import { loadTheme } from "../../helpers";

import ThemeSetter from "./buttons/ThemeSetter";
import ButtonGrey from "./buttons/ButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";

const SettingScreen = ({ navigation }) => {
  const [colors, setColors] = useState(DarkTheme);

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