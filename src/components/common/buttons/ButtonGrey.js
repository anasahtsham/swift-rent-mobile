import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { opacityValueForButton } from "../../../constants";

import * as FontSizes from "../../../assets/fonts/FontSizes";
import { useColorsOnFocus } from "../../../helpers/SetColors";

const ButtonGrey = (props) => {
  const colors = useColorsOnFocus();

  if (props.fontSize === undefined) {
    throw new Error('The prop "fontSize" is required in ButtonGrey component');
  }

  if (props.width === undefined) {
    throw new Error('The prop "width" is required in ButtonGrey component');
  }

  const handlePress = () => {
    props.navigation.navigate(props.destinationScreen, {
      userType: props.userType,
      firstName: props.firstName,
      lastName: props.lastName,
      date: props.dob,
      email: props.email,
      phoneNumber: props.phoneNumber,
      password: props.password,
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors.buttonBackgroundPrimary,
          borderColor: colors.buttonBorderPrimary,
          width: props.width,
        },
      ]}
      onPress={props.isSubmitButton ? props.onPress : handlePress}
      activeOpacity={opacityValueForButton}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: colors.buttonTextPrimary,
            fontSize: props.fontSize,
          },
        ]}
      >
        {props.buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    borderWidth: 1.5,
    elevation: 5,
  },
  buttonText: {
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
    textAlign: "center",
  },
});

export default ButtonGrey;
