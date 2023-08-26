import { Ingredient } from "@/app/lib/recipes"

export function IngredientList(params: { ingredients: Array<Ingredient> }) {
    const ingredientItems = params.ingredients.map(i =>
        <li>{i.amount} {i.unit} {i.ingred_name}</li>
    )
    return (
        <div>
            <p className="text-lg italic">-- Ingredients --</p>
            <ul className="list-disc list-inside">{ingredientItems}</ul>
        </div>
    )
}