import React, { useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { icons } from "../../helpers/ImageImports";
import { buttonWidthSmaller } from "../../constants";
import { useLanguages } from "../../helpers/SetLanguages";
import { useColors } from "../../helpers/SetColors";

import CustomTextField from "../../components/common/input fields/CustomTextField";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

import * as FontSizes from "../../assets/fonts/FontSizes";

const ContactInfo = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState(null);

  //set theme
  const colors = useColors();

  const languages = useLanguages();

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
              <SwiftRentLogoMedium />
              <Text
                style={[
                  styles.text,
                  { fontSize: FontSizes.large, color: colors.textLightBlue },
                ]}
              >
                {languages.weNeedYourContactInformation}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextField
                value={email}
                label={languages.email}
                textFieldIcon={icons.emailIcon}
                keyboardType="email-address"
                errorText={emailError}
                onChangeText={(text) => setEmail(text)}
              />
              <CustomTextField
                value={phoneNumber}
                label={languages.phoneNumber}
                textFieldIcon={icons.phoneNumberIcon}
                keyboardType="number-pad"
                errorText={phoneNumberError}
                onChangeText={(text) => setPhoneNumber(text)}
              />
            </View>

            {/* dont remove below comment */}

            {/* <View>
              <Button
                title="Set error"
                onPress={() => setEmailError(languages.thisFieldIsRequired)}
              />
              <Button title="Remove error" onPress={() => setEmailError("")} />
              <Button
                title="Set error"
                onPress={() =>
                  setPhoneNumberError(languages.thisFieldIsRequired)
                }
              />
              <Button
                title="Remove error"
                onPress={() => setPhoneNumberError("")}
              />
            </View> */}

            <View style={styles.buttonsContainer}>
              <ButtonGrey
                width={buttonWidthSmaller}
                fontSize={FontSizes.small}
                buttonText={languages.back}
                destinationScreen="Get To Know"
                navigation={navigation}
              />
              <ButtonGrey
                width={buttonWidthSmaller}
                fontSize={FontSizes.small}
                buttonText={languages.next}
                destinationScreen="Set Up Password"
                navigation={navigation}
              />
            </View>
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

export default ContactInfo;
