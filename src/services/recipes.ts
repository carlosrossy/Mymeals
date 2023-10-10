import axios from "axios";

// export const API_Key = "67ef36e87a434432ab7f58eccc5d9525";
// export const API_Key = "98898caecf0c44f5bfcad30faed8db57";
export const API_Key = "d0a2ee926b9a4d68b2599201f4fbda9e";


interface SearchRecipesParams {
  number?: number;
  offset?: number;
  query?: string;
}

export async function getSearchRecipes(params: SearchRecipesParams) {
  const { number, offset, query } = params;

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        apiKey: API_Key,
        number,
        offset,
        query,
      },
    }
  );

  return response.data;
}
