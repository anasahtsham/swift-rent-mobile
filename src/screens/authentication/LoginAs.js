import { CommonActions } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import { buttonWidthMedium } from "../../constants";
import { getColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";

const LoginAs = ({ navigation }) => {
  const colors = getColors();

  const languages = useLanguages();

  const handlePress = (destinationScreen) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: destinationScreen }],
      })
    );
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
            {languages.loginAs}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.propertyOwner}
            isSendToNavigationButton={true}
            onPress={() => handlePress("Owner Navigator")}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.propertyManager}
            isSendToNavigationButton={true}
            onPress={() => handlePress("Manager Navigator")}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.tenant}
            isSendToNavigationButton={true}
            onPress={() => handlePress("Tenant Navigator")}
          />
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
