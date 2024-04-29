import React, { useEffect } from "react";
import { BackHandler, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { useColors } from "../../helpers/SetColors";
import { managerOffersData } from "../../helpers/data/ManagerOffersData";
import ManagerOffersButton from "../common/buttons/ManagerOffersButton";
import ManagerOffersHeader from "../common/headers/ManagerOffersHeader";

const ManagerOffers = ({ navigation }) => {
  const colors = useColors();

  useEffect(() => {
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
        managerOffersAmount={managerOffersData.length}
        hiringFor="Bringing Tenant/ Hiring Manager"
        salaryType="OneTime/ Salary/ Commission"
        salaryPeriod="Monthly/ Weekly/ Daily"
        myOffer="10,000/ 10%"
      />
      <FlatList
        style={{ flex: 1, marginBottom: 5 }}
        data={managerOffersData.sort(
          (firstOffer, secondOffer) =>
            secondOffer.averageRating - firstOffer.averageRating
        )}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ManagerOffersButton
            managerName={item.managerName}
            likes={item.likes}
            dislikes={item.dislikes}
            ratings={item.ratings}
            averageRating={item.averageRating}
            managersOffer={item.managersOffer}
            managersComment={item.managersComment}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default ManagerOffers;
