import { useState, useEffect } from "react";
import "./Navbar.css";
import resume from "../../../public/resume2.png";
import logo from "../../../public/logo3.png";
import { Spinner } from "@material-tailwind/react";
import { Typewriter } from "react-simple-typewriter";






const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = (event) => {
    event.preventDefault(); // Prevent default navigation
    setIsLoading(true);
    const link = document.createElement("a");
    // link.href ="https://drive.google.com/file/d/1HFMV8eGlCaM2cHgXyDlwbghhlb6L4OLm/view?usp=sharing";
    link.href ="/resume-of-imon.pdf"; // URL of the PDF file
    link.download = "Resume.pdf"; // Name of the file to download
    link.click();

    // Simulate loading state for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulates a 2-second delay
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "education",
        // "experience",
        "projects",
        "contact",
      ];


      let currentSection = "home";
      for (const section of sections) {
        const sectionElement = document.getElementById(section);
        if (
          sectionElement &&
          sectionElement.offsetTop <= window.scrollY + 100 &&
          sectionElement.offsetTop + sectionElement.offsetHeight >
            window.scrollY + 100
        ) {
          currentSection = section;
          break;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const linkClass = (section) =>
    `text-[#E5E5E5] px-4 py-2 rounded ${
      activeSection === section ? "bg-[#4E4E50]" : "hover:bg-[#4E4E50]"
    }`;






  return (
        <nav className="bg-[#111111] fixed top-0 left-0 w-full z-50 shadow-md font_heading">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/*----------------- Logo------------------ */}
        <div className="text-[#E5E5E5] text-xl font-normal flex items-end">
          <img src={logo} className="w-10 h-10" alt="" />
        <span className="inline-block w-32 text-xl" style={{ color: "#ffffff", fontWeight: "bold" }}>
        <Typewriter
                  words={[
                    "MOHAMMAD IMON",
                    "Learners",
                    "MOHAMMAD IMON"
                    ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
        </div>

        {/*-----------------Desktop Menu --------------*/}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>
          <a href="#education" className={linkClass("education")}>
            Education
          </a>
          {/* <a href="#experience" className={linkClass("experience")}>
            Experiences
          </a> */}
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          
        <button
            onClick={handleDownload}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Spinner color="pink" />
                
              </span>
            ) : (
              <div className="hover:scale-105 transition-all duration-100 items-center   border-white"><img src={resume} className="w-8 h-8" alt="Resume Icon" /></div>
            )}
          </button>
        </div>


        {/* --------Mobile Menu Toggle----------- */}
        <div className="md:hidden">
          <button
            className="text-[#E5E5E5] focus:outline-none text-2xl"
            onClick={toggleMenu}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* --------Mobile Menu--------- */}
      <div
        className={`md:hidden bg-[#111111] overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 mt-2 p-4">
          <a href="#home" className={linkClass("home")}>
            Home
          </a>
          <a href="#about" className={linkClass("about")}>
            About
          </a>
          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>
          <a href="#education" className={linkClass("education")}>
            Education
          </a>
          <a href="#experience" className={linkClass("experience")}>
            Experiences
          </a>
          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>
          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>

          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="px-4 py-2 rounded-md bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 hover:from-[#c772f0] hover:to-[#ff5c8d] transition text-white shadow-md"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <Spinner color="pink" />
                Downloading...
              </span>
            ) : (
              <div className="flex gap-2 items-center"><img src={resume} className="w-8 h-8" alt="Resume Icon" /> <p className="text-xl">Resume</p></div>
            )}
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
