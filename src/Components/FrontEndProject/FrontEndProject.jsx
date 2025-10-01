import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";






const FrontEndProject = () => {

  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9); // Number of projects to show initially

  useEffect(() => {
    // Fetch the JSON file
    fetch("./basic_frontend.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000, once: true }); // AOS initialization
  }, []);

  // ---------Show more projects--------
  const showMoreProjects = () => {
    setVisibleProjects(projects.length); // Show all projects when clicked
  };



    
  return (
    <div className='w-full  bg-[#111111] py-20'>
        <div className=" min-h-screen  w-10/12 mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center font-bold py-20">
          Front-End <span className="text-[#ff5c8d]">Projects</span>
        </h2>

      {/* --------Grid layout with 3 columns ---------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="bg-[#1A1A1D] p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageURL}
              alt={project.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-[#FF5C8D] text-xl font-semibold">{project.title}</h3>
            <p className="text-[#E5E5E5] text-sm mt-2 mb-4">{project.description}</p>
            <div className='flex justify-between'>
              <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5C8D] text-sm hover:underline"
            >
              Live link
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF5C8D] text-sm hover:underline"
            >
              Code link
            </a>
            </div>
          </div>
        ))}
      </div>

      {/* --------Show more button ---------*/}
      {visibleProjects < projects.length && (
        <div className="text-center mt-8">
          <button
            onClick={showMoreProjects}
            className=" text-white py-2 px-6 rounded-full bg-gradient-to-r from-[#c772f0] to-[#ff5c8d] hover:from-[#ff5c8d] hover:to-[#c772f0]  transition-colors"
          >
            Show More Projects
          </button>
        </div>
      )}
    </div>
    </div>
  )
}

export default FrontEndProject
