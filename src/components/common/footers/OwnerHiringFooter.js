import { StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { buttonWidthSmall } from "../../../constants";
import { useColors } from "../../../helpers/SetColors";
import CustomFooterButton from "../../CustomFooterButton";

const OwnerHiringFooter = ({
  navigation,
  hiringPurpose,
  salaryType,
  salaryPeriod,
  myOffer,
  managersOffer,
  managersComment,
}) => {
  const colors = useColors();
  return (
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
            fontSize: FontSizes.midSmall,
            fontWeight: "bold",
            color: colors.textPrimary,
          },
        ]}
      >
        Hiring To {hiringPurpose}
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
          {salaryType}
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
          {salaryPeriod}
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
          {myOffer}
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
          {managersOffer}
        </Text>
      </View>
      <View style={[styles.footerBodyText, { flexWrap: "wrap" }]}>
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
          {managersComment}
        </Text>
      </View>
      <View style={styles.footerButtonContainer}>
        <CustomFooterButton
          buttonWidth={buttonWidthSmall}
          onPress={() => navigation.goBack()}
          borderColor={colors.borderGreen}
          buttonText="Accept"
          isBold={true}
        />
        <CustomFooterButton
          buttonWidth={buttonWidthSmall}
          onPress={() => navigation.goBack()}
          borderColor={colors.borderRed}
          buttonText="Reject"
          isBold={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  footer: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingVertical: "2%",
    paddingHorizontal: "5%",
  },
  footerTitle: {
    textAlign: "center",
    marginBottom: "2%",
  },
  footerBodyText: {
    fontSize: FontSizes.small,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "1%",
  },
  footerButtonContainer: {
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default OwnerHiringFooter;
