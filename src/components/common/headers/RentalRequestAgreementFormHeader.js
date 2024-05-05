import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";

const RentalRequestAgreementFormHeader = ({
  colors,
  loading,
  setLoading,
  ...props
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
          Rental Request Form
        </Text>
        {loading && (
          <ActivityIndicator size="large" color={colors.textPrimary} />
        )}
        {!loading && (
          <View style={styles.topCardBodyText}>
            <View style={[styles.inRow]}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontFamily: "OpenSansBold",
                  fontSize: FontSizes.small,
                }}
              >
                {props.address}
              </Text>
            </View>
            <View style={[styles.inRow]}>
              <Text
                style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
              >
                Lease Created By:{" "}
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
                {props.registrarName}
                {` (${props.registrarType})`}
              </Text>
            </View>
            <View style={[styles.inRow]}>
              <Text
                style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
              >
                Lease Start Date:{" "}
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
                {props.leaseStartDate}
              </Text>
            </View>
            <View style={[styles.inRow]}>
              <Text
                style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
              >
                Leased For Months:{" "}
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
                {props.leasedForMonths}
              </Text>
            </View>

            <View style={[styles.inRow]}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                }}
              >
                Increment Period:{" "}
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
                {props.incrementPeriod || 0}
                {" (Months)"}
              </Text>
            </View>

            <View style={[styles.inRow]}>
              <Text
                style={{
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                }}
              >
                Increment Percentage:{" "}
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
                {props.incrementPercentage || 0}
                {"%"}
              </Text>
            </View>

            <View style={[styles.inRow]}>
              <Text
                style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
              >
                Due Date:{" "}
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
                {props.dueDate}
              </Text>
            </View>
          </View>
        )}
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

export default RentalRequestAgreementFormHeader;
