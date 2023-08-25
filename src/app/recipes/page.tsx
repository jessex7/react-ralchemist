import Link from "next/link";
import { RecipeCard } from "@/components/RecipeCard";
import { getSortedRecipesData } from "../lib/recipes";


const recipes = [
    {
        "name": "Korean Beef",
        "rid": 1,
        "cuisine": "korean",
        "author": "Gina",
        "ingredients": ["ground beef", "onion", "soy sauce", "ginger"],
        "matches": "100%",
        "image": "/koreanbeef.png",
    },
    {
        "name": "Pesto Pasta",
        "rid": 2,
        "cuisine": "italian",
        "author": "Joe",
        "ingredients": ["rotini", "basil leaves", "pine nuts", "olive oil", "parmesan"],
        "matches": "70%",
        "image": "/pestopasta.png",
    },
    {
        "name": "Beef Ghoulash",
        "rid": 3,
        "cuisine": "american",
        "author": "Molly",
        "ingredients": ["ground beef", "penne pasta", "tomatoes", "paprika", "parmesan"],
        "matches": "50%",
        "image": "/beefgoulash.png"
    }
]

function RecipeRowWithMatches(recipe: { name: string; author: string; rid: number, matches: string }) {
    return (
        <li className="simple-with-link mb-3 flex" key={recipe.name}>
            <div>
                <Link href={`/recipes/${recipe.rid}`}>{recipe.name}</Link>
                <p className="text-sm text-gray-500">{recipe.author}</p>
            </div>
            <div>
                <p className="text-base text-gray-700">{recipe.matches}</p>
            </div>
        </li>
    )
}

function RecipeRow(recipe: { name: string; author: string; rid: number }) {
    return (
        <li className="simple-with-link mb-3 flex" key={recipe.name}>
            <div>
                <Link href={`/recipes/${recipe.rid}`}>{recipe.name}</Link>
                <p className="text-sm text-gray-500">{recipe.author}</p>
            </div>

        </li>
    )
}


export default async function RecipesMain() {
    const data = await getSortedRecipesData()
    const recipeCards = data.map(recipe =>
        RecipeCard(recipe)
    )
    // const recipeItems = await getSortedRecipesData.map(recipe =>
    //     //RecipeRow({ recipe.name, recipe.author, recipe.matches })
    //     RecipeCard(recipe)
    // )
    return (
        <div className="w-3/5">
            <h1 className="text-4xl mb-4 text-center">Recipes</h1>
            <div className="recipe-cards-container">{recipeCards}</div>
            {/* <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Cuisine</th>
                        <th>Ingredients</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table> */}
        </div>

    )
}


// export default function RecipesMain(recipes: [{ name: string; author: string; matches: number; }]) {
// export default function RecipesMain() {
//     const recipeItems = recipes.map(recipe =>
//         <li className="simple-with-link mb-3 flex" key={recipe.name}>
//             <div>
//                 <a className="text-" href="/">{recipe.name}</a>
//                 <p className="text-sm text-gray-500">{recipe.author}</p>
//             </div>
//             <div>
//                 <p className="text-base text-gray-700">{recipe.matches}</p>
//             </div>
//         </li>
//     )
//     return (
//         <article>
//             <h1>Recipes</h1>
//             <ul className="space-y-4">{recipeItems}</ul>
//         </article>

//     )
// }