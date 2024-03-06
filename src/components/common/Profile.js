import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Card containerStyle={styles.card}>
          <View style={styles.userInfo}>
            <Image
              source={require("../../assets/icons/userIcon.png")}
              style={styles.userImage}
            />
            <Text style={styles.userName}>Ibrahim Ahtsham</Text>
          </View>
          <Text style={styles.userDetails}>+92 317 0572192</Text>
          <Text style={styles.userDetails}>ibrahimahthsam2002@gmail.com</Text>
        </Card>
      </View>
      <ScrollView>
        <View style={styles.buttons}>
          <Button
            title="Button 1"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen1")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
          <Button
            title="Button 2"
            titleStyle={styles.buttonText}
            buttonStyle={styles.button}
            containerStyle={styles.buttonContainer}
            onPress={() => navigation.navigate("Screen2")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: { flex: 1, backgroundColor: "lightblue" },
  card: { borderColor: "blue", borderRadius: 10, borderWidth: 2 },
  userInfo: { flexDirection: "row" },
  userImage: { width: 50, height: 50 },
  userName: { marginLeft: 10, fontSize: 20 },
  userDetails: { marginLeft: 60 },
  buttons: {
    alignSelf: "center",
    width: "80%",
  },
  buttonContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  button: { backgroundColor: "white", borderRadius: 20 },

  buttonText: { color: "black" },
});

export default Profile;
