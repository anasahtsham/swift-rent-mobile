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
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: colors.textPrimary,
              fontWeight: "bold",
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
    paddingHorizontal: 5,
    width: 160,
    height: 65,
    borderRadius: 100,
    elevation: 5,
  },
  text: {
    fontSize: FontSizes.small,
    fontFamily: "OpenSansRegular",
    fontWeight: "bold",
  },
  image: {
    flex: 0.15,
    width: 20,
    height: 20,
  },
});

export default ButtonWithImage;
