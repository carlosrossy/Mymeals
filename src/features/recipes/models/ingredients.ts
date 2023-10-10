export interface IIngredient {
  name: string;
  image: string;
  amount: {
    metric: {
      value: number;
      unit: string;
    };
    us: {
      value: number;
      unit: string;
    };
  };
}

export interface IRecipeDetailsResponse {
  ingredients: IIngredient[];
}
