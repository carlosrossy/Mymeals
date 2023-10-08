import React, { useEffect, useState } from "react";
import { Container, ContainerSecondaryMeal, ContainerMeals } from "./styles";
import { useMealStorage } from "../../hook/meals";
import Text from "../Text";
import { verticalScale } from "../../../utils/scale";
import { TouchableOpacity } from "react-native";

interface Props {
  data: {
    meal: string;
    title: string;
    ingredientes: string;
  };
  date?: string;
  onPress?: () => void;
}

export function MealsItem({
  data: { meal, title, ingredientes },
  ...rest
}: Props) {
  const { hourMeal } = useMealStorage();
  const [isBorder, setIsBorder] = useState(false);

  useEffect(() => {
    const dateCurrent = new Date();
    const houCurrent = new Date(
      `April 04 2021 ${dateCurrent.getHours()}:${dateCurrent.getMinutes()}:00`
    );

    const matchingMeal = hourMeal.find((item) => item.idMeal === meal);

    if (matchingMeal) {
      const hourStart = new Date(`April 04 2021 ${matchingMeal.inicio}:00`);
      const hourEnd = new Date(`April 04 2021 ${matchingMeal.termino}:00`);

      setIsBorder(
        houCurrent.getTime() >= hourStart.getTime() &&
          houCurrent.getTime() <= hourEnd.getTime()
      );
    }
  }, [hourMeal, meal]);

  return (
    <Container>
      <Text
        variant="PoppinsRegular"
        color="TITLE"
        fontSize={12}
        width={verticalScale(55)}
      >
        {meal}
      </Text>

      <TouchableOpacity
        {...rest}
        style={{
          width: "85%",
        }}
      >
        <ContainerSecondaryMeal selected={isBorder}>
          {meal === "" || title === "" || ingredientes === "" ? (
            <Text variant="PoppinsRegular" color="TEXT" fontSize={12}>
              Clique para adicionar!
            </Text>
          ) : (
            <>
              <Text
                variant="PoppinsMedium"
                color="TITLE"
                marginRight="md"
                fontSize={14}
              >
                {title}
              </Text>

              <Text
                variant="PoppinsMedium"
                color="TEXT"
                marginRight="md"
                fontSize={12}
              >
                {ingredientes}
              </Text>
            </>
          )}
        </ContainerSecondaryMeal>
      </TouchableOpacity>
    </Container>
  );
}
