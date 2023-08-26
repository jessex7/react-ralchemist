// class Recipe {
//     rid: number;
//     name: string;
//     author: string;
//     cuisine: string;
//     createdAt: Date;
//     ingredients: string;
//     instructions: string;

//     constructor(rid: number, name: string, author: string, cuisine: string, createdAt: Date, ingredients: string, instructions: string) {
//         this.rid = rid;
//         this.name = name;
//         this.author = author;
//         this.cuisine = cuisine;
//         this.createdAt = createdAt;
//         this.ingredients = ingredients;
//         this.instructions = instructions;
//     }
// }

export interface Recipe {
    recipe_id: number;
    name: string;
    author: string;
    cuisine: string;
    createdAt: Date;
    ingredients: Array<Ingredient>; // TODO make this an array of ingredient objects
    instructions: string; // TODO make this an array
    image: string; // TODO make this a URL
    rating: number;
}

export interface Ingredient {
    ingred_name: string;
    amount: number;
    unit: string;
    notes: string;
    group: string;
}

// export async function http<T>(
//     request: RequestInfo
// ): Promise<T> {
//     const response = await fetch(request);
//     const body = await response.json();
//     return body;
// }

export async function getSortedRecipesData(): Promise<Array<Recipe>> {
    const result = await fetch("https://www.ralchemist.com/recipes")
    const recipes: Array<Recipe> = await result.json()
    return recipes;
}
