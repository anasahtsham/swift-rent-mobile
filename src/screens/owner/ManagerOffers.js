import React, { useEffect } from "react";
import { BackHandler, FlatList, SafeAreaView, StyleSheet } from "react-native";

import ManagerOffersButton from "../../components/common/buttons/ManagerOffersButton";
import ManagerOffersHeader from "../../components/common/header/ManagerOffersHeader";
import { managerOffersData } from "../../helpers/data/ManagerOffersData";
import { useColors } from "./../../helpers/SetColors";

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
      <ManagerOffersHeader />
      <FlatList
        style={{ flex: 1, marginBottom: 5 }}
        data={managerOffersData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ManagerOffersButton
            managerName={item.managerName}
            likes={item.likes}
            dislikes={item.dislikes}
            ratings={item.ratings}
            averageRating={item.averageRating}
            myOffer={item.myOffer}
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
