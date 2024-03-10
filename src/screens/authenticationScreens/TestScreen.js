import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import InputField from "./../../components/common/input fields/InputField";

const TestScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");

  //set theme
  const colors = useColors();

  const languages = useLanguages();

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={true}
      extraScrollHeight={2500}
    >
      <View
        style={[
          styles.textInputsContainer,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <InputField
          value={firstName}
          label={languages.firstName}
          textFieldIcon={icons.userIcon}
          fieldType="name"
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          value={firstName}
          label={languages.firstName}
          textFieldIcon={icons.userIcon}
          fieldType="email-address"
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          value={firstName}
          label={languages.firstName}
          textFieldIcon={icons.userIcon}
          fieldType="password"
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          value={firstName}
          label={languages.firstName}
          textFieldIcon={icons.userIcon}
          fieldType="phone-pad"
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          value={firstName}
          label={languages.firstName}
          textFieldIcon={icons.userIcon}
          fieldType="date"
          onChangeText={(text) => setFirstName(text)}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  textInputsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestScreen;
