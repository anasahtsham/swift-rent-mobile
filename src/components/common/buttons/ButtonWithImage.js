import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "./../../../helpers/ImageImports";

const ButtonWithImage = (props) => {
  const colors = props.colors;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors.backgroundPrimary,
        },
      ]}
      activeOpacity={opacityValueForButton}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
            },
          ]}
        >
          {props.text}
        </Text>
        {!!props.secondaryText && (
          <Text
            style={[
              styles.text,
              {
                color: props.secondaryTextColor,
                fontSize: FontSizes.midSmall,
              },
            ]}
          >
            {props.secondaryText}
          </Text>
        )}
      </View>

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
    paddingHorizontal: 20,
    width: "47%",
    height: 75,
    borderRadius: 20,
    elevation: 5,
  },
  text: {
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
    fontWeight: "bold",
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default ButtonWithImage;
