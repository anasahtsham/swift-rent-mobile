import {
  BackHandler,
  Button,
  Dimensions,
  Pressable,
  TouchableOpacity,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useEffect, useState } from "react";

import { loadTheme } from "../../helpers";

import ThemeSetter from "./buttons/ThemeSetter";
import ButtonGrey from "./buttons/ButtonGrey";

import * as DarkTheme from "../../assets/colorScheme/darkColorScheme";
import * as DefaultTheme from "../../assets/colorScheme/defaultColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { useLanguages } from "../../helpers/SetLanguages";
import CustomTextField from "./input fields/CustomTextField";
import CustomPasswordField from "./input fields/CustomPasswordField";
import { buttonWidthMedium } from "../../constants";
import { useColors } from "../../helpers/SetColors";

const ChangePassword = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPass] = useState("");

  const [oldPasswordError, setOldPasswordError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState(null);
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState(null);

  useEffect(() => {
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
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        scrollEnabled={true}
        extraScrollHeight={2500}
      >
        <View style={styles.mainContainer}>
          <View
            style={[
              styles.container,
              { backgroundColor: colors.backgroundPrimary },
            ]}
          >
            <View style={styles.logoAndTextContainer}>
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textPrimary },
                ]}
              >
                {languages.changeYourPassword}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomPasswordField
                value={oldPassword}
                label={languages.oldPassword}
                errorText={oldPasswordError}
                onChangeText={(text) => setOldPassword(text)}
              />
              <CustomPasswordField
                value={newPassword}
                label={languages.newPassword}
                errorText={newPasswordError}
                onChangeText={(text) => setNewPassword(text)}
              />
              <CustomPasswordField
                value={confirmNewPassword}
                label={languages.confirmNewPassword}
                errorText={confirmNewPasswordError}
                onChangeText={(text) => setConfirmNewPass(text)}
              />
            </View>

            <ButtonGrey
              width={buttonWidthMedium}
              fontSize={FontSizes.medium}
              buttonText={languages.change}
              destinationScreen="Change Password"
              navigation={navigation}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: { flex: 1 },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    height: Dimensions.get("window").height - 40,
    alignItems: "center",
    justifyContent: "space-around",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  textInputsContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "90%",
    height: "30%",
    alignItems: "center",
  },
  dobContainer: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-evenly",
  },
});

export default ChangePassword;
