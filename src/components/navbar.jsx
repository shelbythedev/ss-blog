import React from "react"
import logo2 from "../images/typewriter2.svg"
import { Link } from "gatsby"

const Navbar = () => {
    return ( 
        <nav class="bg-zinc-50 border-zinc-200 dark:bg-zinc-800">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <div class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo2} class="h-8 rounded-lg" alt="Shelby Solomon" />
                    <span class="self-center text-2xl font-special-elite-regular whitespace-nowrap text-zinc-900 dark:text-white">Shelby Solomon</span>
                    </div>
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-600 dark:focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-special-elite-regular flex flex-col p-4 md:p-0 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-600 md:dark:bg-zinc-800 dark:border-zinc-600">
                    <li>
                    <Link to="/" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Home</Link>
                    </li>
                    <li>
                    <Link to="/about/" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
                    </li>
                    {/* <li>
                    <a href="#" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Leadership</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Engineering</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Typewriters</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Ford Model A</a>
                    </li> */}
                    <li>
                    <Link to="/contact/" class="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
)
}

export default Navbar