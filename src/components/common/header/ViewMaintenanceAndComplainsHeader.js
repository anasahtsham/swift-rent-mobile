import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "textRed";
    case "in-progress":
      return "textYellow";
    case "resolved":
      return "textGreen";
    default:
      return "textPrimary";
  }
};

const ViewMaintenanceAndComplainsHeader = ({
  colors,
  MaintenanceAndComplainsData,
}) => {
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
          {MaintenanceAndComplainsData.title}
        </Text>
        <View style={styles.topCardBodyText}>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>
              Maintenance Ticket
            </Text>
            <Text style={{ color: colors.textPrimary, paddingLeft: 10 }}>
              {MaintenanceAndComplainsData.ticket}
            </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text style={{ color: colors.textPrimary }}>Status: </Text>
            {MaintenanceAndComplainsData.status.map((status, index) => (
              <React.Fragment key={index}>
                <Text style={{ color: colors[getStatusColor(status)] }}>
                  {status}
                </Text>
                {index < MaintenanceAndComplainsData.status.length - 1 && (
                  <Text style={{ color: colors.textPrimary }}> / </Text>
                )}
              </React.Fragment>
            ))}
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
              {MaintenanceAndComplainsData.issuedBy}
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
              {MaintenanceAndComplainsData.issuedOn}
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
              {MaintenanceAndComplainsData.address}
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

export default ViewMaintenanceAndComplainsHeader;
