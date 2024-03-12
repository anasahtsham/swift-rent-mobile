import OwnerAlerts from "../screens/ownerScreens/OwnerAlerts";
import OwnerAnalytics from "../screens/ownerScreens/OwnerAnalytics";
import OwnerProfile from "../screens/ownerScreens/OwnerProfile";
import OwnerProperties from "../screens/ownerScreens/OwnerProperties";
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
