import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Logout"
      onPress={() => navigation.navigate("Welcome Screen")}
    />
  );
};

export default Profile;
