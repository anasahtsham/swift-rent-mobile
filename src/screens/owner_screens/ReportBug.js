import React, { useEffect, useState } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { loadLanguage, loadTheme } from "../../helpers";
import * as English from "../../assets/fonts/displaytext/EN/en-pack";
import * as DarkTheme from "../../assets/themes/DarkColorScheme";
import * as DefaultTheme from "../../assets/themes/DefaultColorScheme";
import * as LoadingTheme from "../../assets/themes/LoadingColorScheme";
import * as FontSizes from "../../assets/fonts/FontSizes";
import InputField from "../../components/common/input_fields/InputField";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

const ReportBug = ({ navigation }) => {
  const [colors, setColors] = useState(LoadingTheme);
  const [languages, setLanguage] = useState(English);
  const [issueType, setIssueType] = useState("");
  const [issueTypeError, setIssueTypeError] = useState("");

  useFocusEffect(() => {
    updateTheme();
  });

  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguage(language === "english" ? English : Urdu);
    });
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

  function updateTheme() {
    loadTheme().then((theme) => {
      setColors(theme === "light" ? DefaultTheme : DarkTheme);
    });
  }

  const handleChange = (text) => {
    setIssueType(text);
    if (text === "") {
      setIssueTypeError("Issue type is required");
    } else {
      setIssueTypeError("");
    }
  };

  const handleBlur = () => {
    if (issueType === "") {
      setIssueTypeError("Issue type is required");
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.bodyBackground, flex: 1 }}>
      <View style={styles.container}>
        <Text style={[styles.topTitle, { color: colors.textPrimary }]}>
          Report a Bug
        </Text>
      </View>
      <View
        style={[styles.issueTypeField, { borderColor: colors.borderPrimary }]}
      >
        <TextInput
          placeholder="Type of Issue"
          placeholderTextColor={colors.textPrimary}
          style={{ textAlign: "left", paddingLeft: 0 }} // Align placeholder text to the left
        />
      </View>
      <View
        style={[
          styles.bugDescriptiionField,
          { borderColor: colors.borderPrimary },
        ]}
      >
        <TextInput
          placeholder="Describe your problem"
          placeholderTextColor={colors.textPrimary}
          style={{ textAlign: "left" }} // Align placeholder text to the left
        />
      </View>

      <View style={{ alignSelf: "center", marginTop: 30 }}>
        <ButtonGrey
          fontSize={FontSizes.small}
          width={120}
          buttonText="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
    paddingBottom: 10,
  },
  topTitle: {
    fontSize: FontSizes.large,
    fontWeight: "bold",
    textAlign: "center",
  },
  issueTypeField: {
    height: 50,
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
  bugDescriptiionField: {
    height: 150,
    marginTop: 20,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 30,
  },
});

export default ReportBug;
