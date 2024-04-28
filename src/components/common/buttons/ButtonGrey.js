import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { useColorsOnFocus } from "../../../helpers/SetColors";

const ButtonGrey = (props) => {
  const colors = useColorsOnFocus();

  // if (props.fontSize === undefined) {
  //   throw new Error('The prop "fontSize" is required in ButtonGrey component');
  // }

  // if (props.width === undefined) {
  //   throw new Error('The prop "width" is required in ButtonGrey component');
  // }

  const handlePress = () => {
    if (props.hasOwnOnPress) {
      props.onPress();
      return;
    }
    props.navigation.navigate(props.destinationScreen, {
      userType: props.userType,
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
        props.buttonStyle,
      ]}
      onPress={handlePress}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
    >
      {props.loading && (
        <ActivityIndicator size="small" color={colors.buttonTextPrimary} />
      )}
      {!props.loading && (
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
      )}
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
