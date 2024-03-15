import { useFonts } from "expo-font";

// this function loads custom fonts all across the app, it is called in App.js

export const useCustomFonts = () => {
  const [loaded] = useFonts({
    OpenSansBold: require("./fontFiles/OpenSans-Bold.ttf"),
    OpenSansRegular: require("./fontFiles/OpenSans-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return loaded;
};
