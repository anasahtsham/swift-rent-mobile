import OwnerAlerts from "../screens/owner_screens/OwnerAlerts";
import OwnerAnalytics from "../screens/owner_screens/OwnerAnalytics";
import OwnerProfile from "../screens/owner_screens/OwnerProfile";
import OwnerProperties from "../screens/owner_screens/OwnerProperties";
import TabNavigator from "./TabNavigator";

const OwnerNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={OwnerAnalytics}
      screen2="Properties"
      component2={OwnerProperties}
      screen3="Alers"
      component3={OwnerAlerts}
      screen4="Profile"
      component4={OwnerProfile}
    />
  );
};

export default OwnerNavigator;
