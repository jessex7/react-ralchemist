import Image from "next/image";
import { Recipe } from "@/app/lib/recipes";
import { IngredientList } from "@/components/IngredientList";


async function getRecipe(rid: string): Promise<Recipe> {
    console.log("testing");
    console.log(rid);
    const serverURL = `https://www.ralchemist.com/recipes/${rid}`;
    const response = await fetch(`https://www.ralchemist.com/recipes/${rid}`);
    const jsonData = response.json();
    console.log(jsonData);
    return jsonData
}

export default async function Page({ params }: { params: { r: string } }) {
    console.log(params)
    const recipe = await getRecipe(params.r);
    console.log("something happened");
    if (recipe.image == undefined) {
        recipe.image = "/logo.png";
    }


    return (
        <div className="recipe-page container flex justify-center">
            <div className="w-3/5 border rounded-md border-secondary p-10">
                <h1 className="text-3xl font-bold text-center mb-3">{recipe.name}</h1>
                <div className="flex align-center justify-center">
                    <Image className=""
                        src={recipe.image}
                        alt={`Picture of ${recipe.name}`}
                        width={50}
                        height={50}
                        priority
                    />
                </div>
                <section>
                    <p className="mb-1">{recipe.author}</p>
                    {/* <p className="font-medium">Rating:</p> */}
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" checked />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                        <input type="radio" name="rating-1" className="mask mask-star" />
                    </div>
                    <p className="">{recipe.rating}</p>
                </section>
                {/* <p className="font-medium">Author:</p> */}


                <div className="divider"></div>
                <IngredientList ingredients={recipe.ingredients} />
                <div className="divider"></div>
                <p className="text-lg italic">-- Instructions --</p>
                <p>{recipe.instructions}</p>
            </div>

        </div>
    )
}