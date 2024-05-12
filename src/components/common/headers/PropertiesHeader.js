import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { OPACITY_VALUE_FOR_BUTTON } from "../../../constants";

const PropertiesHeader = (props) => {
  const colors = props.colors;
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.header,
        { backgroundColor: colors.headerAndFooterBackground },
      ]}
    >
      {!props.isTenant && !props.isManager && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Maintenance List");
          }}
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
      )}

      {props.isManager && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Rents", {
              header: "Received Rents",
            })
          }
          activeOpacity={OPACITY_VALUE_FOR_BUTTON}
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
            Rents Status
          </Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        onPress={() => navigation.navigate("Complains")}
        activeOpacity={OPACITY_VALUE_FOR_BUTTON}
        style={[
          styles.headerCards,
          {
            width: props.isTenant ? "100%" : "auto", // if tenant or manager, make the button full width
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
          Complaints
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
