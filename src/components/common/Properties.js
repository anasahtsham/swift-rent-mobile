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

  const dataToRender = props.isTenant
    ? props.rentalsData
    : props.propertiesData;

  const renderItem = ({ item: data }) => (
    <PropertiesButton
      colors={colors}
      key={data.id}
      address={data.address}
      city={data.city}
      income={data.income}
      outcome={data.outcome}
      status={data.status}
      manager={data.manager}
      tenant={data.tenant}
      rentStatus={data.rentStatus}
      rentAmount={data.rentAmount}
      dueDate={data.dueDate}
      owner={data.owner}
      navigation={navigation}
    />
  );

  let headerText = "My Properties";
  if (props.isTenant) {
    headerText = "My Rentals";
  }
  if (props.isManager) {
    headerText = "Managed by Me";
  }

  return (
    <View
      style={[styles.container, { backgroundColor: colors.bodyBackground }]}
    >
      <PropertiesHeader isTenant={props.isTenant} colors={colors} />
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
          {headerText}
        </Text>
        {!props.isManager && (
          <ButtonGrey
            width={buttonWidthSmall}
            fontSize={14}
            buttonText={props.isTenant ? "Rental Requests" : "+ Add a Property"}
            destinationScreen="Add Property"
            navigation={navigation}
          />
        )}
      </View>
      <FlatList
        data={dataToRender}
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
