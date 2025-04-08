import * as React from "react"

import Navbar from "../components/navbar"
import Landing from "../components/landing"
import Sections from "../components/sections"
import Footer from "../components/footer"

const IndexPage = () => {
    return ( 
        <main class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
            <Navbar />
            <Landing />
            <Sections />
            <Footer />
        </main>
    )
}

export default IndexPage

export const Head = () => <title> Shelby Solomon - Engineering Leadership. Cloud Software. Typewriter Enthusiast. Ford Model A Owner. </title>