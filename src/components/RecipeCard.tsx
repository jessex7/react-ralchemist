import Image from "next/image";
import styles from "./RecipeCard.module.css";
import Link from "next/link";
import { Recipe } from "../app/lib/recipes"

export function RecipeCard(recipe: Recipe) {
    if (recipe.image == undefined) {
        recipe.image = "/logo.png";
    }
    return (
        <div className={styles.rcard}>
            {<div className={styles.rcardImage}>
                <Image
                    src={recipe.image}
                    alt={`Picture of ${recipe.name}`}
                    width={50}
                    height={50}
                    priority
                />
            </div>}
            <div className={styles.rcardDetails}>
                <h2 className="text-lg">{recipe.name}</h2>
                <p className="text-sm mb-3">{recipe.author}</p>
                <div className="badge badge-outline badge-sm">{recipe.cuisine}</div>
            </div>
            <div className={styles.rcardAction}>
                <button className="btn btn-primary">
                    <Link href={`/recipes/${recipe.rid}`}>Details</Link>
                </button>
            </div>
        </div>
    )
}
// export function RecipeCard(recipe: { rid: number, name: string, author: string, cuisine: string, image?: string }) {
//     if (recipe.image == undefined) {
//         recipe.image = "/logo.png";
//     }
//     return (
//         <div className={styles.rcard}>
//             {<div className={styles.rcardImage}>
//                 <Image
//                     src={recipe.image}
//                     alt={`Picture of ${recipe.name}`}
//                     width={50}
//                     height={50}
//                     priority
//                 />
//             </div>}
//             <div className={styles.rcardDetails}>
//                 <h2 className="text-lg">{recipe.name}</h2>
//                 <p className="text-sm mb-3">{recipe.author}</p>
//                 <div className="badge badge-outline badge-sm">{recipe.cuisine}</div>
//             </div>
//             <div className={styles.rcardAction}>
//                 <button className="btn btn-primary">
//                     <Link href={`/recipes/${recipe.rid}`}>Details</Link>
//                 </button>
//             </div>
//         </div>
//     )
// }