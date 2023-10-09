import React, { useState, useEffect } from "react";
import { Keyboard, Alert, ActivityIndicator, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";

import * as S from "./styles";

import AvisoSvg from "../../assets/icons/aviso.svg";
import { HeaderPages } from "../../global/components/HeaderPages";
import Text from "../../global/components/Text";
import { Spacer } from "../../global/components/Spacer";

interface Item {
  id: number;
  title: string;
  done: boolean;
}

export function ShoppingList() {
  const navigation = useNavigation();
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  async function handleAddItem(newItemTitle: string) {
    if (newItemTitle !== "") {
      const data = {
        id: new Date().getTime(),
        title: newItemTitle,
        done: false,
      };

      const storageData = [...items, data];

      setItems(storageData);
      await AsyncStorage.setItem(
        "@mymeals:ShoppingList",
        JSON.stringify(storageData)
      );
    } else {
      // Alert.alert('O item não pode ser vazio');
      showMessage({
        message: "",
        description: "O item não pode ser vazio",
        type: "danger",
        textStyle: {
          textAlign: "center",
        },
      });
    }

    Keyboard.dismiss();
  }

  async function handleMarkItemAsDone(id: number) {
    let alter = [...items];

    items.map((alterItems, index) => {
      if (alterItems.id === id) {
        alter[index].done = !alterItems.done;
      }
    });

    setItems(alter);

    await AsyncStorage.setItem("@mymeals:ShoppingList", JSON.stringify(alter));
    alter = [];
  }

  async function handleCleanListItems() {
    await AsyncStorage.removeItem("@mymeals:ShoppingList");
    setItems([]);
  }

  async function handleRemoveItem(id: number) {
    const removeItem = items.filter((item) => item.id !== id);

    setItems(removeItem);
    await AsyncStorage.setItem(
      "@mymeals:ShoppingList",
      JSON.stringify(removeItem)
    );
  }

  async function loadStorageData() {
    const storage = await AsyncStorage.getItem("@mymeals:ShoppingList");

    if (storage) {
      const data = JSON.parse(storage);

      setItems(data);
    }
    setLoading(false);
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages title="Lista de compras" />
      <S.ContainerSecondary>
        <S.Header>
          <Text variant="PoppinsSemiBold" color="TITLE" fontSize={24}>
            Meus itens
          </Text>

          {items.length > 4 && (
            <S.ButtonClean onPress={handleCleanListItems}>
              <Text variant="PoppinsSemiBold" color="WHITE" fontSize={11}>
                Limpar lista
              </Text>
            </S.ButtonClean>
          )}
        </S.Header>

        {keyboardStatus === false && items.length === 0 && (
          <S.ContainerAviso>
            <AvisoSvg width={111} height={72} />
            <Spacer height={20} />
            <Text
              variant="PoppinsRegular"
              color="RED"
              fontSize={17}
              textAlign="center"
            >
              Limpar lista
            </Text>
            Ops, você ainda não adicionou {"\n"}
            itens a sua lista de compras!
          </S.ContainerAviso>
        )}

        {/* {loading ? (
          <ActivityIndicator size="large" color={theme.colors.RED} />
        ) : (
          <MyItemList
            items={items}
            onPress={handleMarkItemAsDone}
            onRemove={handleRemoveItem}
          />
        )}

        <S.ViewInput>
          <InputPurchases addItem={handleAddItem} />
        </S.ViewInput> */}
      </S.ContainerSecondary>
    </S.Container>
  );
}
