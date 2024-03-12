import React, { useEffect, useState } from "react";
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";
import { useColors } from "../../helpers/SetColors";

const ReportBug = ({ navigation }) => {
  const colors = useColors();
  const [issueType, setIssueType] = useState("");
  const [issueTypeError, setIssueTypeError] = useState("");

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
          style={{
            textAlign: "left",
            paddingLeft: 0,
            color: colors.textPrimary,
          }}
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
          style={{ textAlign: "left", color: colors.textPrimary }}
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
