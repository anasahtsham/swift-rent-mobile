import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const OwnerHiringCard = (props) => {
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
          {props.name}
        </Text>
        <Text
          style={[
            styles.fontBold,
            styles.ratingsCardText,
            { color: colors.textGreen },
          ]}
        >
          {props.userType}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          alignSelf: "flex-start",
          width: "67%",
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
          {props.date}
        </Text>
        <Image
          style={[styles.thumbsIcon]}
          source={props.isLiked ? icons.like : icons.dislike}
          tintColor={props.isLiked ? colors.iconGreen : colors.iconRed}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={props.rating >= 1 ? colors.iconYellow : colors.iconGrey}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={props.rating >= 2 ? colors.iconYellow : colors.iconGrey}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={props.rating >= 3 ? colors.iconYellow : colors.iconGrey}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={props.rating >= 4 ? colors.iconYellow : colors.iconGrey}
          />
          <Image
            style={styles.starIcon}
            source={icons.star}
            tintColor={props.rating >= 5 ? colors.iconYellow : colors.iconGrey}
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
        {props.comment}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  thumbsIcon: {
    height: 16,
    width: 16,
    justifyContent: "center",
  },
  starIcon: {
    height: 20,
    width: 20,
  },
  managerRatingsCard: {
    height: "auto",
    borderRadius: 20,
    padding: 15,
    marginVertical: "3%",
  },
  ratingsCardText: {
    fontSize: FontSizes.small,
  },
  remarksText: {
    fontSize: FontSizes.small,
  },
});

export default OwnerHiringCard;
