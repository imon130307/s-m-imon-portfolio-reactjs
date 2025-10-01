
import { useEffect } from "react";
import { MdIntegrationInstructions } from "react-icons/md";
import { FaBriefcase, FaUniversity } from "react-icons/fa";
import { TbArrowBadgeRight } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";





const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // AOS initialization
  }, []);

  const experiences = [
    {
      role: "Front-End Engineer (Intern)",
      company: "iTransition (Remote)",
      date: "01-04-2024 - 01-07-2024",
      description: [
        "Developed scalable and efficient front-end solutions for web applications using React and modern frameworks.",
        "Collaborated with designers and back-end developers to create a seamless user experience.",
        "Optimized web pages for performance and accessibility.",
      ],
      icon: <FaBriefcase className="text-5xl text-[#ff5c8d]" />,
    },
    {
      role: "Undergraduate Assistant",
      company: "PUST",
      date: "01-01-2024 - 01-07-2024",
      description: [
        "Boosted students' confidence in their abilities through continuous positive reinforcement.",
        "Improved critical thinking skills by incorporating problem-solving activities.",
        "Led study groups, facilitating communication for successful project completion.",
        "Mentored junior students, guiding them through complex concepts and projects.",
      ],
      icon: <FaUniversity className="text-5xl text-[#ff5c8d]" />,
    },
    {
      role: "Center for International Affairs and Cooperation (CIAC)",
      company: "PUST",
      date: "01-02-2022 - Current",
      description: [
        "Facilitated international exposure for students, faculty, and staff.",
        "Promoted cross-cultural diversity and global learning opportunities.",
        "Organized events and programs to enhance global collaboration.",
      ],
      icon: <MdIntegrationInstructions className="text-7xl text-[#ff5c8d]" />,
    },
  ];





  return (
    <div
      id="experience"
      className="bg-[#111111] text-white py-16 px-6 md:px-24"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        My <span className="text-[#ff5c8d]">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div  key={index} className="hover:shadow-[#ff5c8d] bg-[#1a1a1d]  hover:scale-105 hover:shadow-lg transition-all duration-75 rounded-xl">
            <div
              data-aos="flip-left"
             
              className="bg-[#1a1a1d] p-6 rounded-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                {exp.icon}
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-400">{exp.company}</p>
                  <p className="text-sm text-[#ff5c8d]">{exp.date}</p>
                </div>
              </div>
              <ul className=" space-y-2 text-gray-300 text-sm">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <TbArrowBadgeRight className="text-xl" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
