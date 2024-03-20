import React, { useState } from "react";
import { Image, Button, View, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useColors } from "../../helpers/SetColors";
import * as FontSizes from "../../assets/fonts/FontSizes";

const VerifyDocumentation = () => {
  const colors = useColors();

  const [imageUri, setImageUri] = useState(null);
  console.log("imageUri: ", imageUri);

  const openCamera = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
    });

    if (!result.cancelled) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>Verify Content</Text>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
            borderWidth: 4,
            borderColor: "black",
          }}
        />
      )}
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
        }}
      >
        <Button title="Open Camera" onPress={openCamera} />
        <Button title="Open Gallery" onPress={openGallery} />
      </View>
    </View>
  );
};

export default VerifyDocumentation;
