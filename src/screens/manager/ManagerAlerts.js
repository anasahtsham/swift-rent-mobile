import Alerts from "../../components/common/Alerts";
import { alertsData } from "../../helpers/data/AlertsData";

const ManagerAlerts = () => {
  return <Alerts alertsData={alertsData} />;
};

export default ManagerAlerts;
