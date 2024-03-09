import TabNavigator from "./TabNavigator";
import Profile from "./../Profile";
import OwnerAnalytics from "../../../screens/ownerScreens/OwnerAnalytics";
import OwnerProperties from "../../../screens/ownerScreens/OwnerProperties";
import OwnerAlerts from "../../../screens/ownerScreens/OwnerAlerts";
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
      component4={Profile}
    />
  );
};

export default OwnerNavigator;
