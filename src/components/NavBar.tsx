import Link from "next/link";
import navbar from "daisyui";
import menu from "daisyui";
import Image from "next/image";


export function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start pl-8">
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Ralchemist logo"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
                <p className="pl-4 text-2xl font-serif italic">Ralchemist</p>
            </div>
            <div className="navbar-end">
                <ul className="menu rounded-box menu-horizontal">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/recipes">Recipes</Link></li>
                    <li><Link href="/grocery">Grocery</Link></li>
                    <li><Link href="/settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    )
}