import AsyncStorage from "@react-native-async-storage/async-storage";

// These functions are used to save and load the theme and language settings

export const saveTheme = async (theme) => {
  try {
    await AsyncStorage.setItem("theme", theme);
  } catch (error) {
    console.error("Error saving theme:", error);
  }
};

export const loadTheme = async () => {
  try {
    const savedTheme = await AsyncStorage.getItem("theme");
    return savedTheme !== null ? savedTheme : null;
  } catch (error) {
    console.error("Error loading theme:", error);
  }
};

export const saveLanguage = async (language) => {
  try {
    await AsyncStorage.setItem("language", language);
  } catch (error) {
    console.error("Error saving language:", error);
  }
};

export const loadLanguage = async () => {
  try {
    const savedLanguage = await AsyncStorage.getItem("language");
    return saveLanguage !== null ? savedLanguage : null;
  } catch (error) {
    console.error("Error loading language:", error);
  }
};

// This function is used to format the number to a more readable format and also so that it does not take too much space

export function formatNumber(num) {
  num = Number(num);
  if (num >= 10000000) {
    return (num / 10000000).toFixed(1) + " Crore";
  } else {
    return num.toLocaleString();
  }
}
