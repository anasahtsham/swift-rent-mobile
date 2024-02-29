import AsyncStorage from "@react-native-async-storage/async-storage";

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
