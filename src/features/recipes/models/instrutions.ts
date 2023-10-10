export interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Step {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
  length?: {
    number: number;
    unit: string;
  };
}

export interface Recipe {
  name: string;
  steps: Step[];
}

export interface InstructionsData {
    name: string;
    steps: Array<{
      number: number;
      step: string;
      length?: {
        number: number;
        unit: string;
      };
    }>;
  }