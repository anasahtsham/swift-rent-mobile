import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { buttonWidthSmall } from "../../constants";
import { useColorsOnFocus } from "../../helpers/SetColors";
import ButtonGrey from "./buttons/ButtonGrey";
import { PropertiesButton } from "./buttons/PropertiesButton";
import PropertiesHeader from "./header/PropertiesHeader";

const Properties = (props) => {
  const colors = useColorsOnFocus();
  const navigation = useNavigation();

  const renderItem = ({ item: property }) => (
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
      navigation={navigation}
    />
  );

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
          destinationScreen="Add Property"
          navigation={navigation}
        />
      </View>
      <FlatList
        data={props.propertiesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.buttons}
        ListFooterComponent={<View style={{ height: 70 }} />}
      />
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
