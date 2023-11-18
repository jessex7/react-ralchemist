"use client"
import Image from "next/image";
import { Recipe } from "@/app/lib/recipes";
import { IngredientList } from "@/components/IngredientList";
import { MyBasicButton } from "@/components/MyButton";

import { useState } from "react";
import { ReactNode } from "react";


async function getRecipe(rid: string): Promise<Recipe> {
    console.log("testing");
    const serverURL = `https://www.ralchemist.com/recipes/${rid}`;
    const response = await fetch(serverURL);
    const jsonData = response.json();
    console.log(jsonData);
    return jsonData
}

export default async function Page({ params }: { params: { r: string } }) {
    const [editable, setEditable] = useState(false);

    console.log(params.r)
    const recipe = await getRecipe(params.r);
    console.log(recipe);
    console.log("something happened");
    if (recipe.image == undefined) {
        recipe.image = "/logo.png";
    }


    return (
        // <MyButton>Click</MyButton>
        <div className="recipe-page container flex justify-center">
            <div className="w-3/5 border rounded-md border-secondary p-10">
                <p>{`${editable}`}</p>
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
                    <p className="mb-2">{recipe.author}</p>
                    {/* <p className="font-medium">Rating:</p> */}
                    <div className="flex gap-x-2">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <div className="flex-grow"></div>
                        <MyBasicButton>Edit</MyBasicButton>
                        <MyBasicButton>Save</MyBasicButton>
                        {/* <button onClick={handleClick} className="btn btn-outline btn-primary btn-sm">Edit</button>
                        <button className="btn btn-outline btn-primary btn-sm">Save</button> */}
                    </div>

                </section>
                <div className="divider"></div>
                <IngredientList ingredients={recipe.ingredients} editable={editable} />
                <div className="divider"></div>
                <p className="text-lg italic font-bold">-- Instructions --</p>
                <p>{recipe.instructions}</p>
            </div>

        </div>
    )
}

