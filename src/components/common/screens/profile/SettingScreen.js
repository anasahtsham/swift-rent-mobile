import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, BackHandler, View } from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import * as DarkTheme from "../../../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../../../assets/themes/LoadingColorScheme";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../../../constants";
import { loadTheme } from "../../../../helpers";
import ButtonGrey from "../../buttons/ButtonGrey";
import ThemeSetter from "../../buttons/ThemeSetter";

const SettingScreen = ({ navigation, route }) => {
  const { userID } = route.params;
  const [colors, setColors] = useState(LoadingTheme);
  const [loading, setLoading] = useState(false);

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

  const handleSwitchRole = () => {
    setLoading(true);
    axios
      .post(`${BASE_URL}/api/auth/switch-role`, { userID: userID })
      .then((response) => {
        const { isOwner, isManager, isTenant } = response.data;
        const roles = [isOwner, isManager, isTenant];
        const trueRoles = roles.filter(Boolean); // Filter out the false values

        if (trueRoles.length === 1) {
          // If only one role is true, display an alert
          Alert.alert("Alert", "You only have one account");
        } else {
          // Otherwise, navigate to the "Login As" screen
          navigation.navigate("Login As", {
            ...response.data,
            userID: userID,
          });
        }
      })
      .catch((error) => {
        Alert.alert("Error", error.response.data.error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <ThemeSetter text="Change Theme" onPress={handleToggle} width="80%" />
      <ButtonGrey
        loading={loading}
        hasOwnOnPress={true}
        onPress={handleSwitchRole}
        fontSize={FontSizes.small}
        width={BUTTON_WIDTH_MEDIUM}
        buttonText="Switch Role"
      />
      <ButtonGrey
        fontSize={FontSizes.small}
        width={BUTTON_WIDTH_MEDIUM}
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
