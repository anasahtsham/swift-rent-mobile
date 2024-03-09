import ManagerAlerts from "./../../../screens/managerScreens/ManagerAlerts";
import ManagerAnalytics from "./../../../screens/managerScreens/ManagerAnalytics";
import ManagerProfile from "./../../../screens/managerScreens/ManagerProfile";
import ManagerProperties from "./../../../screens/managerScreens/ManagerProperties";
import TabNavigator from "./TabNavigator";
const ManagerNavigator = () => {
  return (
    <TabNavigator
      screen1="Analytics"
      component1={ManagerAnalytics}
      screen2="Properties"
      component2={ManagerProperties}
      screen3="Alers"
      component3={ManagerAlerts}
      screen4="Profile"
      component4={ManagerProfile}
    />
  );
};

export default ManagerNavigator;
