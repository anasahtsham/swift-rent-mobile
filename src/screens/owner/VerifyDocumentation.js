import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import { Button } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { useColorsOnFocus } from "../../helpers/SetColors";
import * as FontSizes from "../../assets/fonts/FontSizes";
import ButtonGrey from "../../components/common/buttons/ButtonGrey";

const VerifyDocumentation = ({ navigation }) => {
  const colors = useColorsOnFocus();
  const [imageUri, setImageUri] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
    setIsVisible(false);
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
    setIsVisible(false);
  };

  return (
    <View
      style={{
        backgroundColor: modalVisible
          ? "rgba(0, 0, 0, 0.5)"
          : colors.backgroundPrimary,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={[
          styles.fontBold,
          {
            color: colors.textPrimary,
            fontSize: FontSizes.large,
            marginBottom: 20,
          },
        ]}
      >
        Verify Rent
      </Text>
      <TouchableOpacity
        style={{ marginBottom: 30 }}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={[
            styles.imageContainer,
            {
              backgroundColor: modalVisible
                ? "rgba(0, 0, 0, 0.5)"
                : colors.backgroundPrimary,
              borderColor: colors.borderPrimary,
            },
          ]}
        >
          {!imageUri && (
            <View style={styles.centeredView}>
              <Text
                style={
                  (styles.fontBold,
                  { fontSize: FontSizes.small, color: colors.textPrimary })
                }
              >
                RENT PAID PROOF PICTURE HERE!
              </Text>
            </View>
          )}
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              style={{
                width: 350,
                height: 600,
              }}
            />
          )}
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View
            style={[
              styles.customPopUp,
              {
                backgroundColor: colors.backgroundPrimary,
                borderRadius: 20,
              },
            ]}
          >
            <Button
              buttonStyle={[
                styles.customPopUpButtons,
                {
                  marginTop: 0,
                  backgroundColor: colors.buttonBackgroundPrimary,
                  borderColor: colors.borderPrimary,
                },
              ]}
              title="Open Camera"
              titleStyle={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                  fontWeight: "bold",
                },
              ]}
              onPress={() => {
                openCamera(), setModalVisible(!modalVisible);
              }}
            />
            <Button
              buttonStyle={[
                styles.customPopUpButtons,
                {
                  backgroundColor: colors.buttonBackgroundPrimary,
                  borderColor: colors.borderPrimary,
                },
              ]}
              title="Open Gallery"
              titleStyle={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                  fontWeight: "bold",
                },
              ]}
              onPress={() => {
                openGallery(), setModalVisible(!modalVisible);
              }}
            />

            <Button
              buttonStyle={[
                styles.customPopUpButtons,
                {
                  width: 100,
                  backgroundColor: colors.buttonBackgroundPrimary,
                  borderColor: colors.borderPrimary,
                },
              ]}
              title="Delete Image"
              titleStyle={[
                styles.fontBold,
                {
                  color: colors.textPrimary,
                  fontSize: FontSizes.small,
                  fontWeight: "bold",
                },
              ]}
              onPress={() => {
                setImageUri(null), setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
      <ButtonGrey
        buttonStyle={{
          backgroundColor: modalVisible
            ? "rgba(0, 0, 0, 0.5)"
            : colors.buttonBackgroundPrimary,
        }}
        navigation={navigation}
        destinationScreen="Owner Navigator"
        userType="UserType"
        isSubmitButton={false}
        onPress={() => {}}
        buttonText="Submit"
        fontSize={FontSizes.medium}
        width={150}
      />
    </View>
  );
};

styles = StyleSheet.create({
  fontBold: { fontFamily: "OpenSansBold" },
  fontRegular: { fontFamily: "OpenSansRegular" },

  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 356,
    height: 606,
    borderWidth: 4,

    borderWidth: 3,
    borderStyle: "dashed",
  },
  customPopUp: {
    width: 250,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customPopUpButtons: {
    marginTop: 10,
    borderWidth: 1,
    width: 170,
    alignSelf: "center",
    borderRadius: 20,
  },
});
export default VerifyDocumentation;
