import { useEffect, useState } from "react";
import { loadLanguage } from ".";
import * as English from "../assets/fonts/displaytext/EN/en-pack";
import * as Urdu from "../assets/fonts/displaytext/UR/ur-pack";

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

export default SetLanuages;
