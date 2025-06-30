import React from 'react'
import { SectionWrapper } from '../hoc'

import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaKaggle } from "react-icons/fa";
import { SiLeetcode, SiHackerrank, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black-100 text-white p-6 rounded-[20px]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-semibold">Contact Me</h4>
          <p className="mt-2 text-secondary">
            M-33, M-Zone, H.A.L Township, Sunabeda, Koraput, Odisha-763002,
            India.
          </p>
          <p className="mt-1 text-secondary">Phone: +91 8924922903</p>
          <p className="mt-1 text-secondary">
            Email: prathamkhanna.er2@gmail.com
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
          <div className="flex space-x-6">
            <a
              href="https://github.com/the-developer-306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/pratham-khanna-609776257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/unreal.aims/profilecard/?igsh=bWtkODZidXhxejNx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/whilealivecggke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <SiGeeksforgeeks size={24} />
            </a>
            <a
              href="https://leetcode.com/u/Ngvi4fpIWB/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href="https://www.hackerrank.com/profile/whilealivecode11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <SiHackerrank size={24} />
            </a>

            <a
              href="https://www.kaggle.com/thedeveloper306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaKaggle size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-500 text-m">
        <span className="blue-text-gradient">{new Date().getFullYear()}</span> &nbsp;
        <span>Pratham Khanna.</span> Powered by open-source tools and
        community-driven designs.
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer)

