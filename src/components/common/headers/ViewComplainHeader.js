import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const ViewComplainHeader = ({ colors }) => {
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
        <View style={styles.topCardBodyText}>
          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Complaint Ticket #
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontFamily: "OpenSansBold",
                fontSize: FontSizes.small,
              }}
            >
              some id
            </Text>
          </View>

          <View style={[styles.inRow]}>
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              Status:{" "}
            </Text>
            <Text
              style={{
                color: colors.textPrimary,
                fontFamily: "OpenSansBold",
                fontSize: FontSizes.small,
              }}
            >
              status
            </Text>
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
              someone
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
              some date
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
              some address
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

export default ViewComplainHeader;
