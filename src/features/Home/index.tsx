import React, { useState, useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Modal, StatusBar } from "react-native";

import * as SP from "./styles";

import { mealDTO } from "../../dtos/mealDTO";
import { useMealStorage } from "../../global/hook/meals";
import { HeaderPages } from "../../global/components/HeaderPages";
import { DayWeekSelected } from "../../global/components/DayWeekSelected";
import { MealsItem } from "../../global/components/Meals";
import { AddMealModal } from "../../global/components/AddMealModal/AddMealModal";
import { useAuth } from "../../global/hook/auth";

interface selectDay {
  day: string;
  selected: boolean;
}

export function Home() {
  const navigation = useNavigation();
  const {
    mealDomingo,
    mealSegunda,
    mealTerca,
    mealQuarta,
    mealQuinta,
    mealSexta,
    mealSabado,
    loadStorageMeals,
  } = useMealStorage();

  const [isVisibleModalView, seIsVisibleModalView] = useState(false);

  const { User } = useAuth();

  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const dayWeek = new Date().getDay() + 1;
  const [monthFormat, setMonthFormat] = useState("");
  const [dayWeekFormat, setDayWeekFormat] = useState("");

  const [isSelectDaySegunda, setIsSelectDaySegunda] = useState(false);
  const [isSelectDayTerca, setIsSelectDayTerca] = useState(false);
  const [isSelectDayQuarta, setIsSelectDayQuarta] = useState(false);
  const [isSelectDayQuinta, setIsSelectDayQuinta] = useState(false);
  const [isSelectDaySexta, setIsSelectDaySexta] = useState(false);
  const [isSelectDaySabado, setIsSelectDaySabado] = useState(false);
  const [isSelectDayDomingo, setIsSelectDayDomingo] = useState(false);

  const [dayMealSelect, setDayMealSelect] = useState<mealDTO[]>([]);
  const [mealSelectSave, setMealSelectSave] = useState<mealDTO>();

  useEffect(() => {
    loadStorageMeals();

    switch (month) {
      case 1:
        setMonthFormat("Janeiro");
        break;
      case 2:
        setMonthFormat("Fevereiro");
        break;
      case 3:
        setMonthFormat("Março");
        break;
      case 4:
        setMonthFormat("Abril");
        break;
      case 5:
        setMonthFormat("Maio");
        break;
      case 6:
        setMonthFormat("Junho");
        break;
      case 7:
        setMonthFormat("Julho");
        break;
      case 8:
        setMonthFormat("Agosto");
        break;
      case 9:
        setMonthFormat("Setembro");
        break;
      case 10:
        setMonthFormat("Outubro");
        break;
      case 11:
        setMonthFormat("Novembro");
        break;
      case 12:
        setMonthFormat("Dezembro");
        break;
    }

    switch (dayWeek) {
      case 1:
        setDayWeekFormat("Domingo");
        setIsSelectDayDomingo(true);
        setDayMealSelect(mealDomingo);
        break;
      case 2:
        setDayWeekFormat("Segunda-Feira");
        setIsSelectDaySegunda(true);
        setDayMealSelect(mealSegunda);
        break;
      case 3:
        setDayWeekFormat("Terça-Feira");
        setIsSelectDayTerca(true);
        setDayMealSelect(mealTerca);
        break;
      case 4:
        setDayWeekFormat("Quarta-Feira");
        setIsSelectDayQuarta(true);
        setDayMealSelect(mealQuarta);
        break;
      case 5:
        setDayWeekFormat("Quinta-Feira");
        setIsSelectDayQuinta(true);
        setDayMealSelect(mealQuinta);
        break;
      case 6:
        setDayWeekFormat("Sexta-Feira");
        setIsSelectDaySexta(true);
        setDayMealSelect(mealSexta);
        break;
      case 7:
        setDayWeekFormat("Sábado");
        setIsSelectDaySabado(true);
        setDayMealSelect(mealSabado);
        break;
    }
  }, []);

  function openModalView(item: mealDTO) {
    seIsVisibleModalView(true);
    setMealSelectSave(item);
  }

  function closeModalView() {
    seIsVisibleModalView(false);
  }

  const week = [
    { day: "DOM", selected: isSelectDayDomingo },
    { day: "SEG", selected: isSelectDaySegunda },
    { day: "TER", selected: isSelectDayTerca },
    { day: "QUA", selected: isSelectDayQuarta },
    { day: "QUI", selected: isSelectDayQuinta },
    { day: "SEX", selected: isSelectDaySexta },
    { day: "SAB", selected: isSelectDaySabado },
  ];

  function handleSelectDay(item: selectDay) {
    switch (item.day) {
      case "DOM":
        setIsSelectDayDomingo(true);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealDomingo);
        break;
      case "SEG":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(true);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealSegunda);
        break;
      case "TER":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(true);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealTerca);
        break;
      case "QUA":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(true);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealQuarta);
        break;
      case "QUI":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(true);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealQuinta);
        break;
      case "SEX":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(true);
        setIsSelectDaySabado(false);
        setDayMealSelect(mealSexta);
        break;
      case "SAB":
        setIsSelectDayDomingo(false);
        setIsSelectDaySegunda(false);
        setIsSelectDayTerca(false);
        setIsSelectDayQuarta(false);
        setIsSelectDayQuinta(false);
        setIsSelectDaySexta(false);
        setIsSelectDaySabado(true);
        setDayMealSelect(mealSabado);
        break;
    }
  }

  useEffect(() => {
    isSelectDayDomingo && setDayMealSelect(mealDomingo);
    isSelectDaySegunda && setDayMealSelect(mealSegunda);
    isSelectDayTerca && setDayMealSelect(mealTerca);
    isSelectDayQuarta && setDayMealSelect(mealQuarta);
    isSelectDayQuinta && setDayMealSelect(mealQuinta);
    isSelectDaySexta && setDayMealSelect(mealSexta);
    isSelectDaySabado && setDayMealSelect(mealSabado);
  }, [
    mealDomingo,
    mealSegunda,
    mealTerca,
    mealQuarta,
    mealQuinta,
    mealSexta,
    mealSabado,
  ]);

  return (
    <SP.Container>
      <StatusBar barStyle="light-content" backgroundColor="#003333" />

      <HeaderPages
        isHome
        dayWeekFormat={dayWeekFormat}
        date={date}
        monthFormat={monthFormat}
        handleLogOut={true}
      />

      <SP.Main>
        <SP.ContainerListDaysWeek>
          <SP.ListDaysWeek
            contentContainerStyle={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            data={week}
            keyExtractor={(item) => item.day}
            renderItem={({ item }) => (
              <DayWeekSelected
                data={item}
                onPress={() => handleSelectDay(item)}
              />
            )}
          />
        </SP.ContainerListDaysWeek>

        <SP.ContainerMeals>
          <FlatList
            data={dayMealSelect}
            keyExtractor={(item) => item.meal.meal}
            renderItem={({ item }) => (
              <MealsItem
                data={item.meal}
                onPress={() => openModalView(item)}
                date={item.date}
              />
            )}
          />
        </SP.ContainerMeals>

        {/* <Button onPress={goNewMeal} title="Fazer nova refeição" /> */}
      </SP.Main>

      <Modal visible={isVisibleModalView} transparent>
        <SP.ContainerModalView>
          <AddMealModal
            handleCloseModal={closeModalView}
            dataMeal={mealSelectSave}
          />
        </SP.ContainerModalView>
      </Modal>
    </SP.Container>
  );
}
