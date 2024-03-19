import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

export const MaintenanceComplainsListButton = (props) => {
  const colors = props.colors;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
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

        {!!props.owner && (
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Owner:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.owner}
            </Text>
          </View>
        )}

        {!!props.manager && (
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Manager:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.manager}
            </Text>
          </View>
        )}

        {!!props.tenant && (
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Tenant:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.tenant}
            </Text>
          </View>
        )}

        {!!props.maintenanceStatus && (
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Status:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color:
                    props.maintenanceStatus === "Pending"
                      ? colors.textRed
                      : colors.textGreen,
                },
              ]}
            >
              {props.maintenanceStatus}
            </Text>
          </View>
        )}

        {!!props.complaintStatus && (
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Status:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color:
                    props.complaintStatus === "Pending"
                      ? colors.textRed
                      : colors.textGreen,
                },
              ]}
            >
              {props.complaintStatus}
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

export default MaintenanceComplainsListButton;
