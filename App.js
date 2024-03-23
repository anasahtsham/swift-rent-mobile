import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";
import { useCustomFonts } from "./src/assets/fonts/useCustomFonts";
import AnalyticalReport from "./src/components/common/AnalyticalReport";
import ChangePassword from "./src/components/common/ChangePassword";
import FAQScreen from "./src/components/common/FAQScreen";
import MaintenanceComplainsList from "./src/components/common/MaintenanceComplainsList";
import MonthReport from "./src/components/common/MonthReport";
import ProblemForm from "./src/components/common/ProblemForm";
import PropertyMenu from "./src/components/common/PropertyMenu";
import RatingScreen from "./src/components/common/RatingScreen";
import Ratings from "./src/components/common/Ratings";
import Rents from "./src/components/common/Rents";
import SettingScreen from "./src/components/common/SettingScreen";
import ViewMaintenanceAndComplains from "./src/components/common/ViewMaintenanceAndComplains";
import AddProperty from "./src/components/owner/AddProperty";
import AddPropertyInfo from "./src/components/owner/AddPropertyInfo";
import { setLanguageToEnglish } from "./src/helpers/SetLanguages";
import ManagerNavigator from "./src/navigation/ManagerNavigator";
import OwnerNavigator from "./src/navigation/OwnerNavigator";
import TenantNavigator from "./src/navigation/TenantNavigator";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import ContactInfo from "./src/screens/authentication/ContactInfo";
import ForgotPassword from "./src/screens/authentication/ForgotPassword";
import GetToKnow from "./src/screens/authentication/GetToKnow";
import LoginAs from "./src/screens/authentication/LoginAs";
import LoginScreen from "./src/screens/authentication/LoginScreen";
import RegisterAs from "./src/screens/authentication/RegisterAs";
import SetUpPassword from "./src/screens/authentication/SetUpPassword";
import WhoAreYou from "./src/screens/authentication/WhoAreYou";
import HireManagerRequestForm from "./src/screens/owner/HireManagerRequestForm";
import ManagerOffers from "./src/screens/owner/ManagerOffers";
import OwnerHiring from "./src/screens/owner/OwnerHiring";
import RegisterTenant from "./src/screens/owner/RegisterTenant";
import RentHistory from "./src/screens/owner/RentHistory";
import VerifiyDocumentation from "./src/screens/owner/VerifyDocumentation";
import AllSetUpSplash from "./src/splash/AllSetUpSplash";
import SplashScreen from "./src/splash/SplashScreen";
import TestScreen from "./src/tests/TestScreen";
import ExploreOffers from "./src/components/common/ExploreOffers";

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
          initialRouteName="Explore Offers"
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
          {/* Owner Screens */}
          <Stack.Screen name="Setting Screen" component={SettingScreen} />
          <Stack.Screen name="Change Password" component={ChangePassword} />
          <Stack.Screen name="FAQ Screen" component={FAQScreen} />
          <Stack.Screen name="Rents" component={Rents} />
          <Stack.Screen name="Owner Hiring" component={OwnerHiring} />
          <Stack.Screen name="Rating Screen" component={RatingScreen} />
          <Stack.Screen name="Property Menu" component={PropertyMenu} />
          <Stack.Screen name="Analytical Report" component={AnalyticalReport} />
          <Stack.Screen name="Problem Form" component={ProblemForm} />
          <Stack.Screen name="Month Report" component={MonthReport} />
          <Stack.Screen name="Add Property" component={AddProperty} />
          <Stack.Screen
            name="Maintenance Complains List"
            component={MaintenanceComplainsList}
          />
          <Stack.Screen
            name="View Maintenance And Complains"
            component={ViewMaintenanceAndComplains}
          />
          <Stack.Screen name="Register Tenant" component={RegisterTenant} />
          <Stack.Screen name="Rent History" component={RentHistory} />
          <Stack.Screen name="Manager Offers" component={ManagerOffers} />
          <Stack.Screen name="Add Property Info" component={AddPropertyInfo} />
          <Stack.Screen
            name="Hire Manager Request Form"
            component={HireManagerRequestForm}
          />
          <Stack.Screen
            name="Verify Documentation"
            component={VerifiyDocumentation}
          />
          <Stack.Screen name="Ratings" component={Ratings} />
          <Stack.Screen name="Explore Offers" component={ExploreOffers} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
