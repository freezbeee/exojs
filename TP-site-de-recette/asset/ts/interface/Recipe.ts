export default interface Recipe {
    id?: string;
    name: string;
    servings: string;
    prepTime: string;
    cookTime: string;
    ingredients: {
      name: string;
      amount: string;
    }[];
    instructions: string[];
  }