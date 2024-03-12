import React, { useEffect, useState } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
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
      <View style={styles.issueTypeField}>
        <InputField
          fieldType="Type of Issue"
          label="Issue Type"
          value={issueType}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorText={issueTypeError}
        />
      </View>
      <View style={styles.bugDescriptiionField}>
        <InputField
          fieldType="Describe your Problem"
          label="Description Problem"
          value={issueType}
          handleChange={handleChange}
          handleBlur={handleBlur}
          errorText={issueTypeError}
          style={{
            backgroundColor: "transparent",
            textAlignVertical: "top",
            height: 200,
          }}
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
    paddingTop: 20,
    alignItems: "center",
    paddinTop: 20,
  },
  bugDescriptiionField: {
    marginTop: -30,
    alignItems: "center",
  },
});

export default ReportBug;
