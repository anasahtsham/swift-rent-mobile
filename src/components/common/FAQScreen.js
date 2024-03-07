import React, { useEffect, useState } from "react";
import { BackHandler, Image, StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "./buttons/ButtonGrey";

const FAQScreen = ({ navigation }) => {
  const colors = useColors();
  const languages = useLanguages();

  const [activeSections, setActiveSections] = useState([]);

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

  const faqs = [
    { title: "How to add a property?", content: "Answer to question 1" },
    { title: "How to register a tenant?", content: "Answer to question 2" },
    {
      title: "How to change tenant?",
      content:
        "You can change your tenant by first removing your old tenant and then adding a new one.",
    },
    {
      title: "What are the requirements for property registration?",
      content:
        "To register a property, you need to provide proof of ownership, identification documents, and pay the necessary fees.",
    },
    {
      title: "How do I renew my tenant agreement?",
      content:
        "Tenant agreements can usually be renewed by contacting your landlord or property management company before the expiration date and requesting a renewal.",
    },
    {
      title: "What should I do if I want to terminate my tenancy?",
      content:
        "To terminate your tenancy, you typically need to provide written notice to your landlord or property management company as per the terms of your rental agreement.",
    },
    // Add more FAQs here
  ];

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={styles.accordionHeader}>
        <Text
          style={[
            styles.accordionHeaderText,
            isActive
              ? {
                  color: colors.textDarkBlue,
                  fontSize: FontSizes.small,
                }
              : { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          {section.title}
        </Text>
        <Image
          tintColor={
            isActive ? colors.bottomBarIconActive : colors.bottomBarIconInactive
          }
          source={
            isActive
              ? require("../../assets/icons/collapse-arrow.png")
              : require("../../assets/icons/down-arrow.png")
          }
        />
      </View>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <View style={styles.accordionContent}>
        <Text
          style={[
            styles.accordionContentText,
            { color: colors.textPrimary, fontSize: FontSizes.small },
          ]}
        >
          {section.content}
        </Text>
      </View>
    );
  };

  const updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View
      style={[styles.container, { backgroundColor: colors.backgroundPrimary }]}
    >
      <View style={styles.headerTextContainer}>
        <Text
          style={[
            styles.text,
            { fontSize: FontSizes.large, color: colors.textPrimary },
          ]}
        >
          {languages.faqs}
        </Text>
      </View>
      <View style={{ height: "70%", width: "100%" }}>
        <Accordion
          renderAsFlatList={true}
          touchableProps={{ underlayColor: "transparent" }}
          containerStyle={{
            width: "100%",
          }}
          sectionContainerStyle={[
            styles.accordionSectionContainer,
            { borderColor: colors.borderBlue },
          ]}
          sections={faqs}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={updateSections}
        />
      </View>

      <ButtonGrey
        fontSize={FontSizes.small}
        width="30%"
        buttonText="Go Back"
        destinationScreen="Profile"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTextContainer: {
    alignItems: "center",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  accordionSectionContainer: {
    alignSelf: "center",
    borderWidth: 4,
    borderRadius: 20,
    marginVertical: 10,
    width: "80%",
  },
  accordionHeader: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordionHeaderText: { fontFamily: "OpenSansBold", flex: 0.9 },
  accordionContent: { padding: 20 },
  accordionContentText: { fontFamily: "OpenSansRegular" },
});

export default FAQScreen;
