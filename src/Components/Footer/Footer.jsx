

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import logo from "../../../public/logo3.png";





const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="space-y-4">
            <div className="flex items-end">
            <img src={logo} className="w-16 h-16" alt="" />
          <h4 className="text-2xl font-semibold text-[#ff5c8d]">About Me</h4>
            </div>
          <p className="text-sm text-gray-400">
            Hi, I'm MOHAMMAD IMON, a passionate web developer crafting responsive
            and user-friendly websites. Let's create something amazing together!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-[#ff5c8d]">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-400 hover:text-white transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-2xl font-semibold text-[#ff5c8d]">Contact Me</h4>
          <ul className="space-y-2">
            <li className="text-gray-400">Email: imon.dvp@gmail.com</li>
            <li className="text-gray-400">Phone: +8801516143040</li>
            <li className="text-gray-400">Location: Dhaka, Bangladesh</li>
          </ul>

          {/* Social Media Links */}
          <div className="flex gap-4 mt-4">
            <a
               href="https://github.com/imon130307"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff5c8d] transition text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/m-imon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff5c8d] transition text-xl"
            >
              <FaLinkedin />
            </a>
            {/* <a
              href="https://x.com/Fardilshifat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff5c8d] transition text-xl"
            >
              <FaTwitter />
            </a>
            <a
               href="https://www.facebook.com/shifat.199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff5c8d] transition text-xl"
            >
              <FaFacebook />
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} MOHAMMAD IMON. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
