import React, { useState } from "react";
import me from "../img/me.png";
import projects from "../Personal-projects/projects";
import Modal from "./Modal";

const Content = () => {

    const [selectedProject, setSelectedProject] = useState(null);

    const handleClickedImage = (projectObject) => {
        setSelectedProject(projectObject)
    }

    const closeModal = () => {
        setSelectedProject(null);
    }

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="relative h-screen min-h-[600px]">
        <div>
          <div className="bg-orange-500 mr-[30%] h-[50vh] md:h-[60vh] lg:h-[70vh] rounded"></div>
        </div>

        <div className="absolute bottom-0 right-0 h-[50vh] w-[40vw] md:h-[60vh] md:w-[40vw] lg:h-[70vh] lg:w-[30vw]">
          <img src={me} alt="me" className="h-full w-full object-cover rounded" />
        </div>
      </div>

      {/* Right Side */}
      <div className="relative h-screen min-h-[600px] overflow-x-auto">
        <div className="bg-gray-200 bg-opacity-85 h-[50vh] flex overflow-x-auto snap-x snap-mandatory items-center justify-start rounded p-2 scroll-smooth">
          {projects.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-full flex justify-center items-center"
            >
              <img
                src={img.image}
                data-link={img.link}
                alt={img.name || `project-${index}`}
                onClick={() => handleClickedImage(img)}
                className="h-[25vh] object-contain transition-all duration-300 blur-sm hover:blur-none"
              />
            </div>
          ))}
        </div>

        <div>
            <p className="text-gray-900 text-3xl dark:text-white mt-[15%] text-justify tracking-widest">
                I am a passionate and dedicated web developer from the Philippines, with a strong foundation built entirely through self-directed learning and hands-on experience. Over the years, I have mastered the MERN stack (MongoDB, Express.js, React.js, and Node.js) enabling me to build robust, scalable, and efficient full-stack web applications.

                As a self-taught developer, I have demonstrated unwavering commitment, discipline, and a keen eye for detail in mastering the complexities of modern web development technologies. My journey has been driven by curiosity, perseverance, and an eagerness to continuously expand my skill set to stay ahead in this rapidly evolving field.
            </p>
        </div>

      </div>

      {selectedProject && (
        <Modal closeModal={closeModal} selectedProject={selectedProject} />
      )}
    </div>

    <footer className="bg-white/60 backdrop-blur-sm text-gray-800 py-8 px-6 md:px-12 shadow-inner rounded-t-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Left Column - Copyright */}
        <div>
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Martinez
          </p>
          <p className="text-xs text-gray-600">All rights reserved.</p>
        </div>

        {/* Middle Column - Links */}
        <div className="space-y-2">
          <p className="text-sm font-semibold">Connect with me:</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://github.com/mz0018"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black underline transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right Column - Email */}
        <div>
          <p className="text-sm font-semibold">Email</p>
          <a
            href="mailto:youremail@example.com"
            className="text-red-600 hover:text-red-800 underline transition text-sm"
          >
            martinezhanzmenzi@gmail.com
          </a>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Content;
