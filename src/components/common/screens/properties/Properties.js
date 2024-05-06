import { useNavigation } from "@react-navigation/native";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { BUTTON_WIDTH_SMALL } from "../../../../constants";
import { useColorsOnFocus } from "../../../../helpers/SetColors";
import ButtonGrey from "../../buttons/ButtonGrey";
import { PropertiesButton } from "../../buttons/PropertiesButton";
import RentalsButton from "../../buttons/RentalsButton";
import PropertiesHeader from "../../headers/PropertiesHeader";

const Properties = (props) => {
  const colors = useColorsOnFocus();
  const navigation = useNavigation();

  const dataToRender =
    (props.isTenant
      ? props.rentalsData
      : props.isManager
      ? props.managerPropertiesData
      : props.ownerPropertiesData) || [];

  const renderItem = ({ item: data }) =>
    props.isTenant ? (
      <RentalsButton
        colors={colors}
        key={data.id}
        id={data.id}
        address={data.address}
        owner={data.ownerName}
        manager={data.managerName}
        navigation={navigation}
      />
    ) : (
      <PropertiesButton
        colors={colors}
        key={data.id}
        id={data.id}
        address={data.address}
        owner={data.ownername}
        tenant={data.tenantname}
        manager={data.managername}
        propertystatus={data.propertystatus}
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
      <PropertiesHeader
        isTenant={props.isTenant}
        isManager={props.isManager}
        colors={colors}
      />
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
            width={BUTTON_WIDTH_SMALL}
            fontSize={14}
            buttonText={props.isTenant ? "Rental Requests" : "+ Add a Property"}
            destinationScreen={
              props.isTenant ? "Rental Requests" : "Add Property"
            }
            navigation={navigation}
          />
        )}
      </View>
      {props.loading && (
        <ActivityIndicator size="large" color={colors.textPrimary} />
      )}
      {dataToRender.length === 0 && !props.loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontFamily: "OpenSansRegular",
              fontSize: FontSizes.medium,
              color: colors.textWhite,
            }}
          >
            No properties yet
          </Text>
        </View>
      )}
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
