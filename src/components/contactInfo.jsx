// src/components/ContactSection.jsx

import React from "react";
import { FaLinkedin, FaGithub, FaMedium, FaInstagram } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-zinc-900 dark:text-zinc-300">
      <h2 className="text-3xl font-special-elite-regular text-teal-600 mb-6">
        Get in Touch
      </h2>

      <p className="mb-4 text-lg">
        I’m always open to connecting with other leaders, developers, engineers, and anyone passionate about building great things. Whether you want to talk code, classic cars, or antique typewriters — feel free to reach out!
      </p>

      <div className="mb-6">
        <p className="font-medium">📫 Email:</p>
        <a
          href="mailto:shelby@shelbysolomon.net"
          className="text-teal-600 hover:underline"
        >
          shelby@shelbysolomon.net
        </a>
      </div>

      <div>
        <p className="font-medium mb-2">🌐 Find me online:</p>
        <ul className="flex space-x-6 text-2xl">
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
    </section>
  );
};

export default ContactInfo;

