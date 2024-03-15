import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { useColorsOnFocus } from "../../../helpers/SetColors";
import { Image } from "react-native";

const ButtonWithImage = (props) => {
  const colors = useColorsOnFocus();

  if (props.fontSize === undefined) {
    throw new Error(
      'The prop "fontSize" is required in ButtonWithImage component'
    );
  }

  if (props.width === undefined) {
    throw new Error(
      'The prop "width" is required in ButtonWithImage component'
    );
  }
  if (props.height === undefined) {
    throw new Error(
      'The prop "height" is required in ButtonWithImage component'
    );
  }

  const handlePress = () => {
    props.navigation.navigate(props.destinationScreen, {
      userType: props.userType,
    });
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors.buttonWithImagePrimary,
          borderColor: colors.buttonWithImageBorderPrimary,
          width: props.width,
          height: props.height,
        },
      ]}
      onPress={props.isSubmitButton ? props.onPress : handlePress}
      activeOpacity={opacityValueForButton}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: colors.buttonWithImageTextPrimary,
            fontSize: props.fontSize,
            fontWeight: "bold",
          },
        ]}
      >
        {props.buttonText}
      </Text>
      {props.imageSource && (
        <Image
          source={props.imageSource}
          style={[styles.image, { tintColor: props.tintColor }]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",

    paddingLeft: 20,

    borderRadius: 100,
    borderWidth: 1.5,
    elevation: 5,
  },
  buttonText: {
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
  },
  image: {
    position: "absolute",
    right: 18,
    top: 38,
    bottom: 2,
    width: 20,
    height: 20,
  },
});

export default ButtonWithImage;
