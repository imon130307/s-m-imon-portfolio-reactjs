// import React from 'react'

// const Skills = () => {
//   return (
//       <section id="skills" className=" bg-[#111111] py-12 mx-auto px-10 sm:px-10 md:px-24  ">
//                  <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
//           Skills <span className="text-[#ff5c8d]">I have</span>
//         </h2>
//             <div className="bg-gray-100 bg3">
//                 <div className="grid grid-cols-1 md:grid-cols-2">
                   
//                     <div className="  bg-[#111111] transition duration-300  hover:shadow-2xl   p-4 sm:p-8   md:mb-0.5">
//                         <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
//                         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-red-500 text-white p-4 rounded shadow-lg">HTML</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-blue-500 text-white p-4 rounded shadow-lg">CSS</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-pink-500 text-white p-4 rounded shadow-lg">Tailwind</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-purple-500 text-white p-4 rounded shadow-lg">Bootstrap</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-green-500 text-white p-4 rounded shadow-lg">Daisy UI</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-yellow-500 text-white p-4 rounded shadow-lg">React</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-purple-500 text-white p-4 rounded shadow-lg">Redux</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-indigo-500 text-white p-4 rounded shadow-lg">NextJS</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-pink-500 text-white p-4 rounded shadow-lg">Express</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-gray-500 text-white p-4 rounded shadow-lg">Node.js</div>
                          
//                         </div>
//                     </div>
                   
                 
    
                   
//                     <div  className=" bg-[#111111]  transition duration-300 hover:shadow-xl  md:ml-0.5 md:mb-0.5 p-4 sm:p-8 ">
//                         <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
//                         <div className="grid grid-cols-2 gap-4">
//                             <div className="bg-red-400 text-white p-4 rounded  shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">C</div>
//                             <div className="bg-green-400 text-white p-4 rounded shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Java</div>
//                             <div className="bg-blue-400 text-white p-4 rounded shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">JavaScript</div>
//                             <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-yellow-500 text-white p-4 rounded shadow-lg">TypeScript(Basic)</div>
//                         </div>
//                     </div>

//                     <div  className=" bg-[#111111]  transition duration-300  hover:shadow-xl p-4 sm:p-8  ">
//                         <h3 className="text-xl font-semibold mb-4 text-white">Database</h3>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div className="bg-gray-600 text-white p-4 rounded  transition-all duration-500 hover:scale-y-105 hover:scale-x-105">MySQL</div>
//                             <div className="bg-gray-700 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">MongoDB</div>
//                         </div>
//                     </div>
    
//                     <div  className=" bg-[#111111]  md:ml-0.5  transition duration-300  hover:shadow-xl p-4 sm:p-8  ">
//                         <h3 className="text-xl font-semibold mb-4 text-white">UI/UX Design</h3>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     <div className="bg-purple-400 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Figma</div>
//                                     <div className="bg-pink-400 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Pixso</div>
//                                 </div>
//                         </div>
                    
                      
//                 </div>
//             </div>
//         </section>
//   )
// }

// export default Skills



// import React from "react";
import { motion } from "framer-motion";
// import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
// import { SiTailwindcss, SiBootstrap, SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";

// const Skills = () => {
//   const skills = [
//     {
//       category: "Web Development",
//       items: [
//         { name: "HTML", icon: <FaHtml5 className="text-4xl text-white" />, bg: "bg-red-500" },
//         { name: "CSS", icon: <FaCss3Alt className="text-4xl text-white" />, bg: "bg-blue-500" },
//         { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-white" />, bg: "bg-pink-500" },
//         { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-white" />, bg: "bg-purple-500" },
//         { name: "React", icon: <FaReact className="text-4xl text-white" />, bg: "bg-blue-400" },
//         { name: "Redux", icon: <SiRedux className="text-4xl text-white" />, bg: "bg-purple-400" },
//         { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" />, bg: "bg-indigo-500" },
//         { name: "Express", icon: <SiExpress className="text-4xl text-white" />, bg: "bg-gray-500" },
//         { name: "Node.js", icon: <FaNodeJs className="text-4xl text-white" />, bg: "bg-green-500" },
//       ],
//     },
//     {
//       category: "Programming Languages",
//       items: [
//         { name: "C", bg: "bg-red-400" },
//         { name: "Java", bg: "bg-green-400" },
//         { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-white" />, bg: "bg-yellow-500" },
//         { name: "TypeScript (Basic)", icon: <SiTypescript className="text-4xl text-white" />, bg: "bg-blue-400" },
//       ],
//     },
//     {
//       category: "Database",
//       items: [
//         { name: "MySQL", icon: <SiMysql className="text-4xl text-white" />, bg: "bg-gray-600" },
//         { name: "MongoDB", icon: <SiMongodb className="text-4xl text-white" />, bg: "bg-gray-700" },
//       ],
//     },
//     {
//       category: "UI/UX Design",
//       items: [
//         { name: "Figma", icon: <FaFigma className="text-4xl text-white" />, bg: "bg-purple-400" },
//         { name: "Pixso", bg: "bg-pink-400" },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="bg-[#111111] py-12 mx-auto px-10 sm:px-10 md:px-24">
//       <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
//         Skills <span className="text-[#ff5c8d]">I have</span>
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//         {skills.map((skillCategory, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#1a1a1d] p-6 rounded-lg shadow-lg hover:shadow-xl transition"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             <h3 className="text-xl font-semibold mb-4 text-white">{skillCategory.category}</h3>
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//               {skillCategory.items.map((item, idx) => (
//                 <motion.div
//                   key={idx}
//                   className={`${item.bg} text-white p-4 rounded shadow-lg flex flex-col items-center justify-center`}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item.icon && <div className="mb-2">{item.icon}</div>}
//                   <p className="text-center">{item.name}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;




import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux, SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import clanguge from "../../public/c.svg"
import java from "../../public/java.png"

const Skills = () => {


    const skills2 = [
        {
          category: "Web Development",
          items: [
            { name: "HTML", icon: <FaHtml5 className="text-4xl text-white" />, bg: "bg-red-500" },
            { name: "CSS", icon: <FaCss3Alt className="text-4xl text-white" />, bg: "bg-blue-500" },
            { name: "Tailwind", icon: <SiTailwindcss className="text-4xl text-white" />, bg: "bg-pink-500" },
            { name: "Bootstrap", icon: <SiBootstrap className="text-4xl text-white" />, bg: "bg-purple-500" },
            { name: "React", icon: <FaReact className="text-4xl text-white" />, bg: "bg-blue-400" },
            { name: "Redux", icon: <SiRedux className="text-4xl text-white" />, bg: "bg-purple-400" },
            { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-white" />, bg: "bg-indigo-500" },
            { name: "Express", icon: <SiExpress className="text-4xl text-white" />, bg: "bg-gray-500" },
            { name: "Node.js", icon: <FaNodeJs className="text-4xl text-white" />, bg: "bg-green-500" },
          ],
        },
        {
          category: "Programming Languages",
          items: [
            { name: "C", icon: <img src={clanguge} alt="" /> ,bg: "bg-red-400" },
            { name: "Java", icon: <img className="w-12" src={java}/>, bg: "bg-green-400" },
            { name: "JavaScript", icon: <IoLogoJavascript className="text-4xl text-white" />, bg: "bg-yellow-500" },
            { name: "TypeScript (Basic)", icon: <SiTypescript className="text-4xl text-white" />, bg: "bg-blue-400" },
          ],
        },
        {
          category: "Database",
          items: [
            { name: "MySQL", icon: <SiMysql className="text-4xl text-white" />, bg: "bg-gray-600" },
            { name: "MongoDB", icon: <SiMongodb className="text-4xl text-white" />, bg: "bg-gray-700" },
          ],
        },
        {
          category: "UI/UX Design",
          items: [
            { name: "Figma", icon: <FaFigma className="text-4xl text-white" />, bg: "bg-purple-400" },
            { name: "Pixso", bg: "bg-pink-400" },
          ],
        },
      ];
    

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-6xl text-white" />, bg: "bg-red-500" },
    { name: "CSS", icon: <FaCss3Alt className="text-6xl text-white" />, bg: "bg-blue-500" },
    { name: "Tailwind", icon: <SiTailwindcss className="text-6xl text-white" />, bg: "bg-pink-500" },
    { name: "Bootstrap", icon: <SiBootstrap className="text-6xl text-white" />, bg: "bg-purple-500" },
    { name: "React", icon: <FaReact className="text-6xl text-white" />, bg: "bg-blue-400" },
    { name: "Redux", icon: <SiRedux className="text-6xl text-white" />, bg: "bg-purple-400" },
    { name: "Next.js", icon: <SiNextdotjs className="text-6xl text-white" />, bg: "bg-indigo-500" },
    { name: "Express", icon: <SiExpress className="text-6xl text-white" />, bg: "bg-gray-500" },
    { name: "Node.js", icon: <FaNodeJs className="text-6xl text-white" />, bg: "bg-green-500" },
    { name: "JavaScript", icon: <IoLogoJavascript className="text-6xl text-white" />, bg: "bg-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript className="text-6xl text-white" />, bg: "bg-blue-400" },
    { name: "MongoDB", icon: <SiMongodb className="text-6xl text-white" />, bg: "bg-gray-700" },
    { name: "MySQL", icon: <SiMysql className="text-6xl text-white" />, bg: "bg-gray-600" },
    { name: "Figma", icon: <FaFigma className="text-6xl text-white" />, bg: "bg-purple-400" },
  ];

  return (
    <section id="skills" className="bg-[#111111] py-12 mx-auto w-full sm:px-10 md:px-24">
      
      <h2 className="mb-12 text-4xl w-full md:text-5xl font-bold text-center text-white">
        Skills <span className="text-[#ff5c8d]">I have</span>
      </h2>


      <section id="skills" className="bg-[#111111] py-12 mx-auto  sm:px-2 lg:px-24  ">
         
            <div className="bg-gray-100 bg3">
                <div className="grid grid-cols-1 md:grid-cols-2">
                   
                    <div className="  bg-[#111111] transition duration-300  hover:shadow-2xl   p-4 sm:p-8   md:mb-0.5">
                        <h3 className="text-xl font-semibold mb-4 text-white">Web Development</h3>
                       
                        <div className="flex flex-wrap gap-4">
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-red-500 text-white p-4 rounded shadow-lg">HTML</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-blue-500 text-white p-4 rounded shadow-lg">CSS</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-pink-500 text-white p-4 rounded shadow-lg">Tailwind</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-purple-500 text-white p-4 rounded shadow-lg">Bootstrap</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-green-500 text-white p-4 rounded shadow-lg">Daisy UI</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-yellow-500 text-white p-4 rounded shadow-lg">React</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-purple-500 text-white p-4 rounded shadow-lg">Redux</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-indigo-500 text-white p-4 rounded shadow-lg">NextJS</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-pink-500 text-white p-4 rounded shadow-lg">Express</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-gray-500 text-white p-4 rounded shadow-lg">Node.js</div>
                          
                        </div>
                    </div>
                   
                 
    
                   
                    <div  className=" bg-[#111111]  transition duration-300 hover:shadow-xl  md:ml-0.5 md:mb-0.5 p-4 sm:p-8 ">
                        <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-400 text-white p-4 rounded  shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">C</div>
                            <div className="bg-green-400 text-white p-4 rounded shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Java</div>
                            <div className="bg-blue-400 text-white p-4 rounded shadow-lg transition-all duration-500 hover:scale-y-105 hover:scale-x-105">JavaScript</div>
                            <div className="transition-all duration-500 hover:scale-y-105 hover:scale-x-105 bg-yellow-500 text-white p-4 rounded shadow-lg text-wrap">TypeScript</div>
                        </div>
                    </div>

                    <div  className=" bg-[#111111]  transition duration-300  hover:shadow-xl p-4 sm:p-8  ">
                        <h3 className="text-xl font-semibold mb-4 text-white">Database</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-gray-600 text-white p-4 rounded  transition-all duration-500 hover:scale-y-105 hover:scale-x-105">MySQL</div>
                            <div className="bg-gray-700 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">MongoDB</div>
                        </div>
                    </div>
    
                    <div  className=" bg-[#111111]  md:ml-0.5  transition duration-300  hover:shadow-xl p-4 sm:p-8  ">
                        <h3 className="text-xl font-semibold mb-4 text-white">UI/UX Design</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-purple-400 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Figma</div>
                                    <div className="bg-pink-400 text-white p-4 rounded transition-all duration-500 hover:scale-y-105 hover:scale-x-105">Pixso</div>
                                </div>
                        </div>
                    
                      
                </div>
            </div>
        </section>
   
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        className="flex "
      >
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className={`${skill.bg} text-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center ml-4`}
            style={{ minWidth: "200px" }}
          >
            {skill.icon}
            <p className="text-xl mt-4">{skill.name}</p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;


