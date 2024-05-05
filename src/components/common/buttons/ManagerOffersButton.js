import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";
import { formatNumberToCrore } from "./../../../helpers/utils/index";

const ManagerOffersButton = (props) => {
  const colors = useColors();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={opacityValueForButton}
      style={[styles.button, { backgroundColor: colors.backgroundPrimary }]}
      // onPress={() => navigation.navigate("Owner Hiring")}
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
            {props.managerName}
          </Text>

          <View style={[styles.ratingsRow, {}]}>
            <Text
              style={[
                styles.fontRegular,
                {
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                  marginRight: 5,
                },
              ]}
            >
              {/* {props.likes} */}6
            </Text>
            <Image
              style={[styles.icon, { marginRight: 5 }]}
              source={icons.like}
              tintColor={colors.iconGreen}
            />
            <Text
              style={[
                styles.fontRegular,
                {
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                  marginRight: 5,
                },
              ]}
            >
              {/* {props.dislikes} */}4
            </Text>
            <Image
              style={[styles.icon, { marginRight: 5 }]}
              source={icons.dislike}
              tintColor={colors.iconRed}
            />
            <Text
              style={[
                styles.fontRegular,
                {
                  fontSize: FontSizes.small,
                  color: colors.textPrimary,
                  marginRight: 5,
                },
              ]}
            >
              {/* ({props.ratings}) */}10
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 1 ? icons.star : icons.starHollow
                  2.5 >= 1 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 2 ? icons.star : icons.starHollow
                  2.5 >= 2 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 3 ? icons.star : icons.starHollow
                  2.5 >= 3 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 4 ? icons.star : icons.starHollow
                  2.5 >= 4 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
              <Image
                style={styles.icon}
                source={
                  // props.averageRating >= 5 ? icons.star : icons.starHollow
                  2.5 >= 5 ? icons.star : icons.starHollow
                }
                tintColor={colors.iconYellow}
              />
            </View>
          </View>
        </View>

        <View>
          <Image
            style={styles.icon}
            source={icons.externalLink}
            tintColor={colors.iconPrimary}
          />
        </View>
      </View>

      {/* after header */}

      <View style={{ marginTop: 5 }}>
        {!!props.oneTimePay && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              One Time Pay:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.oneTimePay)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryFixed && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Fixed:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${formatNumberToCrore(props.salaryFixed)} PKR`}
            </Text>
          </View>
        )}

        {!!props.salaryPercentage && (
          <View style={[styles.inRow, styles.cardSubText]}>
            <Text
              style={[
                styles.fontBold,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              Salary Percentage:{" "}
            </Text>
            <Text
              style={[
                styles.fontRegular,
                { fontSize: FontSizes.small, color: colors.textPrimary },
              ]}
            >
              {`${props.salaryPercentage}%`}
            </Text>
          </View>
        )}

        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Rent:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {`${formatNumberToCrore(props.rent)} PKR`}
          </Text>
        </View>

        <View style={[styles.inRow, styles.cardSubText]}>
          <Text
            style={[
              styles.fontBold,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            Counter Request On:{" "}
          </Text>
          <Text
            style={[
              styles.fontRegular,
              { fontSize: FontSizes.small, color: colors.textPrimary },
            ]}
          >
            {props.counterRequestOn}
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

export default ManagerOffersButton;
