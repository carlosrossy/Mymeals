import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealDTO } from "../../dtos/mealDTO";

interface InterfaceHourMeals {
  idMeal: string;
  inicio: string;
  termino: string;
}

interface DataOptionsMealSave {
  nameMeal: string;
  ingredients: string;
  selectedDayWeek: string;
  selectedCategoryMeal: string;
}

export interface MealContextData {
  meals: Record<string, mealDTO[]>;
  hourMeal: InterfaceHourMeals[];
  isLoadNewMeal: boolean;
  isLoadHourMeal: boolean;
  saveMeal: (dayOfWeek: string, data: DataOptionsMealSave) => Promise<void>;
  loadMeals: () => Promise<void>;
  saveHourMeals: (data: InterfaceHourMeals[]) => Promise<void>;
  loadHourMeals: () => Promise<void>;
}

interface MealProviderProps {
  children: ReactNode;
}

export const MealContext = createContext({} as MealContextData);

const MEAL_STORAGE_KEY_PREFIX = "@mymeals:meal";
const HOUR_MEALS_STORAGE_KEY = "@mymeals:hourMeals";

export const MealProvider: React.FC<MealProviderProps> = ({ children }) => {
  const [meals, setMeals] = useState<Record<string, mealDTO[]>>({});
  const [hourMeal, setHourMeal] = useState<InterfaceHourMeals[]>([]);
  const [isLoadNewMeal, setIsLoadNewMeal] = useState(true);
  const [isLoadHourMeal, setIsLoadHourMeal] = useState(false);

  useEffect(() => {
    loadMeals();
    loadHourMeals();
  }, []);

  async function saveMeal(dayOfWeek: string, data: DataOptionsMealSave) {
    setIsLoadNewMeal(false);
    const dateCurrent = new Date();
    const storageKey = `${MEAL_STORAGE_KEY_PREFIX}${dayOfWeek}`;

    try {
      const existingData = await AsyncStorage.getItem(storageKey);

      const mealData = {
        id: dayOfWeek,
        meal: {
          meal: data.selectedCategoryMeal,
          title: data.nameMeal,
          ingredientes: data.ingredients,
        },
        date: dateCurrent.toISOString(),
      };

      if (existingData) {
        const existingMeals = JSON.parse(existingData) as mealDTO[];
        const updatedMeals = existingMeals.map((meal) =>
          meal.meal.meal === data.selectedCategoryMeal ? mealData : meal
        );
        await AsyncStorage.setItem(storageKey, JSON.stringify(updatedMeals));
        setMeals({ ...meals, [dayOfWeek]: updatedMeals });
      } else {
        const newMeals = Array(4).fill(mealData);
        await AsyncStorage.setItem(storageKey, JSON.stringify(newMeals));
        setMeals({ ...meals, [dayOfWeek]: newMeals });
      }
    } catch (error) {
      console.error("Erro ao salvar refeição:", error);
    }
    setIsLoadNewMeal(true);
  }

  async function loadMeals() {
    setIsLoadNewMeal(true);
    const daysOfWeek = [
      "Segunda",
      "Terca",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sabado",
      "Domingo",
    ];
    const loadedMeals: Record<string, mealDTO[]> = {};

    for (const day of daysOfWeek) {
      const storageKey = `${MEAL_STORAGE_KEY_PREFIX}${day}`;
      try {
        const data = await AsyncStorage.getItem(storageKey);
        if (data) {
          loadedMeals[day] = JSON.parse(data) as mealDTO[];
        }
      } catch (error) {
        console.error("Erro ao carregar refeições:", error);
      }
    }

    setMeals(loadedMeals);
    setIsLoadNewMeal(false);
  }

  async function saveHourMeals(data: InterfaceHourMeals[]) {
    setHourMeal(data);
    try {
      await AsyncStorage.setItem(HOUR_MEALS_STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao salvar horários das refeições:", error);
    }
  }

  async function loadHourMeals() {
    setIsLoadHourMeal(true);
    try {
      const data = await AsyncStorage.getItem(HOUR_MEALS_STORAGE_KEY);
      if (data) {
        setHourMeal(JSON.parse(data));
      }
    } catch (error) {
      console.error("Erro ao carregar horários das refeições:", error);
    }
    setIsLoadHourMeal(false);
  }

  return (
    <MealContext.Provider
      value={{
        meals,
        hourMeal,
        isLoadNewMeal,
        isLoadHourMeal,
        saveMeal,
        loadMeals,
        saveHourMeals,
        loadHourMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export function useMealStorage() {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error("useMealStorage must be used within a MealProvider");
  }
  return context;
}
