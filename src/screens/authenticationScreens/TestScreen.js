import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { icons } from "../../helpers/ImageImports";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import InputField from "./../../components/common/input fields/InputField";

const TestScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");

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
          label="First Name"
          textFieldIcon={icons.userIcon}
          fieldType="name"
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          value={email}
          label="Email"
          textFieldIcon={icons.emailIcon}
          fieldType="email-address"
          onChangeText={(text) => setEmail(text)}
        />
        <InputField
          value={password}
          label="Password"
          fieldType="password"
          onChangeText={(text) => setPassword(text)}
        />
        <InputField
          value={phoneNumber}
          label="Phone Number"
          textFieldIcon={icons.phoneNumberIcon}
          fieldType="phone-pad"
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <InputField
          value={date}
          label="Date"
          textFieldIcon={icons.calendarIcon}
          fieldType="date"
          onChangeText={(text) => setDate(text)}
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
