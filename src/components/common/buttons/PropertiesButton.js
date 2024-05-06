import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

export const PropertiesButton = (props) => {
  const colors = props.colors;
  function formatPropertyStatus(status) {
    switch (status) {
      case "V":
        return "Vacant";
      case "L":
        return "Leased";
      default:
        return status;
    }
  }
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Property Menu", {
          id: props.id,
          propertyAddress: props.address,
        });
      }}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, flexWrap: "wrap", width: "90%" },
            ]}
          >
            {props.address}
          </Text>
          <Image
            tintColor={colors.iconPrimary}
            style={styles.icon}
            source={icons.externalLink}
          />
        </View>

        {!!props.tenant && (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rented To:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.tenant}
            </Text>
          </View>
        )}

        {!!props.manager && (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Manager:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.manager}
            </Text>
          </View>
        )}

        {!!props.propertystatus && (
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Status:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color:
                    props.propertystatus === "L"
                      ? colors.textGreen
                      : colors.textRed,
                },
              ]}
            >
              {formatPropertyStatus(props.propertystatus)}
            </Text>
          </View>
        )}
      </View>
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

export default PropertiesButton;
