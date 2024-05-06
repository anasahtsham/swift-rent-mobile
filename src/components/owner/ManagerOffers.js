import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  BackHandler,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { BASE_URL } from "../../constants";
import { useColors } from "../../helpers/SetColors";
import ManagerOffersCard from "../common/cards/ManagerOffersCard";
import ManagerOffersHeader from "../common/headers/ManagerOffersHeader";

const ManagerOffers = ({ navigation, route }) => {
  const { propertyID } = route.params;
  const colors = useColors();
  const [loading, setLoading] = useState(true);

  //header data
  const [purpose, setPurpose] = useState("");
  const [oneTimePay, setOneTimePay] = useState(0);
  const [salaryPaymentType, setSalaryPaymentType] = useState("");
  const [salaryFixed, setSalaryFixed] = useState(0);
  const [salaryPercentage, setSalaryPercentage] = useState(0);
  const [whoBringsTenant, setWhoBringsTenant] = useState("");
  const [rent, setRent] = useState(0);
  const [specialCondition, setSpecialCondition] = useState("");
  const [needHelpWithLegalWork, setNeedHelpWithLegalWork] = useState(null);

  //button data
  const [managerOffersData, setManagerOffersData] = useState([]);

  const fetchData = async () => {
    console.log("fetching data");
    try {
      const response = await axios.post(
        `${BASE_URL}/api/owner/view-counter-requests`,
        {
          propertyID: propertyID,
        }
      );

      //header
      setPurpose(response.data.ownerDemands.purpose);
      setOneTimePay(response.data.ownerDemands.onetimepay);
      setSalaryPaymentType(response.data.ownerDemands.salarypaymenttype);
      setSalaryFixed(response.data.ownerDemands.salaryfixed);
      setSalaryPercentage(response.data.ownerDemands.salarypercentage);
      setWhoBringsTenant(response.data.ownerDemands.whobringstenant);
      setRent(response.data.ownerDemands.rent);
      setSpecialCondition(response.data.ownerDemands.specialcondition);
      setNeedHelpWithLegalWork(
        response.data.ownerDemands.needhelpwithlegalwork
      );

      //buttons
      setManagerOffersData(response.data.managerHireCounterRequests);
    } catch (error) {
      console.log(JSON.stringify(error.response, null, 2));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    const backAction = () => {
      navigation.goBack();
      return true; // This will prevent the app from closing
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bodyBackground }}>
      <ManagerOffersHeader
        loading={loading}
        managerOffersAmount={managerOffersData.length}
        purpose={purpose}
        oneTimePay={oneTimePay}
        salaryPaymentType={salaryPaymentType}
        salaryFixed={salaryFixed}
        salaryPercentage={salaryPercentage}
        whoBringsTenant={whoBringsTenant}
        rent={rent}
        specialCondition={specialCondition}
        needHelpWithLegalWork={needHelpWithLegalWork}
      />

      <Text
        style={{
          fontFamily: "OpenSansRegular",
          fontWeight: "bold",
          color: colors.textPrimary,
          fontSize: FontSizes.medium,
          marginLeft: 10,
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        Manager(s) Offers
      </Text>

      {loading && <ActivityIndicator size="large" color={colors.textPrimary} />}

      <FlatList
        style={{ flex: 1, marginBottom: 5 }}
        data={managerOffersData.sort(
          (firstOffer, secondOffer) =>
            secondOffer.averageRating - firstOffer.averageRating // if its negative then false then dont sort
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ManagerOffersCard
            fetchData={fetchData}
            managerCounterRequestID={item.id}
            managerName={item.managerName}
            oneTimePay={item.onetimepay}
            salaryFixed={item.salaryfixed}
            salaryPercentage={item.salarypercentage}
            rent={item.rent}
            counterRequestStatus={item.counterrequeststatus}
            counterRequestOn={item.counterRequestOn}
            likes={item.likes}
            dislikes={item.dislikes}
            ratings={item.ratings}
            averageRating={item.averageRating}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ManagerOffers;
