import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import CustomFooterButton from "../../components/CustomFooterButton";
import OwnerHiringCard from "../../components/common/cards/OwnerHiringCard";
import OwnerHiringHeader from "../../components/common/headers/OwnerHiringHeader";
import { buttonWidthSmall } from "../../constants";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "./../../helpers/SetColors";

const OwnerHiring = ({ navigation }) => {
  const colors = useColors();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <OwnerHiringHeader />
      <ScrollView
        style={{
          paddingVertical: 15,
          height: "120%",
        }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ width: "90%", marginBottom: "3%" }}>
          <Text
            style={[
              styles.managerRatingsTitle,
              styles.fontBold,
              { color: colors.textPrimary },
            ]}
          >
            Manager Ratings
          </Text>
          <View style={styles.likesAndStarsRow}>
            <Text
              style={[
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              4
            </Text>
            <Image
              style={[styles.thumbsIcon]}
              source={icons.like}
              tintColor={colors.iconGreen}
            />

            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              1
            </Text>

            <Image
              style={styles.thumbsIcon}
              source={icons.dislike}
              tintColor={colors.iconRed}
            />
            <Text
              style={{ color: colors.textPrimary, fontSize: FontSizes.small }}
            >
              (4)
            </Text>
            <View style={styles.starIconContainer}>
              <Image
                style={styles.starIcon}
                source={icons.star}
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.starIcon}
                source={icons.star}
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.starIcon}
                source={icons.star}
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.starIcon}
                source={icons.star}
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.starIcon}
                source={icons.star}
                tintColor={colors.iconYellow}
              />
            </View>
          </View>
          <OwnerHiringCard />
        </View>
      </ScrollView>
      <View
        style={[
          styles.footer,
          { backgroundColor: colors.headerAndFooterBackground },
        ]}
      >
        <Text
          style={[
            styles.footerTitle,
            {
              fontSize: FontSizes.small,
              fontWeight: "bold",
              color: colors.textPrimary,
            },
          ]}
        >
          Hiring To Manage Property
        </Text>
        <View style={styles.footerBodyText}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Salary Type:
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            OneTime/ Salary/Comssion
          </Text>
        </View>
        <View style={styles.footerBodyText}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Salary Period:
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Weekly/ Monthly
          </Text>
        </View>
        <View style={styles.footerBodyText}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            My Offer:
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            10,000/ 10%
          </Text>
        </View>
        <View style={styles.footerBodyText}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Manager's Offer:
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            21,000/ 21%
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Manager's Comment:
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Ayo Whats up hommie,thats's chum change
          </Text>
        </View>
        <View style={styles.footerButtonContainer}>
          <CustomFooterButton
            buttonWidth={buttonWidthSmall}
            onPress={() =>
              navigation.navigate("Rents", { header: "Received Rents" })
            }
            borderColor={colors.borderGreen}
            buttonText="Accept"
            isBold={true}
          />
          <CustomFooterButton
            buttonWidth={buttonWidthSmall}
            onPress={() =>
              navigation.navigate("Rents", { header: "Pending Rents" })
            }
            borderColor={colors.borderRed}
            buttonText="Reject"
            isBold={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  container: {
    flex: 1,
  },
  topContainer: {
    height: 185,
    position: "relative",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  managerProfileCard: {
    width: "95%",
    height: "90%",
    borderWidth: 3,
    borderRadius: 20,
  },
  managerName: {
    textAlign: "left",
  },
  managerProfileCardSubTextContainer: {
    paddingLeft: 15,
    paddingTop: 5,
  },
  userIcon: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  managerRatingsTitle: {
    fontSize: FontSizes.medium,
  },
  thumbsIcon: {
    height: 16,
    width: 16,
    justifyContent: "center",
  },
  likesAndStarsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    justifyContent: "space-evenly",
  },
  starIcon: {
    height: 20,
    width: 20,
  },
  starIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  managerRatingsCard: {
    height: "auto",
    borderRadius: 20,
    padding: 15,
  },
  ratingsCardText: {
    fontSize: FontSizes.small,
  },
  remarksText: {
    fontSize: FontSizes.small,
  },
  footer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  footerTitle: {
    textAlign: "center",
  },
  footerBodyText: {
    fontSize: FontSizes.small,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footerButtonContainer: {
    marginVertical: "3%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default OwnerHiring;
