import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return "textRed";
    case "in-progress":
      return "textYellow";
    case "resolved":
      return "textGreen";
    case "responded":
      return "textGreen";
    default:
      return "textPrimary";
  }
};

const ViewMaintenanceAndComplainsHeader = ({
  colors,
  headerData,
  headerTitle,
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
          {headerTitle}
        </Text>
        <View style={styles.topCardBodyText}>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              {headerTitle === "Maintenance Request"
                ? "Maintenance"
                : "Complain"}{" "}
              Ticket #
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontFamily: "OpenSansBold",
                fontSize: FontSizes.small,
              }}
            >
              {headerData.ticketID}
            </Text>
          </View>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Status:{" "}
            </Text>
            {headerData.status.map((status, index) => (
              <React.Fragment key={index}>
                <Text
                  style={{
                    color: colors[getStatusColor(status)],
                    fontFamily: "OpenSansBold",
                    fontSize: FontSizes.small,
                  }}
                >
                  {status}
                </Text>
                {index < headerData.status.length - 1 && (
                  <Text
                    style={{
                      color: colors.textPrimary,
                      fontSize: FontSizes.small,
                    }}
                  >
                    {" "}
                    /{" "}
                  </Text>
                )}
              </React.Fragment>
            ))}
          </View>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Issued by:{" "}
            </Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
                styles.dynamicData,
              ]}
            >
              {headerData.issuedBy}
            </Text>
          </View>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Issued On:{" "}
            </Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
                styles.dynamicData,
              ]}
            >
              {headerData.issuedOn}
            </Text>
          </View>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Address:{" "}
            </Text>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
                styles.dynamicData,
              ]}
            >
              {headerData.address}
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
    paddingVertical: 10,
  },
  topCard: {
    width: "95%",
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  topCardTitle: {
    fontSize: FontSizes.medium,
    paddingBottom: 5,
  },

  topCardBodyText: {
    textAlign: "left",
  },
  inRow: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 4,
  },

  dynamicData: {
    fontWeight: "bold",
  },
});

export default ViewMaintenanceAndComplainsHeader;