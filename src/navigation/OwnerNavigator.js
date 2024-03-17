import OwnerAlerts from "../screens/owner/OwnerAlerts";
import OwnerAnalytics from "../screens/owner/OwnerAnalytics";
import OwnerProfile from "../screens/owner/OwnerProfile";
import OwnerProperties from "../screens/owner/OwnerProperties";
import TabNavigator from "./TabNavigator";

// This is the navigation bar that is used when the user type is owner

const OwnerNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={OwnerAnalytics}
      screen2="Properties"
      component2={OwnerProperties}
      screen3="Alerts"
      component3={OwnerAlerts}
      screen4="Profile"
      component4={OwnerProfile}
    />
  );
};

export default OwnerNavigator;
