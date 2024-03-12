import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import ChangePassword from "./src/components/common/ChangePassword";
import FAQScreen from "./src/components/common/FAQScreen";
import Rents from "./src/components/common/Rents";
import SettingScreen from "./src/components/common/SettingScreen";
import { setLanguageToEnglish } from "./src/helpers/SetLanguages";
import ManagerNavigator from "./src/navigation/ManagerNavigator";
import OwnerNavigator from "./src/navigation/OwnerNavigator";
import TenantNavigator from "./src/navigation/TenantNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ContactInfo from "./src/screens/authentication_screens/ContactInfo";
import ForgotPassword from "./src/screens/authentication_screens/ForgotPassword";
import GetToKnow from "./src/screens/authentication_screens/GetToKnow";
import LoginAs from "./src/screens/authentication_screens/LoginAs";
import LoginScreen from "./src/screens/authentication_screens/LoginScreen";
import RegisterAs from "./src/screens/authentication_screens/RegisterAs";
import SetUpPassword from "./src/screens/authentication_screens/SetUpPassword";
import WhoAreYou from "./src/screens/authentication_screens/WhoAreYou";
import OwnerAnalyticalReport from "./src/screens/owner_screens/OwnerAnalyticalReport";
import OwnerHiring from "./src/screens/owner_screens/OwnerHiring";
import RatingScreen from "./src/screens/owner_screens/RatingScreen";
import ReportBug from "./src/screens/owner_screens/ReportBug";
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import SplashScreen from "./src/splash/SplashScreen";
import TestScreen from "./src/tests/TestScreen";

const Stack = createStackNavigator();

export default function App() {
  setLanguageToEnglish();
  if (useCustomFonts()) {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash Screen"
        >
          {/* Authentication Screens */}
          <Stack.Screen name="Test Screen" component={TestScreen} />
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
          {/* Tab Navigator */}
          <Stack.Screen name="Owner Navigator" component={OwnerNavigator} />
          <Stack.Screen name="Tenant Navigator" component={TenantNavigator} />
          <Stack.Screen name="Manager Navigator" component={ManagerNavigator} />
          {/* Owner Screens*/}
          <Stack.Screen name="Setting Screen" component={SettingScreen} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="FAQ Screen" component={FAQScreen} />
          <Stack.Screen name="Rents" component={Rents} />
          <Stack.Screen name="Owner Hiring" component={OwnerHiring} />
          <Stack.Screen name="Rating Screen" component={RatingScreen} />
          <Stack.Screen
            name="Owner Analytical Report"
            component={OwnerAnalyticalReport}
          />
          <Stack.Screen name="Report Bug" component={ReportBug} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
