import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { formatUserTypeToFullForm } from "../../../helpers/utils";
import { icons } from "./../../../helpers/ImageImports";

export const RatingsButton = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();

  const isLiked = props.ratingOpinon === "D" ? false : true;

  return (
    <TouchableOpacity
      onPress={() => {
        if (props.currentScreen === "Pending Ratings") {
          navigation.navigate("Rating Screen", {
            ratingID: props.ratingID,
            userNameValue: props.userName,
            addressValue: props.address,
            ratingValue: props.rating,
            isLikedValue: isLiked,
            remarksValue: props.remarks,
          });
        }
      }}
      activeOpacity={
        props.currentScreen === "Pending Ratings" ? OPACITY_VALUE_FOR_BUTTON : 1
      }
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            styles.fontBold,
            { color: colors.textPrimary, fontSize: FontSizes.medium },
          ]}
        >
          {props.userName}
        </Text>
        <View style={{ alignItems: "flex-end" }}>
          {props.currentScreen === "Pending Ratings" && (
            <Image
              source={icons.externalLink}
              tintColor={colors.iconPrimary}
              style={styles.icon}
            />
          )}

          <Text style={[styles.fontBold, { color: colors.textGreen }]}>
            {formatUserTypeToFullForm(props.userType)}
          </Text>
        </View>
      </View>

      <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
        {props.address}
      </Text>

      {props.currentScreen === "Pending Ratings" ? (
        <>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Start Date:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.ratedOn}
            </Text>
          </View>
        </>
      ) : (
        <>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 5,
            }}
          >
            <Image
              source={props.rating >= 1 ? icons.star : icons.starHollow}
              style={styles.icon}
              tintColor={colors.iconYellow}
            />
            <Image
              source={props.rating >= 2 ? icons.star : icons.starHollow}
              style={styles.icon}
              tintColor={colors.iconYellow}
            />
            <Image
              source={props.rating >= 3 ? icons.star : icons.starHollow}
              style={styles.icon}
              tintColor={colors.iconYellow}
            />
            <Image
              source={props.rating >= 4 ? icons.star : icons.starHollow}
              style={styles.icon}
              tintColor={colors.iconYellow}
            />
            <Image
              source={props.rating >= 5 ? icons.star : icons.starHollow}
              style={styles.icon}
              tintColor={colors.iconYellow}
            />
            <Image
              source={isLiked ? icons.like : icons.dislike}
              style={[styles.icon, { marginLeft: 10 }]}
              tintColor={isLiked ? colors.iconGreen : colors.iconRed}
            />
          </View>

          <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
            {props.remarks}
          </Text>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Rated On:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.ratedOn}
            </Text>
          </View>

          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Contract Days:{" "}
            </Text>
            <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
              {props.contractDays}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    marginTop: 20,
    padding: 20,
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

export default RatingsButton;
