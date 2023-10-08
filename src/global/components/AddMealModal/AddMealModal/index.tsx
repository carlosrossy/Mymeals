import React, { useState, useEffect } from "react";
import { ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";

import { Input } from "../Input";

import {
  Container,
  ContainerDelete,
  ButtonDelete,
  IconDelete,
  Form,
  Title,
  NameMeal,
  Ingredients,
  ContainerButton,
} from "./styles";
import { mealDTO } from "../../../../dtos/mealDTO";
import { useMealStorage } from "../../../hook/meals";
import Text from "../../Text";
import { Spacer } from "../../Spacer";
import { ButtonSaveModal } from "../../ButtonSaveModal";

// interface PropsMealSelect {
//     meal: string;
//     title: string;
//     ingredientes: string;
// }

interface Props {
  handleCloseModal: () => void;
  dataMeal: mealDTO;
}

export function AddMealModal({ handleCloseModal, dataMeal }: Props) {
  const { saveStorageMeals } = useMealStorage();

  const [nameMeal, setNameMeal] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [isColorChange, setIsColorChange] = useState(false);
  const [isNameMealEmpty, setIsNameMealEmpty] = useState(false);
  const [isIngredientsEmpty, setIsIngredientsEmpty] = useState(false);

  useEffect(() => {
    setNameMeal(dataMeal?.meal.title);
    setIngredients(dataMeal.meal.ingredientes);
  }, []);

  useEffect(() => {
    if (
      nameMeal != dataMeal.meal.title ||
      ingredients != dataMeal.meal.ingredientes
    ) {
      setIsColorChange(true);
    } else {
      setIsColorChange(false);
    }
  }, [nameMeal, ingredients]);

  function saveMeal() {
    if (nameMeal.trim() === "") {
      setIsNameMealEmpty(true);
    } else {
      setIsNameMealEmpty(false);
    }

    if (ingredients.trim() === "") {
      setIsIngredientsEmpty(true);
    } else {
      setIsIngredientsEmpty(false);
    }

    if (nameMeal.trim() !== "" && ingredients.trim() !== "") {
      const dataSave = {
        nameMeal,
        ingredients,
        selectedDayWeek: dataMeal.id,
        selectedCategoryMeal: dataMeal.meal.meal,
      };

      saveStorageMeals(dataSave);
      handleCloseModal();
    }
  }

  return (
    <Container>
      <ContainerDelete>
        <ButtonDelete onPress={handleCloseModal}>
          <IconDelete name="close" />
        </ButtonDelete>
      </ContainerDelete>
      <Form>
        <Text
          variant="PoppinsMedium"
          color="SECONDARY"
          fontSize={24}
          textAlign="center"
        >
          {dataMeal.meal.meal}
        </Text>
        <Spacer height={12} />

        <Text variant="PoppinsMedium" color="PRIMARY" fontSize={14}>
          Nome da refeição
        </Text>

        <Spacer height={2} />

        <Input
          value={nameMeal}
          onChangeText={setNameMeal}
          error={isNameMealEmpty}
        />

        {isNameMealEmpty && (
          <Text variant="PoppinsRegular" fontSize={10} color="RED">
            O nome da refeição é obrigatório.
          </Text>
        )}

        <Spacer height={32} />

        <Text variant="PoppinsMedium" color="PRIMARY" fontSize={14}>
          Ingredientes
        </Text>

        <Spacer height={2} />

        <Input
          value={ingredients}
          onChangeText={setIngredients}
          error={isIngredientsEmpty}
        />

        {isIngredientsEmpty && (
          <Text variant="PoppinsRegular" fontSize={10} color="RED">
            Os ingredientes são obrigatórios.
          </Text>
        )}

        <ContainerButton>
          <ButtonSaveModal
            title="Salvar refeição"
            onPress={saveMeal}
            isModal={isColorChange}
          />
        </ContainerButton>
      </Form>
    </Container>
  );
}
