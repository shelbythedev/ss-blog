// src/components/ContactForm.jsx

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm =() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-2xl font-special-elite-regular text-teal-600 dark:text-teal-500">
        Contact Me
      </h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your name"
        className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Your email"
        className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Your message"
        rows={5}
        className="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      ></textarea>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 dark:text-green-400">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}

export default ContactForm