"use client"
import { MyBasicButton, MyCoolButton } from "@/components/MyButton";
// export default async function SettingsPage() {
//     function handleClick() {
//         alert("You clicked me!");
//     }

//     return (
//         <div className="w-3/5">
//             <h1>Settings</h1>
//             <button onClick={handleClick}>Click me</button>
//         </div>

//     )
// }

export default async function SettingsPage() {
    function handleSaveClick() {
        alert(`Saved!`);
    }

    return (
        <>
            <div className="w-3/5">
                <h1>Settings</h1>
                <MyBasicButton>Click me</MyBasicButton>
                <MyCoolButton handler={handleSaveClick}>Save</MyCoolButton>
            </div>
        </>


    )
}
