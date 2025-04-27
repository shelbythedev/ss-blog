import React from "react"
import { Link } from "gatsby"
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer
        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 text-sm mt-16"
        role="contentinfo"
        itemScope
        itemType="http://schema.org/WPFooter"
        >
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
                {/* Site Info */}
                <div>
                    <h2 className="text-teal-600 font-bold text-lg font-special-elite-regular">
                        Shelby Solomon
                    </h2>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                        Engineering Leadership. Cloud Software. Typewriter Enthusiast. Ford Model A Owner.
                    </p>
                </div>

                {/* Navigation */}
                <nav aria-label="Footer Navigation">
                    <ul className="space-y-2">
                        <li>
                            <Link
                                to="/about"
                                className="hover:text-teal-600 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="hover:text-teal-600 transition-colors"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Social or Contact */}
                <div>
                    <p className="mb-2 font-semibold text-teal-600">Let’s Connect</p>
                    <ul className="flex space-x-4  text-2xl">
                        <li>
                            <a
                            href="https://www.linkedin.com/in/ssolomondev/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-teal-600 transition-colors"
                            >
                            <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://github.com/shelbythedev"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="hover:text-teal-600 transition-colors"
                            >
                            <FaGithub />
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://www.instagram.com/in.pursuit.of.patina/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="hover:text-teal-600 transition-colors"
                            >
                            <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                            href="https://shelbysolomon.medium.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Medium"
                            className="hover:text-teal-600 transition-colors"
                            >
                            <FaMedium />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-zinc-300 dark:border-zinc-700 text-center py-4">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Shelby Solomon. All rights reserved.
                </p>
            </div>
        </footer>
  );
}

export default Footer