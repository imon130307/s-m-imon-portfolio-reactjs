  import Aos from "aos";
  import "aos/dist/aos.css";
  
  import { useEffect, useState } from "react";
  import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";




const FullStackProjects = () => {

  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9); // Number of projects to show initially
  const [selectedProject, setSelectedProject] = useState(null); // To store the selected project's details
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state


  useEffect(() => {
    // console.log("Initializing AOS");
    Aos.init({ duration: 1000, once: true });
  }, []);
  useEffect(() => {
    // Fetch the JSON file
    fetch("./fullstack.json")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };







  return (
    <div id="projects" className="bg-[#111111]">
      <div className="w-full py-10 px-6 md:w-10/12 mx-auto">
        <h2 className="text-4xl md:text-5xl text-white text-center font-bold py-20">
          Full-Stack <span className="text-[#ff5c8d]">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
           <div  key={index} className="hover:shadow-[#ff5c8d] bg-[#1a1a1d] hover:scale-105 hover:shadow-lg transition-all duration-75 rounded-xl">
             <div
             data-aos="fade-up"
             data-aos-anchor-placement="center-bottom"
             
              className="flex flex-col  lg:flex-row  items-center bg-[#1a1a1d] rounded-xl  overflow-hidden"
            >
              {/* Left Section: Image */}
              <div className="w-full h-full lg:w-1/2">
                <img
                  src={project.imageURL}
                  alt={project.title}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Right Section: Details */}
              <div className=" p-6 flex flex-col justify-around h-full text-white w-full lg:w-1/2">
             
             <div className="flex flex-col gap-2">
             <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.details.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-[#ff5c8d] text-white  px-3 py-1 rounded-full text-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
             </div>


              <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:flex md:flex-wrap gap-1 md:gap-4">
                {/* Live Site Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#333333] transition flex items-center justify-center"
                >
                  Live Site
                </a>

                {/* Client Code Button */}
                <a
                  href={project.githubLink_client_side}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#333333] transition flex items-center justify-center"
                >
                  Client Code
                </a>

                {/* Server Code Button */}
                {project.githubLink_server_side && (
                  <a
                    href={project.githubLink_server_side}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#111111] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#333333] transition flex items-center justify-center"
                  >
                    Server Code
                  </a>
                )}

                {/* See Details Button */}
                <button
                  onClick={() => openModal(project)}
                  className="bg-[#111111] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#333333] transition flex items-center justify-center"
                >
                  See Details
                </button>
              </div>

              </div>
            </div>
           </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProjects(visibleProjects + 6)}
              className="bg-[#ff5c8d] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:bg-[#c772f0] transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <Dialog
          open={isModalOpen}
          handler={closeModal}
          size="lg"
          className="bg-[#111111] max-w-3xl w-full text-white"
        >
          <DialogHeader className="text-[#ff5c8d]">
            {selectedProject.title}
          </DialogHeader>
          <DialogBody className="max-h-[60vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-[#ff5c8d]">Layout:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {selectedProject.details.detailedDescription.layout.navbar.map(
                    (item, idx) => (
                      <li key={idx}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#ff5c8d]">Key Pages:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  {Object.entries(
                    selectedProject.details.detailedDescription.keyPages
                  ).map(([key, value], idx) => (
                    <li key={idx}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div>

                <h4 className="text-lg font-semibold text-[#ff5c8d]">
                  Additional Features:
                </h4>
                <ul className="list-disc list-inside text-gray-300">
                  {Object.entries(
                    selectedProject.details.detailedDescription.additionalFeatures
                  ).map(([key, value], idx) => (
                    <li key={idx}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
            <h4 className="text-lg font-semibold text-[#ff5c8d]">
              Challenges Faced:
            </h4>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              {selectedProject?.details?.challengesFaced.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#ff5c8d]">Improvements:</h4>
            <ul className="list-disc list-inside text-gray-300 text-sm">
              {selectedProject?.details?.improvements.map((improvement, idx) => (
                <li key={idx}>{improvement}</li>
              ))}
            </ul>
          </div>
            </div>
          </DialogBody>
          <DialogFooter>
          
            <Button
              variant="text"
              color="red"
              onClick={closeModal}
              className="mt-4"
            >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
      )}
    </div>
  )
}

export default FullStackProjects
