import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import CustomFooterButton from "../../components/CustomFooterButton";
import OwnerHiringHeader from "../../components/common/header/OwnerHiringHeader";
import { icons } from "../../helpers/ImageImports";
import { useColors } from "./../../helpers/SetColors";

const OwnerHiring = ({ navigation }) => {
  const colors = useColors();

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <OwnerHiringHeader />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={[
              styles.managerRatingsTitle,
              styles.fontBold,
              { color: colors.textPrimary },
            ]}
          >
            Manager Ratings
          </Text>
        </View>
      </View>
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

        <Text style={{ color: colors.textPrimary, fontSize: FontSizes.small }}>
          1
        </Text>

        <Image
          style={styles.thumbsIcon}
          source={icons.dislike}
          tintColor={colors.iconRed}
        />
        <Text style={{ color: colors.textPrimary, fontSize: FontSizes.small }}>
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
      <View
        style={[
          styles.hiringButton,
          { backgroundColor: colors.backgroundPrimary },
        ]}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={[
              styles.fontBold,
              styles.hiringButtonText,
              { color: colors.textPrimary, marginBottom: 4 },
            ]}
          >
            Tabassum Hussain:
          </Text>

          <Text
            style={[
              styles.fontRegular,
              styles.hiringButtonText,
              { color: colors.textPrimary },
            ]}
          >
            19-03-2024
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={[
              styles.fontRegular,
              {
                paddingLeft: 10,
                fontSize: FontSizes.small,
                color: colors.textPrimary,
              },
            ]}
          >
            Islamabad, G-11/1, St.# 21, {"\n"} H.# 25
          </Text>

          <View style={styles.starIconContainer}>
            <Image
              style={[styles.thumbsIcon]}
              source={icons.like}
              tintColor={colors.iconGreen}
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
            <Image
              style={styles.starIcon}
              source={icons.star}
              tintColor={colors.iconYellow}
            />
          </View>
        </View>
        <Text
          style={[
            styles.fontBold,
            styles.remarksText,
            { color: colors.textPrimary, marginBottom: 4 },
          ]}
        >
          Remarks:
        </Text>
        <Text
          style={[
            styles.fontRegular,
            {
              color: colors.textPrimary,
              paddingLeft: 10,
              fontSize: FontSizes.small,
            },
          ]}
        >
          I really hate this douchebag! I really hate this douchebag!
        </Text>
      </View>
      <View
        style={[styles.footer, { backgroundColor: colors.backgroundPrimary }]}
      >
        <Text
          style={[
            styles.footerTitle,
            { fontSize: FontSizes.small, color: colors.textPrimary },
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
        <View style={{ marginRight: 5, marginLeft: 25 }}>
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
            buttonWidth={120}
            onPress={() =>
              navigation.navigate("Rents", { header: "Received Rents" })
            }
            borderColor={colors.borderGreen}
            buttonText="Accept"
            isBold={true}
          />
          <CustomFooterButton
            buttonWidth={120}
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  thumbsIcon: {
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 10,
    justifyContent: "center",
  },
  likesAndStarsRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
  },
  starIcon: {
    height: 20,
    width: 20,
    marginLeft: -2,
  },
  starIconContainer: {
    flexDirection: "row",
    marginLeft: 5,
    marginRight: 5,
    alignItems: "center",
  },
  hiringButton: {
    height: "auto",
    width: "95%",
    marginTop: 20,
    paddingBottom: 5,
    position: "relative",

    borderRadius: 20,
    alignSelf: "center",
  },
  hiringButtonText: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: FontSizes.small,
  },
  remarksText: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: FontSizes.small,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 250,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  footerTitle: {
    fontSize: FontSizes.small,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    textAlign: "center",
  },
  footerBodyText: {
    fontSize: FontSizes.small,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 5,
    marginLeft: 25,
  },
  footerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
});

export default OwnerHiring;
