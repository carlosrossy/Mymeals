import axios from "axios";

export const API_Key = "67ef36e87a434432ab7f58eccc5d9525";

export async function getRecipesDetails(recipeId: number) {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${recipeId}/ingredientWidget.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apiKey: API_Key,
      },
    }
  );

  return response.data;
}

// https://api.spoonacular.com/recipes/{id}/analyzedInstructions
