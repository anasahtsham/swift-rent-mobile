import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useColorsOnFocus } from "../../helpers/SetColors";
import PropertiesHeader from "./header/PropertiesHeader";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "./buttons/ButtonGrey";
import { useNavigation } from "@react-navigation/native";
import { buttonWidthSmall } from "../../constants";
import { PropertiesButton } from "./buttons/PropertiesButton";
import { propertiesData } from "./../../helpers/PropertiesData";

const Properties = (props) => {
  const colors = useColorsOnFocus();
  const navigation = useNavigation();
  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <PropertiesHeader colors={colors} />
      <View
        style={{
          paddingTop: 20,
          paddingHorizontal: 20,
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "OpenSansBold",
            fontSize: FontSizes.medium,
            color: colors.textWhite,
          }}
        >
          My Properties
        </Text>
        <ButtonGrey
          width={buttonWidthSmall}
          fontSize={14}
          buttonText="+ Add a Property"
          destinationScreen=""
          navigation={navigation}
        />
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          {props.propertiesData.map((property, index) => (
            <PropertiesButton
              colors={colors}
              key={property.id}
              address={property.address}
              city={property.city}
              income={property.income}
              outcome={property.outcome}
              status={property.status}
              manager={property.manager}
              tenant={property.tenant}
              rentStatus={property.rentStatus}
            />
          ))}
        </View>
        <View style={{ height: 70 }}></View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  buttons: {
    alignSelf: "center",
    width: "90%",
  },
});

export default Properties;
