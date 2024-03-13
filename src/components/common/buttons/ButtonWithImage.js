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
        <Image source={props.imageSource} style={styles.image} />
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
    marginBottom: 15,
  },
  image: {
    position: "absolute",
    right: 10,
    bottom: 5,
    width: 20,
    height: 20,
  },
});

export default ButtonWithImage;
