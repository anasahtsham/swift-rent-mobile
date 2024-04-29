import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

export const RentalRequestsButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.address}
        </Text>

        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.registrarName}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Registrar Name:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.registrarType}
          </Text>
        </View>
      </View>
      <Image
        tintColor={colors.iconPrimary}
        source={icons.externalLink}
        style={{ width: 20, height: 20 }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fontBold: {
    fontFamily: "OpenSansBold",
    fontSize: FontSizes.small,
  },
  fontRegular: {
    fontFamily: "OpenSansRegular",
    fontSize: FontSizes.small,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default RentalRequestsButton;
