import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";

const ExploreOffersButton = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
      onPress={() => navigation.navigate("Owner Hiring")}
    >
      <View style={[styles.buttonHeaderContainer, {}]}>
        <View style={{ marginRight: "3%" }}>
          <Image
            style={styles.userIcon}
            source={icons.userIcon}
            tintColor={colors.iconPrimary}
          />
        </View>

        <View
          style={{
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Text
            style={[
              styles.fontBold,
              {
                fontSize: FontSizes.small,
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
              {props.likes}
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
              {props.dislikes}
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
              ({props.ratings})
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.icon}
                source={
                  props.averageRating >= 1 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  props.averageRating >= 2 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  props.averageRating >= 3 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  props.averageRating >= 4 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  props.averageRating >= 5 ? icons.star : icons.starHollow
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
            {props.address}
          </Text>
        </View>
        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Offer:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.offer}
          </Text>
        </View>
        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Purpose:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              styles.cardSubText,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.purpose}
          </Text>
        </View>
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
    justifyContent: "flex-start",
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
