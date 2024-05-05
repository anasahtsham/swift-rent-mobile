import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

export const RentalRequestsButton = (props) => {
  const navigation = useNavigation();
  const colors = props.colors;
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
      onPress={() => {
        navigation.navigate("Rental Request Agreement Form", {
          propertyLeaseID: props.propertyLeaseID,
          leaseID: props.leaseID,
        });
      }}
    >
      <View style={{ width: "80%" }}>
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.address}
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
            Registrar:{" "}
          </Text>
          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {`${props.registrarName} (${props.registrarType})`}
          </Text>
        </View>
      </View>
      <Image
        tintColor={colors.iconPrimary}
        source={icons.externalLink}
        style={styles.icon}
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
