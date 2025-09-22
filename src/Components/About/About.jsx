import Aos from "aos";
import Lottie from "lottie-react";
import { useEffect } from "react";
import animationData from "../../../public/about.json"; // Replace with your Lottie animation JSON
import "aos/dist/aos.css";



const About = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <div 

    id="about" className="flex flex-col md:flex-row justify-between items-center bg-[#111111] text-white  px-8 md:px-16 py-24">

    <div 
      data-aos="zoom-in"
    className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Lottie animationData={animationData} loop={true} className="w-80 md:w-96" />
      </div>
      {/* Left Section: Text */}
      <div 
        data-aos="zoom-in"
      className="md:w-1/2 space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          About <span className="text-[#ff5c8d]">Me</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Hello! I'm a <span className="text-[#ff5c8d]">Non-Computer Science graduate</span> but have a fervent passion for coding, particularly within the realm of <span className="text-[#ff5c8d]">web programming</span>. I thrive on creating digital experiences that are not only visually appealing but also highly functional and efficient.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          My expertise lies in <span className="text-[#ff5c8d]">React.js</span>, <span className="text-[#ff5c8d]">JavaScript</span>, and <span className="text-[#ff5c8d]">Node.js</span>. I enjoy translating complex problems into elegant solutions, constantly pushing myself to stay updated with the latest trends and technologies.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Beyond coding, I am passionate about <span className="text-[#ff5c8d]">networking</span> and fostering connections with individuals to expand my knowledge and gain diverse perspectives. This has inspired me to share my experiences by <span className="text-[#ff5c8d]">creating content on YouTube</span> about web development and <span className="text-[#ff5c8d]">writing posts on Facebook</span> to engage with the tech community.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          When I’m not coding, I enjoy playing <span className="text-[#ff5c8d]">table tennis</span>, which helps me unwind and stay focused. I believe in balancing work with hobbies that fuel creativity and innovation.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          I'm always open to collaborating on exciting projects and contributing to meaningful ideas. Let’s connect and create something amazing together!
        </p>
      </div>

      {/* Right Section: Image/Animation */}
      
    </div>
  )
}

export default About
