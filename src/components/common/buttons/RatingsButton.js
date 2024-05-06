import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { icons } from "./../../../helpers/ImageImports";

export const RatingsButton = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Rating Screen", {
          userNameValue: props.userName,
          userTypeValue: props.userType,
          addressValue: props.address,
          ratingValue: props.rating,
          isLikedValue: props.isLiked,
          remarksValue: props.remarks,
        });
      }}
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.userName}
        </Text>
        <View style={{ alignItems: "flex-end" }}>
          <Image
            source={icons.externalLink}
            tintColor={colors.iconPrimary}
            style={styles.icon}
          />
          <Text style={[styles.fontBold, { color: colors.textGreen }]}>
            {props.userType}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 5 }}>
        <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
          Address:{" "}
        </Text>
        <Text style={[styles.fontBold, { color: colors.textPrimary }]}>
          {props.address}
        </Text>
      </View>

      {(!!props.rating || !!props.isLiked || !!props.remarks) && (
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
          </View>
          <Image
            source={props.isLiked ? icons.like : icons.dislike}
            style={[styles.icon, { marginBottom: 5 }]}
            tintColor={props.isLiked ? colors.iconGreen : colors.iconRed}
          />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              Remarks:{" "}
            </Text>
            <Text style={[styles.fontRegular, { color: colors.textPrimary }]}>
              {props.remarks}
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
