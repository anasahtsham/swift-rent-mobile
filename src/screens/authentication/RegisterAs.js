import { CommonActions } from "@react-navigation/native";
import axios from "axios";
import { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { BASE_URL, BUTTON_WIDTH_MEDIUM } from "../../constants";
import { saveUserID, saveUserType } from "../../helpers";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";

const RegisterAs = ({ navigation, route }) => {
  const { isManager, isOwner, isTenant, userID } = route.params;

  const colors = useColors();

  const languages = useLanguages();

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  const handlePress = (destinationScreen) => {
    let userType;
    //keep as small full forms
    switch (destinationScreen) {
      case "Owner Navigator":
        userType = "owner";
        break;
      case "Manager Navigator":
        userType = "manager";
        break;
      case "Tenant Navigator":
        userType = "tenant";
        break;
      default:
        userType = "";
    }

    const formatUserType = (userType) => {
      switch (userType) {
        case "owner":
          return "O";
        case "manager":
          return "M";
        case "tenant":
          return "T";
        default:
          return "";
      }
    };

    // Prepare the data to send to the API
    const data = {
      userID: userID,
      userType: userType,
    };

    // Send a POST request to the API
    axios
      .post(`${BASE_URL}/api/auth/register-alternate-role`, data)
      .then(() => {
        saveUserID(userID.toString());
        saveUserType(formatUserType(userType.toString()));
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: destinationScreen }],
          })
        );
      })
      .catch((error) => {
        // Handle the error here. For example, you could show an error message:
        console.error("There was an error!", error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <View
        style={[
          styles.container,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={styles.logoAndTextContainer}>
          <SwiftRentLogoMedium />
          <Text
            style={[
              styles.text,
              { fontSize: FontSizes.large, color: colors.textLightBlue },
            ]}
          >
            {languages.registerAs}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          {!isOwner && (
            <ButtonGrey
              width={BUTTON_WIDTH_MEDIUM}
              fontSize={FontSizes.medium}
              buttonText={languages.propertyOwner}
              hasOwnOnPress={true}
              onPress={() => handlePress("Owner Navigator")}
            />
          )}

          {!isManager && (
            <ButtonGrey
              width={BUTTON_WIDTH_MEDIUM}
              fontSize={FontSizes.medium}
              buttonText={languages.propertyManager}
              hasOwnOnPress={true}
              onPress={() => handlePress("Manager Navigator")}
            />
          )}

          {!isTenant && (
            <ButtonGrey
              width={BUTTON_WIDTH_MEDIUM}
              fontSize={FontSizes.medium}
              buttonText={languages.tenant}
              hasOwnOnPress={true}
              onPress={() => handlePress("Tenant Navigator")}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    position: "relative",
  },
  logoAndTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  buttonsContainer: {
    width: "90%",
    height: "50%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  customButton: {
    width: "70%",
    height: "15%",
  },
});

export default RegisterAs;
