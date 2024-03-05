import "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

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
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import OwnerTabNavigator from "./src/components/owner/OwnerTabNavigator";

import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";

const Stack = createStackNavigator();

export default function App() {
  const setLanguageToEnglish = async () => {
    try {
      await AsyncStorage.setItem("language", "english");
    } catch (e) {
      console.log(e);
    }
  };
  setLanguageToEnglish();
  const clearLanguageSetting = async () => {
    try {
      await AsyncStorage.removeItem("language");
      const value = await AsyncStorage.getItem("language");
      console.log("language: " + value);
    } catch (e) {
      console.log(e);
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
          <Stack.Screen name="All Set Up" component={AllSetUpSplash} />
          <Stack.Screen
            name="Owner Tab Navigator"
            component={OwnerTabNavigator}
          />
          {/* Add the Tab.Navigator as a screen in the Stack.Navigator */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
