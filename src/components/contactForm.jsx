import React, { useState } from "react";

const ContactForm =() => {
  return (
    <form
      class="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg space-y-4"
      netlify
    >
      <h2 class="text-2xl font-special-elite-regular text-teal-600 dark:text-teal-500">
        Contact Me
      </h2>

      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <input
        type="email"
        name="email"
        required
        placeholder="Your email"
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <textarea
        name="message"
        required
        placeholder="Your message"
        rows={5}
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      ></textarea>

      <button
        type="submit"
        class="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
      >
      </button>
    </form>
  );
}

export default ContactForm