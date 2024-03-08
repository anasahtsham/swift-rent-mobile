import React, { useEffect, useState } from "react";
import { BackHandler, Image, StyleSheet, Text, View } from "react-native";
import Accordion from "react-native-collapsible/Accordion";

import { useColors } from "../../helpers/SetColors";
import { useLanguages } from "../../helpers/SetLanguages";

import ButtonGrey from "./buttons/ButtonGrey";

import * as FontSizes from "../../assets/fonts/FontSizes";

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
      title: "How to add a property?",
      content:
        "To add a property, you need to log in to your account, navigate to the 'Properties' section, and click on the 'Add Property' button. Then, fill in the required details such as property address, description, and upload any necessary documents.",
    },
    {
      title: "How to register a tenant?",
      content:
        "To register a tenant, you should have the necessary information about the tenant ready, such as their full name, contact information, and any relevant identification documents. Then, log in to your account, go to the 'Tenants' section, and select 'Register Tenant.' Fill in the tenant's details and submit the form.",
    },
    {
      title: "How to change tenant?",
      content:
        "You can change your tenant by first removing your old tenant from the system. Then, you can register a new tenant following the same process outlined in the 'How to register a tenant?' FAQ.",
    },
    {
      title: "What are the requirements for property registration?",
      content:
        "To register a property, you need to provide proof of ownership, such as a deed or title, along with identification documents such as a driver's license or passport. Additionally, you may need to pay registration fees as required by your local government.",
    },
    {
      title: "How do I renew my tenant agreement?",
      content:
        "Tenant agreements can usually be renewed by contacting your landlord or property management company before the expiration date and requesting a renewal. They may provide you with a renewal form to fill out or initiate the renewal process through their online platform.",
    },
    {
      title: "What should I do if I want to terminate my tenancy?",
      content:
        "To terminate your tenancy, you typically need to provide written notice to your landlord or property management company as per the terms of your rental agreement. The notice period and any specific requirements for termination should be outlined in your lease agreement.",
    },
    {
      title: "How do I report maintenance issues?",
      content:
        "If you encounter maintenance issues in your rented property, you should promptly inform your landlord or property management company. Most landlords have a designated procedure for reporting maintenance problems, which may involve submitting a maintenance request form, calling a specific number, or sending an email.",
    },
    {
      title: "Can I sublet my rental property?",
      content:
        "Whether or not you can sublet your rental property depends on the terms of your lease agreement and local rental laws. Some landlords prohibit subletting altogether, while others may allow it with prior written consent. It's crucial to review your lease agreement and consult with your landlord before subletting.",
    },
    {
      title: "How to add amenities to my property listing?",
      content:
        "To add amenities to your property listing, log in to your account, navigate to the property details section, and find the amenities section. From there, you can select the amenities available in your property, such as parking, swimming pool, or gym facilities. Make sure to provide accurate information to attract potential tenants.",
    },
    {
      title:
        "What documents do I need to provide for a background check on a potential tenant?",
      content:
        "For a background check on a potential tenant, you typically need their consent and certain documents such as their photo identification (e.g., driver's license or passport) and proof of income (e.g., pay stubs or employment verification). Additionally, you may request references from previous landlords or employers.",
    },
    {
      title: "How do I handle security deposits?",
      content:
        "Security deposits are typically collected before a tenant moves in and serve as protection for the landlord against damage to the property or unpaid rent. It's essential to follow local laws regarding security deposit limits, handling, and return procedures. Make sure to document the condition of the property thoroughly before move-in and provide an itemized list of deductions if any portion of the deposit is withheld.",
    },
    {
      title:
        "What is the process for eviction if a tenant violates the lease agreement?",
      content:
        "If a tenant violates the lease agreement, such as failing to pay rent or causing significant damage to the property, the landlord may initiate the eviction process. This usually involves serving the tenant with a notice to remedy the violation or vacate the premises within a specified period. If the tenant fails to comply, the landlord can file for eviction through the appropriate legal channels, such as the local housing court.",
    },
    {
      title: "How do I handle repairs and maintenance for my rental property?",
      content:
        "As a landlord, you are responsible for ensuring that your rental property is in a habitable condition and addressing maintenance issues promptly. Establish clear communication channels with your tenants for reporting maintenance problems and arrange for timely repairs as needed. It's advisable to maintain a record of all maintenance requests and repairs conducted on the property.",
    },
    {
      title: "Can I increase the rent during the lease term?",
      content:
        "In most jurisdictions, landlords are prohibited from increasing the rent during the lease term unless specified in the lease agreement or permitted by local rent control regulations. However, landlords may increase the rent upon lease renewal or if the tenant agrees to a rent increase through an addendum to the lease agreement.",
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
