import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

const ExploreOffersButton = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();

  const formatPurpose = (purpose) => {
    switch (purpose) {
      case "C":
        return "Caretaking";
      case "A":
        return "Acquiring Tenant";
      default:
        return "";
    }
  };

  const formatStatus = (status) => {
    switch (status) {
      case "P":
        return "Waiting for interview request";
      case "I":
        return "Selected for interview";
      case "A":
        return "Approved";
      case "R":
        return "Rejected";
      default:
        return "";
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={OPACITY_VALUE_FOR_BUTTON}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
      onPress={() =>
        navigation.navigate("Counter Request Form", {
          managerHireRequestID: props.id,
        })
      }
    >
      <View style={[styles.buttonHeaderContainer, {}]}>
        <View
          style={{
            justifyContent: "space-between",
          }}
        >
          <Text
            style={[
              styles.fontBold,
              {
                fontSize: FontSizes.medium,
                color: colors.textPrimary,
              },
            ]}
          >
            {props.ownerName}
          </Text>

          <View style={[styles.ratingsRow, {}]}>
            <Text
              style={[
                styles.fontRegular,
                {
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                },
              ]}
            >
              {/* {props.likes} */}2
            </Text>
            <Image
              style={styles.icon}
              source={icons.like}
              tintColor={colors.iconGreen}
            />
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {/* {props.dislikes} */}3
            </Text>
            <Image
              style={styles.icon}
              source={icons.dislike}
              tintColor={colors.iconRed}
            />
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {/* ({props.ratings}) */}(5)
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 1 ? icons.star : icons.starHollow
                  3 >= 1 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 2 ? icons.star : icons.starHollow
                  3 >= 2 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 3 ? icons.star : icons.starHollow
                  3 >= 3 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 4 ? icons.star : icons.starHollow
                  3 >= 4 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 5 ? icons.star : icons.starHollow
                  3 >= 5 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
            </View>
          </View>
        </View>

        <View style={{ marginLeft: "3%" }}>
          <Image
            style={styles.icon}
            source={icons.externalLink}
            tintColor={colors.iconPrimary}
          />
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.propertyAddress}
          </Text>
        </View>

        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Purpose:{" "}
          </Text>
          <Text
            style={[
              styles.fontBold,
              styles.cardSubText,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {formatPurpose(props.purpose)}
          </Text>
        </View>

        {props.counterRequestStatus && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Status:{" "}
            </Text>
            <Text
              style={[
                styles.fontBold,
                styles.cardSubText,
                {
                  fontSize: FontSizes.small,
                  color:
                    props.counterRequestStatus === "P"
                      ? colors.textDarkBlue
                      : props.counterRequestStatus === "I"
                      ? colors.textGreen
                      : props.counterRequestStatus === "A"
                      ? colors.textGreen
                      : colors.textRed,
                },
              ]}
            >
              {formatStatus(props.counterRequestStatus)}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  button: {
    height: "auto",
    marginTop: 10,
    padding: 10,
    borderRadius: 20,
    alignSelf: "center",
    width: "90%",
    zIndex: 1,
  },
  buttonHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  userIcon: {
    width: 52,
    height: 52,
  },
  expandArrowButton: {
    width: 28,
    height: 28,
  },
  icon: {
    width: 22,
    height: 22,
  },
  cardSubText: {
    fontSize: FontSizes.small,
    marginBottom: 5,
  },
});

export default ExploreOffersButton;
