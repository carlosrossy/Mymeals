import axios from "axios";

export const API_Key = "67ef36e87a434432ab7f58eccc5d9525";

export async function getSearchRecipes(params) {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apiKey: API_Key,
        ...params,
      },
    }
  );

  return response.data;
}
