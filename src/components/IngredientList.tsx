"use client"
import { useState } from "react";
import { Ingredient } from "@/app/lib/recipes";
import styles from "./IngredientList.module.css";

export function IngredientList(params: { ingredients: Array<Ingredient>, editable: boolean }) {
    const ingredientItems = params.ingredients.map(i =>
        <IngredientItem ingredient={i} editable={params.editable} />
    )
    return (
        <>
            <p className="text-lg italic font-bold">-- Ingredients --</p>
            <ul className="">{ingredientItems}</ul>
        </>
    )
}

export function IngredientItem(params: { ingredient: Ingredient, editable: boolean, onClick?: React.MouseEventHandler }) {
    const i = params.ingredient;

    // function handleClick() {
    //     setEditable(!editable)
    // }
    return (
        <li key={`${i.ingred_name}_${i.group}}`} className="ilist">
            <div className={styles.ingredientItem}>
                <input type="text" className={styles.ingredientAmount} value={i.amount} disabled={params.editable}></input>
                <input type="text" className={styles.ingredientUnit} value={i.unit} disabled={params.editable}></input>
                <input type="text" className={styles.ingredientName} value={i.ingred_name} disabled={params.editable}></input>
                <input type="text" className={styles.ingredientNotes} value={i.notes} disabled={params.editable}></input>
            </div>
        </li>

    )
}