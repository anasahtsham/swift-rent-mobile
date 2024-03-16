import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "./../../../helpers/ImageImports";

const ButtonWithImage = (props) => {
  const colors = props.colors;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: colors.buttonWithImagePrimary,
          borderColor: colors.buttonWithImageBorderPrimary,
        },
      ]}
      activeOpacity={opacityValueForButton}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: colors.buttonWithImageTextPrimary,
            fontWeight: "bold",
          },
        ]}
      >
        {props.buttonText}
      </Text>
      <Image
        source={icons.externalLink}
        style={[styles.image, { tintColor: colors.iconPrimary }]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    width: 160,
    height: 65,
    borderRadius: 100,
    borderWidth: 1.5,
    elevation: 5,
  },
  buttonText: {
    flex: 0.85,
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
    textAlign: "center",
  },
  image: {
    flex: 0.15,
    width: 20,
    height: 20,
  },
});

export default ButtonWithImage;
