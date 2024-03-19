import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const OwnerHiringCard = () => {
  const colors = useColors();
  return (
    <View
      style={[
        styles.managerRatingsCard,
        { backgroundColor: colors.backgroundPrimary },
      ]}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1%",
        }}
      >
        <Text
          style={[
            styles.fontBold,
            styles.ratingsCardText,
            { color: colors.textPrimary },
          ]}
        >
          Tabassum Hussain
        </Text>
        <Text
          style={[
            styles.fontBold,
            styles.ratingsCardText,
            { color: colors.textGreen },
          ]}
        >
          Owner/Tenant
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "flex-start",
          width: "60%",
          marginBottom: "1%",
        }}
      >
        <Text
          style={[
            styles.fontRegular,
            styles.ratingsCardText,
            { color: colors.textPrimary },
          ]}
        >
          19-03-2024
        </Text>
        <Image
          style={[styles.thumbsIcon]}
          source={icons.like}
          tintColor={colors.iconGreen}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
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
          { color: colors.textPrimary },
        ]}
      >
        Comment:
      </Text>
      <Text
        style={[
          styles.fontRegular,
          {
            color: colors.textPrimary,
            fontSize: FontSizes.small,
          },
        ]}
      >
        I really hate this douchebag! I really hate this douchebag!
      </Text>
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

export default OwnerHiringCard;
