async function getRecipe(rid: string) {
    console.log("testing")
    console.log(rid)
    const serverURL = `https://www.ralchemist.com/recipes/${rid}`
    const response = await fetch(`https://www.ralchemist.com/recipes/${rid}`)
    return response.json()
}

export default async function Page({ params }: { params: { r: string } }) {
    console.log(params)
    const recipe = await getRecipe(params.r);
    console.log("something happened");

    return <h1 className="text-3xl font-bold underline">Recipe: {recipe.name}</h1>
}