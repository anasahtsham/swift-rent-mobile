import { Image, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { icons } from "../../../helpers/ImageImports";
import { useColors } from "../../../helpers/SetColors";

const OwnerHiringHeader = (props) => {
  const colors = useColors();
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <View
        style={[
          styles.headerCard,
          {
            borderColor: colors.borderBlue,
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Image
            source={icons.userIcon}
            style={[styles.userIcon, {}]}
            tintColor={colors.iconPrimary}
          />
          <Text
            style={[
              styles.fontBold,
              { color: colors.textPrimary, fontSize: FontSizes.medium },
            ]}
          >
            {props.managersName}
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.fontRegular,
              {
                color: colors.textPrimary,
                fontSize: FontSizes.small,
              },
            ]}
          >
            {props.managersNumber}
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
            {props.managersEmail}
          </Text>
          <View style={[styles.rightInRow, {}]}>
            <Text
              style={[
                styles.fontRegular,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              Managing Since:
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {props.managingSince}
            </Text>
          </View>
          <View style={[styles.rightInRow]}>
            <Text
              style={[
                styles.fontRegular,
                { color: colors.textPrimary, fontSize: FontSizes.small },
              ]}
            >
              Properties Managed:
            </Text>
            <Text
              style={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                },
              ]}
            >
              {props.propertiesManaged}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },
  header: {
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  headerCard: {
    width: "100%",
    borderWidth: 4,
    borderRadius: 20,
    padding: 10,
  },
  userIcon: {
    width: 50,
    height: 50,
  },
  rightInRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default OwnerHiringHeader;
