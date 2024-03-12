import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";

const PropertiesHeader = (props) => {
  const colors = props.colors;
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      <TouchableOpacity
        activeOpacity={opacityValueForButton}
        style={[
          styles.headerCards,
          {
            borderColor: colors.borderBlue,
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.medium,
            textAlign: "center",
          }}
        >
          Maintenance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={opacityValueForButton}
        style={[
          styles.headerCards,
          {
            borderColor: colors.borderBlue,
            backgroundColor: colors.headerAndFooterBackground,
          },
        ]}
      >
        <Text
          style={{
            color: colors.textPrimary,
            fontSize: FontSizes.medium,
            textAlign: "center",
          }}
        >
          Complains
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
  },
  headerCards: {
    borderRadius: 10,
    borderWidth: 4,
    padding: 10,
    elevation: 10,
  },
});

export default PropertiesHeader;
