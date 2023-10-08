import React, { useState } from "react";
import * as S from "./styles";

import * as ImagePicker from "expo-image-picker";

import Text from "../Text";
import Camera from "../../../assets/icons/Camera.svg";

import { Modal, TouchableOpacity, View, StyleSheet } from "react-native";
import { Spacer } from "../Spacer";
import Button from "../Button";

interface ImageProps {
  onImageSelected: (uri: string) => void;
}

export function ImagePickerProfile({ onImageSelected }: ImageProps) {
  const [imageUri, setImageUri] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Desculpe, precisamos das permissões da câmera para fazer isso funcionar!"
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri!);
      onImageSelected(result.assets[0].uri!);
      setShowModal(false);
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const handleCameraCapture = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert(
        "Desculpe, precisamos das permissões da câmera para fazer isso funcionar!"
      );
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 0.5,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri!);
      onImageSelected(result.assets[0].uri!);
      setShowModal(false);
    }
  };

  return (
    <>
      <S.Container>
        <S.ContainerPhoto onPress={openModal}>
          {imageUri ? <S.Image source={{ uri: imageUri }} /> : <Camera />}
        </S.ContainerPhoto>

        <Spacer height={15} />
      </S.Container>

      <Modal visible={showModal} onRequestClose={() => setShowModal(false)}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleCameraCapture}
          >
            <Text
              variant="PoppinsRegular"
              fontSize={16}
              style={styles.optionButtonText}
            >
              Abrir câmera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleImagePicker}
          >
            <Text
              variant="PoppinsRegular"
              fontSize={16}
              style={styles.optionButtonText}
            >
              Abrir galeria
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => setShowModal(false)}
          >
            <Text
              variant="PoppinsRegular"
              fontSize={16}
              style={styles.cancelButtonText}
            >
              Cancelar
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 200,
    alignSelf: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },

  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  optionButtonText: {
    fontSize: 18,
    color: "blue",
  },
  cancelButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cancelButtonText: {
    fontSize: 18,
    color: "red",
  },
});
