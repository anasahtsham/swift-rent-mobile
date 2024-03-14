import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";

const ViewMaintenanceHeader = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.topCard,
          {
            backgroundColor: colors.backgroundPrimary,
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <Text style={[styles.topCardTitle, { color: colors.textPrimary }]}>
          Maintenance Requests
        </Text>
        <View style={styles.topCardBodyText}>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>
              Maintenance Ticket
            </Text>
            <Text style={{ color: colors.textPrimary, paddingLeft: 10 }}>
              # 1231
            </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>Status: </Text>
            <Text style={{ color: colors.textRed }}>Pending</Text>
            <Text style={{ color: colors.textPrimary }}> / </Text>
            <Text style={{ color: colors.textYellow }}>In-Progress</Text>
            <Text style={{ color: colors.textPrimary }}> / </Text>
            <Text style={{ color: colors.textGreen }}>Resolved </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>Issued by:</Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                },
                styles.dynamicData,
              ]}
            >
              Ikram Hussain (teanant/Manager)
            </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>Issued On:</Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                },
                styles.dynamicData,
              ]}
            >
              12-03-2024 (11:47 pm)
            </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>Address:</Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                },
                styles.dynamicData,
              ]}
            >
              House 540, Street 05, G-11/1, Islamabad
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  topCard: {
    margin: 10,

    height: 200,
    width: "95%",
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTitle: {
    fontSize: FontSizes.medium,
    paddingLeft: 10,
    paddingBottom: 5,
  },

  topCardBodyText: {
    fontSize: FontSizes.small,
    paddingLeft: "4%",
    textAlign: "left",
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 4,
  },

  dynamicData: {
    paddingLeft: 10,
    fontWeight: "bold",
  },
});

export default ViewMaintenanceHeader;
