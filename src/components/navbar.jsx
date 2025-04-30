import React, { useState, useEffect } from "react";
import logo2 from "../images/typewriter2.svg";
import { Link, useStaticQuery, graphql } from "gatsby";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost {
                distinct(field: {tags: {category: SELECT}})
            }
        }
    `);

    const tags = data.allContentfulBlogPost.distinct;

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-zinc-50 border-zinc-200 dark:bg-zinc-800">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo2} className="h-8 rounded-lg" alt="Shelby Solomon" />
                        <span className="self-center text-2xl font-special-elite-regular whitespace-nowrap text-zinc-900 dark:text-white">
                            Shelby Solomon
                        </span>
                    </div>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-600 dark:focus:ring-zinc-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-special-elite-regular flex flex-col p-4 md:p-0 mt-4 border border-zinc-100 rounded-lg bg-zinc-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-zinc-600 md:dark:bg-zinc-800 dark:border-zinc-600">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about/"
                                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </Link>
                        </li>
                        <li
                            className="relative dropdown-container"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                        >
                            <Link
                                to="/blog/"
                                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Blog
                            </Link>
                            {/* Dropdown */}
                            {isDropdownOpen && (
                                <ul className="absolute flex flex-col bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-600 rounded-md mt-2 py-2 w-48 z-10">
                                    {tags.map((tag, index) => (
                                        <li key={index}>
                                            <Link
                                                to={`/blog/?tag=${tag}`}
                                                className="block px-4 py-2 text-zinc-900 hover:bg-zinc-100 dark:text-white dark:hover:bg-zinc-800"
                                            >
                                                {tag}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link
                                to="/contact/"
                                className="block py-2 px-3 text-zinc-900 rounded-sm hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 dark:text-white md:dark:hover:text-teal-300 dark:hover:bg-zinc-600 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;