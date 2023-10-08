import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Modal, StatusBar, View } from "react-native";

import * as S from "./styles";

import { mealDTO } from "../../dtos/mealDTO";
import { useMealStorage } from "../../global/hook/meals";
import { HeaderPages } from "../../global/components/HeaderPages";
import { DayWeekSelected } from "../../global/components/DayWeekSelected";

export function Home() {
  const navigation = useNavigation();
  const { meals, loadMeals } = useMealStorage();

  const [isVisibleModalView, setIsVisibleModalView] = useState(false);

  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const dayWeek = new Date().getDay() + 1;
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const dayOfWeekNames = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const [selectedDay, setSelectedDay] = useState(dayWeek);
  const [dayMealSelect, setDayMealSelect] = useState<mealDTO[]>([]);
  const [mealSelectSave, setMealSelectSave] = useState<mealDTO | undefined>(
    undefined
  );

  useEffect(() => {
    loadMeals();
    setSelectedDay(dayWeek);
  }, []);

  useEffect(() => {
    // Verifique se o índice selecionado não está fora dos limites do array meals
    if (selectedDay >= 1 && selectedDay <= dayOfWeekNames.length) {
      const selectedDayName = dayOfWeekNames[selectedDay - 1];
      setDayMealSelect(meals[selectedDayName] || []);
    }
  }, [meals, selectedDay]);

  function openModalView(item: mealDTO) {
    setIsVisibleModalView(true);
    setMealSelectSave(item);
  }

  function closeModalView() {
    setIsVisibleModalView(false);
  }

  useEffect(() => {
    console.log("Meals from hook:", meals);
  }, [meals]);

  const renderDayButton = (dayName: string, index: number) => (
    <View
      style={{
        flex: 1,
        marginRight: index < dayOfWeekNames.length - 1 ? 28 : 0,
      }}
      key={dayName}
    >
      <DayWeekSelected
        data={{
          day: dayName.substring(0, 3).toUpperCase(),
          selected: selectedDay === index + 1,
        }}
        onPress={() => setSelectedDay(index + 1)}
        key={dayName}
      />
    </View>
  );

  return (
    <S.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages
        isHome
        dayWeekFormat={dayOfWeekNames[selectedDay - 1]}
        date={date}
        monthFormat={monthNames[month - 1]}
        // handleAbout={handleAbout}
      />

      <S.Main>
        <S.ContainerListDaysWeek>
          <FlatList
            data={dayOfWeekNames}
            keyExtractor={(day, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => renderDayButton(item, index)}
          />
        </S.ContainerListDaysWeek>
      </S.Main>
    </S.Container>
  );
}
