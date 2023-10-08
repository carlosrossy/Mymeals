export interface mealDTO {
    id: string;
    meal: {
        meal: string;
        title: string;
        ingredientes: string;
    }
    date?: string;
}