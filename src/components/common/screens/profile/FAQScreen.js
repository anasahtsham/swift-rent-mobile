import React, { useEffect, useState } from "react";
import { BackHandler, Image, StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import * as FontSizes from "../../../../assets/fonts/FontSizes";
import { icons } from "../../../../helpers/ImageImports";
import { useColors } from "../../../../helpers/SetColors";
import { useLanguages } from "../../../../helpers/SetLanguages";
import ButtonGrey from "../../buttons/ButtonGrey";

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
    {
      title: "",
      content: "",
    },
    {
      title: "How do I change my name?",
      content:
        "Contact customer support, as we do not allow users to change their names on the platform. If you have a valid reason for changing your name, please provide the necessary reasoning to support your request.",
    },
    {
      title: "Can I increase the rent during the lease term?",
      content:
        "No, what you can do instead is terminate the current lease and re-register the old tenant on your existing property.",
    },
    {
      title: "Can I delete my given rating?",
      content:
        "What you can do is edit the rating you have given. However, you cannot delete the rating you have given to a user.",
    },
    {
      title: "How to change tenant?",
      content:
        "You can change your tenant by first removing your old tenant from the system. Then, you can register a new tenant following the same process outlined in the 'How to register a tenant?' FAQ.",
    },
    {
      title: "What are the requirements for property registration?",
      content:
        "To register a property, you need to provide the property address, property type, and optional details about the amenities",
    },
    {
      title: "How do I renew my tenant agreement?",
      content:
        "If the tenant lease agreement has expired, then you can simply create a new one for the same tenant.",
    },
    {
      title: "What should I do if I want to terminate my tenancy?",
      content:
        "If you want to terminate your tenancy, you can either register a complaint with your owner or manager. On the other hand, you can always contact them.",
    },
    {
      title: "How do I report maintenance issues?",
      content:
        "If you encounter maintenance issues in your rented property, simply submit a complaint with the owner or manager of the property.",
    },
    {
      title: "How do I track maintenance costs for my rental property?",
      content:
        "You can add maintenance reports for your rental property by navigating to a specific property and selecting the 'Maintenance' tab.",
    },
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
          source={isActive ? icons.collapseArrow : icons.expandArrow}
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
    width: "90%",
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
