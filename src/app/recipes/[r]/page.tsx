async function getRecipe(rid: number) {
    console.log("testing")
    const response = await fetch(`https://www.ralchemist.com/recipes/${rid}`)
    return response.json()
}

export default async function Page({ params }: { params: { rid: number } }) {
    const recipe = await getRecipe(params.rid);
    console.log("something happened");

    return <h1 className="text-3xl font-bold underline">Recipe: {recipe.name}</h1>
}