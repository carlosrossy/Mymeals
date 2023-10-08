import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealDTO } from "../../dtos/mealDTO";

// interface TimeMealProps {
//     id: string;
//     meal: {
//         meal: string;
//         title: string;
//         ingredientes: string;
//     }
// }

interface InterfaceHourMeals {
  idMeal: string;
  inicio: string;
  termino: string;
}

interface dataOptionsMealSave {
  nameMeal: string;
  ingredients: string;
  selectedDayWeek: string;
  selectedCategoryMeal: string;
}

type MealContextData = {
  mealSegunda: mealDTO[];
  mealTerca: mealDTO[];
  mealQuarta: mealDTO[];
  mealQuinta: mealDTO[];
  mealSexta: mealDTO[];
  mealSabado: mealDTO[];
  mealDomingo: mealDTO[];

  saveStorageMeals: (item: any) => Promise<void>;
  loadStorageMeals: () => Promise<void>;
  saveSettingsHourMeals: (item: InterfaceHourMeals[]) => Promise<void>;
  hourMeal: InterfaceHourMeals[];
  loadStorageHourMeal: () => Promise<void>;

  isLoadNewMeal: boolean;
  isLoadHourMeal: boolean;
};

type PostProviderProps = {
  children: ReactNode;
};

export const MealContext = createContext({} as MealContextData);

function MealProvider({ children }: PostProviderProps) {
  const [mealSegunda, setMealSegunda] = useState<mealDTO[]>([]);
  const [mealTerca, setMealTerca] = useState<mealDTO[]>([]);
  const [mealQuarta, setMealQuarta] = useState<mealDTO[]>([]);
  const [mealQuinta, setMealQuinta] = useState<mealDTO[]>([]);
  const [mealSexta, setMealSexta] = useState<mealDTO[]>([]);
  const [mealSabado, setMealSabado] = useState<mealDTO[]>([]);
  const [mealDomingo, setMealDomingo] = useState<mealDTO[]>([]);

  const [hourMeal, setHourMeal] = useState<InterfaceHourMeals[]>([]);
  const [isLoadNewMeal, isSetLoadNewMeal] = useState(true);

  const [isLoadStorageMeals, isSetLoadStorageMeals] = useState(true);
  const [isLoadHourMeal, setIsLoadHourMeal] = useState(false);

  const CHAVE_STORAGE_MEAL_SEGUNDA = "@mymeals:mealSegunda";
  const CHAVE_STORAGE_MEAL_TERCA = "@mymeals:mealTerca";
  const CHAVE_STORAGE_MEAL_QUARTA = "@mymeals:mealQuarta";
  const CHAVE_STORAGE_MEAL_QUINTA = "@mymeals:mealQuinta";
  const CHAVE_STORAGE_MEAL_SEXTA = "@mymeals:mealSexta";
  const CHAVE_STORAGE_MEAL_SABADO = "@mymeals:mealSabado";
  const CHAVE_STORAGE_MEAL_DOMINGO = "@mymeals:mealDomingo";
  const CHAVE_STORAGE_HOUR_MEAL = "@mymeals:hourMeals";

  useEffect(() => {
    loadStorageMeals();
    if (mealSegunda.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Segunda-feira",

          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealSegunda[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealTerca.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Terça-feira",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealTerca[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealQuarta.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Quarta-feira",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealQuarta[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealQuinta.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Quinta-feira",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealQuinta[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealSexta.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Sexta-feira",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealSexta[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealSabado.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Sábado",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealSabado[index] = dataInitialMeal;
        index++;
      }
    }

    if (mealDomingo.length === 0) {
      let idMeal = "";
      let index = 0;
      while (index < 4) {
        if (index === 0) {
          idMeal = "Café";
        }
        if (index === 1) {
          idMeal = "Almoço";
        }
        if (index === 2) {
          idMeal = "Merenda da tarde";
        }
        if (index === 3) {
          idMeal = "Janta";
        }

        const dataInitialMeal = {
          id: "Domingo",
          meal: {
            meal: idMeal,
            title: "",
            ingredientes: "",
          },
          date: "",
        };
        mealDomingo[index] = dataInitialMeal;
        index++;
      }
    }
  }, []);

  async function saveStorageMeals(item: dataOptionsMealSave) {
    const dateCurrent = new Date();
    console.log("Data: " + dateCurrent);
    isSetLoadNewMeal(false);
    const data = {
      id: item.selectedDayWeek,
      meal: {
        meal: item.selectedCategoryMeal,
        title: item.nameMeal,
        ingredientes: item.ingredients,
      },
      date: `${dateCurrent}`,
    };

    if (item.selectedDayWeek === "Segunda-feira") {
      // let verification = false

      mealSegunda.map((itemMeal, index) => {
        const alter = [...mealSegunda];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealSegunda(alter);
          AsyncStorage.setItem(
            CHAVE_STORAGE_MEAL_SEGUNDA,
            JSON.stringify(alter)
          );
          // verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealSegunda,
      //         data
      //     ]
      //     setMealSegunda(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_SEGUNDA, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Terça-feira") {
      // let verification = false

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealTerca];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealTerca(alter);
          AsyncStorage.setItem(CHAVE_STORAGE_MEAL_TERCA, JSON.stringify(alter));
          //verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealTerca,
      //         data
      //     ]
      //     setMealTerca(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_TERCA, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Quarta-feira") {
      //let verification = false;

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealQuarta];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealQuarta(alter);
          AsyncStorage.setItem(
            CHAVE_STORAGE_MEAL_QUARTA,
            JSON.stringify(alter)
          );
          //verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealQuarta,
      //         data
      //     ]
      //     setMealQuarta(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_QUARTA, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Quinta-feira") {
      //let verification = false;

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealQuinta];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealQuinta(alter);
          AsyncStorage.setItem(
            CHAVE_STORAGE_MEAL_QUINTA,
            JSON.stringify(alter)
          );
          // verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealQuinta,
      //         data
      //     ]
      //     setMealQuinta(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_QUINTA, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Sexta-feira") {
      // let verification = false;

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealSexta];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealSexta(alter);
          AsyncStorage.setItem(CHAVE_STORAGE_MEAL_SEXTA, JSON.stringify(alter));
          //verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealSexta,
      //         data
      //     ]
      //     setMealSexta(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_SEXTA, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Sábado") {
      // let verification = false;

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealSabado];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealSabado(alter);
          AsyncStorage.setItem(
            CHAVE_STORAGE_MEAL_SABADO,
            JSON.stringify(alter)
          );
          // verification = true;
        }
      });

      // if(verification === false){
      //     const storageMeal = [
      //         ...mealSabado,
      //         data
      //     ]
      //     setMealSabado(storageMeal);
      //     AsyncStorage.setItem(CHAVE_STORAGE_MEAL_SABADO, JSON.stringify(storageMeal));
      // }
    }

    if (item.selectedDayWeek === "Domingo") {
      // let verification = false;

      mealTerca.map((itemMeal, index) => {
        const alter = [...mealDomingo];
        if (itemMeal.meal.meal === item.selectedCategoryMeal) {
          alter[index] = data;
          setMealDomingo(alter);
          AsyncStorage.setItem(
            CHAVE_STORAGE_MEAL_DOMINGO,
            JSON.stringify(alter)
          );
          // verification = true;
        }
      });

      //     if(verification === false){
      //         const storageMeal = [
      //             ...mealDomingo,
      //             data
      //         ]
      //         setMealDomingo(storageMeal);
      //         AsyncStorage.setItem(CHAVE_STORAGE_MEAL_DOMINGO, JSON.stringify(storageMeal));
      //     }
    }

    isSetLoadNewMeal(true);
  }

  async function loadStorageMeals() {
    const storageSegunda = await AsyncStorage.getItem(
      CHAVE_STORAGE_MEAL_SEGUNDA
    );
    const storageTerca = await AsyncStorage.getItem(CHAVE_STORAGE_MEAL_TERCA);
    const storageQuarta = await AsyncStorage.getItem(CHAVE_STORAGE_MEAL_QUARTA);
    const storageQuinta = await AsyncStorage.getItem(CHAVE_STORAGE_MEAL_QUINTA);
    const storageSexta = await AsyncStorage.getItem(CHAVE_STORAGE_MEAL_SEXTA);
    const storageSabado = await AsyncStorage.getItem(CHAVE_STORAGE_MEAL_SABADO);
    const storageDomingo = await AsyncStorage.getItem(
      CHAVE_STORAGE_MEAL_DOMINGO
    );

    if (storageSegunda) {
      const data = await JSON.parse(storageSegunda);
      setMealSegunda(data);
    }

    if (storageTerca) {
      const data = await JSON.parse(storageTerca);
      setMealTerca(data);
    }

    if (storageQuarta) {
      const data = await JSON.parse(storageQuarta);
      setMealQuarta(data);
    }

    if (storageQuinta) {
      const data = await JSON.parse(storageQuinta);
      setMealQuinta(data);
    }

    if (storageSexta) {
      const data = await JSON.parse(storageSexta);
      setMealSexta(data);
    }

    if (storageSabado) {
      const data = await JSON.parse(storageSabado);
      setMealSabado(data);
    }

    if (storageDomingo) {
      const data = await JSON.parse(storageDomingo);
      setMealDomingo(data);
    }

    loadStorageHourMeal();

    isSetLoadStorageMeals(false);
  }

  async function saveSettingsHourMeals(data: InterfaceHourMeals[]) {
    setHourMeal(data);
    await AsyncStorage.setItem(CHAVE_STORAGE_HOUR_MEAL, JSON.stringify(data));
  }

  async function loadStorageHourMeal() {
    setIsLoadHourMeal(true);
    const storageHour = await AsyncStorage.getItem(CHAVE_STORAGE_HOUR_MEAL);

    if (storageHour) {
      const data = await JSON.parse(storageHour);
      setHourMeal(data);
    }

    setIsLoadHourMeal(false);
  }

  return (
    <MealContext.Provider
      value={{
        mealSegunda,
        mealTerca,
        mealQuarta,
        mealQuinta,
        mealSexta,
        mealSabado,
        mealDomingo,

        saveStorageMeals,
        loadStorageMeals,
        saveSettingsHourMeals,

        hourMeal,
        loadStorageHourMeal,

        isLoadNewMeal,
        isLoadHourMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

function useMealStorage() {
  const context = useContext(MealContext);

  return context;
}

export { MealProvider, useMealStorage };
