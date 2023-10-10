import axios from "axios";

// export const API_Key = "67ef36e87a434432ab7f58eccc5d9525";
// export const API_Key = "98898caecf0c44f5bfcad30faed8db57";
export const API_Key = "d0a2ee926b9a4d68b2599201f4fbda9e";

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
