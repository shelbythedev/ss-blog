import React, { useState } from "react";

const ContactForm =() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status] = useState("idle");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlendocded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <form
      class="max-w-xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg space-y-4"
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <h2 class="text-2xl font-special-elite-regular text-teal-600 dark:text-teal-500">
        Contact Me
      </h2>

      <input type="hidden" name="form-name" value="contact" onChange={handleChange} />

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        placeholder="Your name"
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        placeholder="Your email"
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        placeholder="Your message"
        rows={5}
        class="w-full p-3 border border-zinc-300 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
      ></textarea>

      <button
        type="submit"
        disabled={status === "sending"}
        class="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition"
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