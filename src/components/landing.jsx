import React from "react"
import logo from "../images/typewriter.svg"

const Landing = () => {
    return ( 
        <div class="min-h-screen flex flex-col items-center justify-center flex-1 px-20 text-center space-y-4 rtl:space-y-reverse">
            <h1 class="text-6xl font-special-elite-regular text-teal-600">Shelby Solomon</h1>
            <p class="text-2xl font-special-elite-regular text-zinc-500 dark:text-zinc-400">Engineering Leadership. Cloud Software. Typewriter Enthusiast. Ford Model A Owner.</p>
            <img src={logo} class="w-96 h-auto" alt="Shelby Solomon" />
        </div>
    )
}

export default Landing