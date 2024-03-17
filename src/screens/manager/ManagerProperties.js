import Properties from "../../components/common/Properties";
import { propertiesData } from "../../helpers/data/PropertiesData";

const ManagerProperties = () => {
  return <Properties isManager={true} propertiesData={propertiesData} />;
};

export default ManagerProperties;
