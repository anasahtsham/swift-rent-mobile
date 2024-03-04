import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";

import SplashScreen from "./src/splash/SplashScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import LoginScreen from "./src/screens/authenticationScreens/LoginScreen";
import WhoAreYou from "./src/screens/authenticationScreens/WhoAreYou";
import GetToKnow from "./src/screens/authenticationScreens/GetToKnow";
import ContactInfo from "./src/screens/authenticationScreens/ContactInfo";
import LoginAs from "./src/screens/authenticationScreens/LoginAs";
import ForgotPassword from "./src/screens/authenticationScreens/ForgotPassword";
import RegisterAs from "./src/screens/authenticationScreens/RegisterAs";
import SetUpPassword from "./src/screens/authenticationScreens/SetUpPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

export default function App() {
  const setLanguageToEnglish = async () => {
    try {
      await AsyncStorage.setItem("language", "english");
      const value = await AsyncStorage.getItem("language");
      console.log("language: " + value); // This should print "english" if the item was set successfully
    } catch (e) {
      console.log(e); // Log the error
    }

    console.log("language set to english.");
  };

  setLanguageToEnglish();
  const clearLanguageSetting = async () => {
    try {
      await AsyncStorage.removeItem("language");
      const value = await AsyncStorage.getItem("language");
      console.log("language: " + value); // This should print null if the item was removed successfully
    } catch (e) {
      console.log(e); // Log the error
    }

    console.log("cleared.");
  };
  // clearLanguageSetting();
  if (useCustomFonts()) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash Screen"
        >
          <Stack.Screen name="Splash Screen" component={SplashScreen} />
          <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
          <Stack.Screen name="Login Screen" component={LoginScreen} />
          <Stack.Screen name="Who Are You" component={WhoAreYou} />
          <Stack.Screen name="Get To Know" component={GetToKnow} />
          <Stack.Screen name="Contact Info" component={ContactInfo} />
          <Stack.Screen name="Login As" component={LoginAs} />
          <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          <Stack.Screen name="Register As" component={RegisterAs} />
          <Stack.Screen name="Set Up Password" component={SetUpPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
