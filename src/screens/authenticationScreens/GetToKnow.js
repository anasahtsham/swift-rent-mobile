import React, { useState, useEffect } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { loadLanguage } from "../../helpers";
import { useColors } from "../../helpers/SetColors";
import { icons } from "../../helpers/ImageImports";

import Header from "../../components/common/header";
import CustomTextField from "../../components/common/input fields/CustomTextField";
import CustomDateOfBirthField from "../../components/common/input fields/CustomDateOfBirthField";
import SwiftRentLogoMedium from "../../components/common/images/SwiftRentLogoMedium";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

import * as FontSizes from "../../assets/fonts/FontSizes";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../../assets/fonts/displaytext/UR/ur-pack";
import { buttonWidthMediumSmall } from "../../constants";

const GetToKnow = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [dobError, setDobError] = useState(null);

  //set theme
  const colors = useColors();

  const [languages, setLanguages] = useState(English);

  //update language on load
  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguages(language === "english" ? English : Urdu);
    });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <Header />
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
                {languages.letsGetToKnowYou}
              </Text>
            </View>

            <View style={styles.textInputsContainer}>
              <CustomTextField
                value={firstName}
                label={languages.firstName}
                textFieldIcon={icons.userIcon}
                errorText={firstNameError}
                onChangeText={(text) => setFirstName(text)}
              />
              <CustomTextField
                value={lastName}
                label={languages.lastName}
                textFieldIcon={icons.userIcon}
                errorText={lastNameError}
                onChangeText={(text) => setLastName(text)}
              />
              <CustomDateOfBirthField
                value={dob}
                label={languages.DOB}
                textFieldIcon={icons.calendarIcon}
                errorText={dobError}
                onChangeText={(text) => setDob(text)}
              />
            </View>

            {/* dont remove below comment */}

            {/* <View>
              <Button
                title="Set error"
                onPress={() => setFirstNameError(languages.thisFieldIsRequired)}
              />
              <Button
                title="Remove error"
                onPress={() => setFirstNameError("")}
              />
              <Button
                title="Set error"
                onPress={() => setLastNameError(languages.thisFieldIsRequired)}
              />
              <Button
                title="Remove error"
                onPress={() => setLastNameError("")}
              />
              <Button
                title="Set error"
                onPress={() => setDobError(languages.thisFieldIsRequired)}
              />
              <Button title="Remove error" onPress={() => setDobError("")} />
            </View> */}

            <View style={styles.buttonsContainer}>
              <ButtonGrey
                width={buttonWidthMediumSmall}
                fontSize={FontSizes.small}
                buttonText={languages.back}
                destinationScreen="Who Are You"
                navigation={navigation}
              />
              <ButtonGrey
                width={buttonWidthMediumSmall}
                fontSize={FontSizes.small}
                buttonText={languages.next}
                destinationScreen="Contact Info"
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

export default GetToKnow;
