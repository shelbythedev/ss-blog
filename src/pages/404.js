import * as React from "react"
import Navbar from "../components/navbar"

const NotFoundPage = () => {
  return (
    <main class="min-h-screen bg-white dark:bg-zinc-900 flex flex-col">
        <Navbar />
        <title class="text-4xl font-special-elite-regular text-teal-600">404: Not Found</title>
        <p class="text-lg text-zinc-900 dark:text-zinc-400">Sorry, the page you are looking for does not exist.</p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
