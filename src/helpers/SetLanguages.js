import { useEffect, useState } from "react";
import { loadLanguage } from ".";
import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../assets/fonts/displaytext/UR/ur-pack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLanguages = () => {
  const [languages, setLanguages] = useState(English);

  useEffect(() => {
    loadLanguage().then((language) => {
      setLanguages(language === "english" ? English : Urdu);
    });
  }, []);

  return languages;
};

const SetLanuages = () => {
  useLanguages();
};

export const setLanguageToEnglish = async () => {
  try {
    await AsyncStorage.setItem("language", "english");
  } catch (e) {
    console.log(e);
  }
};

export const clearLanguageSetting = async () => {
  try {
    await AsyncStorage.removeItem("language");
    const value = await AsyncStorage.getItem("language");
    console.log("language: " + value);
  } catch (e) {
    console.log(e);
  }

  console.log("cleared.");
};

export default SetLanuages;
