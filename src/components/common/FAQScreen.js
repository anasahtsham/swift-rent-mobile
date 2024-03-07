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
    // Add more FAQs here
  ];

  const renderHeader = (section, _, isActive) => {
    return (
      <View style={styles.header}>
        <Text
          style={[
            styles.headerText,
            isActive
              ? { color: colors.textDarkBlue, fontSize: FontSizes.small }
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
      <View style={styles.content}>
        <Text
          style={[
            styles.contentText,
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
      <View style={styles.logoAndTextContainer}>
        <Text
          style={[
            styles.text,
            { fontSize: FontSizes.large, color: colors.textPrimary },
          ]}
        >
          {languages.changeYourPassword}
        </Text>
      </View>
      <Accordion
        touchableProps={{ underlayColor: "transparent" }}
        containerStyle={{
          width: "80%",
        }}
        sectionContainerStyle={[
          styles.accordionContainer,
          { borderColor: colors.borderBlue },
        ]}
        sections={faqs}
        activeSections={activeSections}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={updateSections}
      />
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
    justifyContent: "space-around",
  },
  logoAndTextContainer: {
    alignItems: "center",
    width: "70%",
  },
  text: { fontFamily: "OpenSansBold", textAlign: "center" },
  accordionContainer: {
    borderWidth: 4,
    borderRadius: 20,
    marginVertical: 10,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: { fontFamily: "OpenSansBold" },
  content: { padding: 20 },
  contentText: { fontFamily: "OpenSansRegular" },
});

export default FAQScreen;
