import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

const PropertyMenuButton = (props) => {
  const colors = props.colors;

  if (props.loading) {
    return (
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: colors.backgroundPrimary, alignItems: "center" },
        ]}
        activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      >
        <ActivityIndicator size="small" color={colors.textPrimary} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors.backgroundPrimary,
        },
      ]}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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

      {!props.doesNotOpenScreen && (
        <Image
          source={icons.externalLink}
          style={[styles.image, { tintColor: colors.iconPrimary }]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    width: "100%",
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

export default PropertyMenuButton;
