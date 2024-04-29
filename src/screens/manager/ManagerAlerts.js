import Alerts from "../../components/common/screens/alerts/Alerts";
import { alertsData } from "../../helpers/data/AlertsData";

const ManagerAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default ManagerAlerts;
