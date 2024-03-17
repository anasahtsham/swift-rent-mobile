import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as FontSizes from "../../../assets/fonts/FontSizes";
import { opacityValueForButton } from "../../../constants";

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
      {!props.isManager && (
        <>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Maintenance Complains List", {
                header: "Maintenance",
              });
            }}
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
            onPress={() =>
              navigation.navigate("Maintenance Complains List", {
                header: "Complains",
              })
            }
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
        </>
      )}

      {props.isManager && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Maintenance Complains List", {
              header: "Complains",
            })
          }
          activeOpacity={opacityValueForButton}
          style={[
            styles.headerCards,
            {
              borderColor: colors.borderBlue,
              backgroundColor: colors.headerAndFooterBackground,
              width: "100%",
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
            + Add a Property
          </Text>
        </TouchableOpacity>
      )}
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
