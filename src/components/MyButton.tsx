"use client"

export function MyBasicButton(params: { children: React.ReactNode }) {
    function handleClick() {
        console.log("You clicked me!")
        alert("You clicked me!");
    }
    return (
        <button type="button" onClick={handleClick} className="btn btn-outline btn-primary btn-sm">
            {params.children}
        </button>
    )
}

export function MyCoolButton(params: { handler: React.MouseEventHandler, children: React.ReactNode }) {

    return (
        <button type="button" onClick={params.handler} className="btn btn-outline btn-primary btn-sm">
            {params.children}
        </button>
    )
}