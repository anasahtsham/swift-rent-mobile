import { CommonActions } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { buttonWidthMedium } from "../../constants";
import { saveUserID, saveUserType } from "../../helpers";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";

const LoginAs = ({ navigation, route }) => {
  const { isManager, isOwner, isTenant, userID } = route.params;

  const colors = useColors();

  const languages = useLanguages();

  const handlePress = (destinationScreen) => {
    let userType;
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

    saveUserID(userID.toString());
    saveUserType(userType);
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: destinationScreen }],
      })
    );
  };

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
            {languages.loginAs}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          {isOwner && (
            <ButtonGrey
              width={buttonWidthMedium}
              fontSize={FontSizes.medium}
              buttonText={languages.propertyOwner}
              hasOwnOnPress={true}
              onPress={() => handlePress("Owner Navigator")}
            />
          )}

          {isManager && (
            <ButtonGrey
              width={buttonWidthMedium}
              fontSize={FontSizes.medium}
              buttonText={languages.propertyManager}
              hasOwnOnPress={true}
              onPress={() => handlePress("Manager Navigator")}
            />
          )}

          {isTenant && (
            <ButtonGrey
              width={buttonWidthMedium}
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

export default LoginAs;
