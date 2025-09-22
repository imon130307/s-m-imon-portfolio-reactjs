import Aos from "aos";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profile from "../../../public/imon1.JPG";
import { Spinner } from "@material-tailwind/react";

const Banner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    setIsLoading(true);
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1oDDf2DIQJVCBku822nwQiQkgy2oN9GJ4";
    link.download = "Resume.pdf"; // Name of the file to download
    link.click();

    // Simulate loading state for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulates a 2-second delay
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      id="home"
      className=" h-[600px] md:h-[700px] bg-[#111111] py-32 w-full"
    >
      <div className="relative h-full  flex flex-col gap-8 md:flex-row justify-between md:px-4 w-full">
        {/* Left Section: Text */}
        <div className="flex-1 flex flex-col justify-center items-center w-11/12 mx-auto h-full gap-12 md:gap-8">
          <motion.h1
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 5,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="text-4xl md:text-6xl text-center font-bold text-white font_heading"
          >
            Hi, I am MOHAMMAD IMON{" "}
            <motion.span
              animate={{ color: ["#ff5c8d", "#c772f0", "#ff5c8d"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <br />
              <span style={{ color: "#c772f0", fontWeight: "bold" }}>
                <Typewriter
                  words={[
                    "Web Developer",
                    "Problem Solver",
                    "Tech Enthusiast",
                    "Web Developer",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={200}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </motion.span>
          </motion.h1>

          {/* <motion.p
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="text-center text-lg md:text-2xl text-white"
          >
            Crafting modern, responsive, and user-friendly websites to elevate
            your digital presence.
          </motion.p> */}

          {/* Resume Button */}

          {/* Social Media Links */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-center gap-4">
              {/* <a
              href="https://drive.google.com/file/d/1oDDf2DIQJVCBku822nwQiQkgy2oN9GJ4/view?usp=sharing" // Replace with your resume file path
              download
              className="font_body text-2xl px-6 py-3 bg-[#ff5c8d] text-white font-semibold rounded-md shadow-md hover:bg-[#c772f0] transition"
            >
              Download Resume
            </a> */}

              {/* <a

              href="https://drive.google.com/uc?export=download&id=1oDDf2DIQJVCBku822nwQiQkgy2oN9GJ4" // Direct download link
              className="font_body text-2xl px-6 py-3 bg-[#ff5c8d] text-white font-semibold rounded-md shadow-md hover:bg-[#c772f0] transition"
            >
              Download Resume
            </a> */}

              <button
                onClick={handleDownload}
                disabled={isLoading}
                className={`font_body text-lg md:text-2xl px-4 md:px-6 py-2 md:py-3 ${
                  isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#ff5c8d]"
                } text-white font-semibold rounded-md shadow-md ${
                  isLoading ? "" : "hover:bg-[#c772f0]"
                } transition flex items-center justify-center`}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <p>Downloading</p> <Spinner color="pink" />
                  </span>
                ) : (
                  "Download Resume"
                )}
              </button>
            </div>
            <div className="flex justify-center items-center gap-6 mt-4">
              {/* GitHub */}
              <a
                href="https://github.com/imon130307"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 transition-transform transform hover:scale-110"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733553.png"
                  alt="GitHub"
                  className="w-full h-full object-cover"
                />
              </a>
              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/m-imon"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 transition-transform transform hover:scale-110"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt="LinkedIn"
                  className="w-full h-full object-cover"
                />
              </a>
              {/* Facebook */}
              {/* <a
              href="https://www.facebook.com/shifat.199"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 transition-transform transform hover:scale-110"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
                alt="Facebook"
                className="w-full h-full object-cover"
              />
            </a> */}
              {/* X (Twitter) */}
              {/* <a
              href="https://x.com/Fardilshifat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 transition-transform transform hover:scale-110"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/145/145812.png"
                alt="X"
                className="w-full h-full object-cover"
              />
            </a> */}
            </div>
          </div>
        </div>

        {/* Right Section: Profile Image */}
        <div className="flex-1 relative">
          <div className="flex justify-center items-center h-full w-full">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="relative rounded-full overflow-hidden border-8 border-white w-56 h-56 md:w-96 md:h-96"
            >
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
