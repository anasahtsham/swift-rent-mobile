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
            destinationScreen="Owner Navigator"
            navigation={navigation}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.propertyManager}
            destinationScreen="Manager Navigator"
            navigation={navigation}
          />
          <ButtonGrey
            width={buttonWidthMedium}
            fontSize={FontSizes.medium}
            buttonText={languages.tenant}
            destinationScreen="Tenant Navigator"
            navigation={navigation}
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
