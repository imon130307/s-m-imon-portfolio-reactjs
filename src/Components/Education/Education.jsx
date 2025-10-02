
import { useEffect } from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdOutlineSchool } from "react-icons/md";
import Lottie from "lottie-react";
import educationAnimation from "../../../public/education.json"; // Replace with your Lottie file
import Aos from "aos";
import "aos/dist/aos.css";





const Education = () => {

  const educationData = [
    {
      id: 1,
      icon: <FaUniversity className="text-4xl text-[#ff5c8d]" />,
      title: "M.Sc in Applied Mathematics",
      institution: "Pabna University of Science and Technology",
      // grade: "CGPA: 3.04",
      // year: "2016",
    },
    {
      id: 2,
      icon: <MdOutlineSchool className="text-4xl text-[#ff5c8d]" />,
      title: "Honors in Mathematics",
      institution: "Pabna University of Science and Technology",
      // grade: "CGPA: 3.04",
      // year: "2016",
    },
    {
      id: 3,
      icon: <FaSchool className="text-4xl text-[#ff5c8d]" />,
      title: "Higher Secondary Certificate (HSC)",
      institution: "Khilgaon Model College, Dhaka",
      // grade: "GPA: 5.00",
      // year: "2011",
    },
    // {
    //   id: 4,
    //   icon: <FaSchool className="text-4xl text-[#ff5c8d]" />,
    //   title: "Secondary School Certificate (SSC)",
    //   institution: "Chandrapara Sultania High School,Faridpur",
    //   // grade: "GPA: 4.81",
    //   // year: "2011",
    // },
  ];


  useEffect(() => {
    // console.log("Initializing AOS");
    Aos.init({ duration: 1000 });
  }, []);



  return (
    <div id="education"  className="flex flex-col items-center bg-[#111111] text-white py-16 px-8 md:px-16">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-[#ff5c8d]">Education</span> Journey
      </h2>

      {/*-------------Content -------------*/}
      <div className="flex flex-col-reverse md:flex-row items-center gap-16">
        {/* -----------Left Section: Education List -------------*/}
        <div 
          data-aos="fade-right"
        className="md:w-1/2 space-y-8">
          {educationData.map((item) => (
            
            <div
              key={item.id}
              className="hover:shadow-[#ff5c8d] hover:scale-105 hover:shadow-lg transition-all duration-75 flex items-center gap-6 bg-[#1a1a1d] p-6 rounded-lg "
            >
              {/* ------Icon ---------*/}
              <div className="flex-shrink-0">{item.icon}</div>

              {/* ----------Details --------------*/}
              <div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-lg">{item.institution}</p>
                {/* <p className="text-sm text-[#c7c7c7]">
                  {item.grade} • {item.year}
                </p> */}
              </div>
            </div>
          ))}
        </div>

        {/* -----Right Section: Animation-------- */}
        <div className="md:w-1/2 flex justify-center">
          <Lottie animationData={educationAnimation}    speed={0.1} loop={true} className="w-80 md:w-full" />
        </div>
      </div>
    </div>
  )
}

export default Education
