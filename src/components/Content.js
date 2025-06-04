import React, { useState } from "react";
import me from "../img/me.png";
import mezzz from "../img/mezzz.png"
import projects from "../Personal-projects/projects";
import mern from "../img/MERN stack.png"
import logo from "../img/logo.png";
import Modal from "./Modal";
import { FaCaretLeft, FaCaretRight, FaGithub, FaLinkedin, FaFacebook, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Content = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImage, setCurrentImage] = useState(me);

    const handleClickedImage = (projectObject) => {
        setSelectedProject(projectObject)
    }

    const closeModal = () => {
        setSelectedProject(null);
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
      setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    };

    const currentProject = projects[currentIndex];

  return (
    <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
      {/* Left Side */}
      <div className="relative h-screen min-h-[600px]">
        <div>
          <div className="bg-[#ff914d] mr-[30%] h-[50vh] md:h-[60vh] lg:h-[70vh] rounded"></div>
        </div>

        <div className="absolute bottom-0 right-0 h-[50vh] w-full md:h-[60vh] md:w-full lg:h-[70vh] lg:w-[30vw]">
          <img 
            key={currentImage}
            src={currentImage} 
            alt="me"
            onMouseEnter={() => setCurrentImage(mezzz)} 
            onMouseLeave={() => setCurrentImage(me)}
            onClick={() => setCurrentImage((prev) => (prev === me ? mezzz : me))}
            className="h-full w-full object-cover rounded transition-opacity duration-500 opacity-100" 
          />
        </div>
      </div>

      <div className="bg-[#F5F5DC] rounded relative h-screen min-h-[600px] overflow-x-auto flex items-center justify-center">
        <div className="m-4 text-center max-w-2xl">
          <p className="text-[#322f2f] px-[20%] text-start">
            <p className="text-[#322f2f] font-bold text-xl mb-4">Web Developer</p>
            I’m Hanz Menzi a self-taught web developer from the Philippines with hands-on experience in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I’ve built scalable full-stack applications through continuous learning, driven by curiosity and a strong work ethic.
          </p>
          <div className="flex justify-center gap-4 text-3xl font-bold text-[#322f2f]">
            <div className="h-full w-full overflow-hidden rounded">
              <img
                src={mern}
                alt="mern"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {selectedProject && (
        <Modal closeModal={closeModal} selectedProject={selectedProject} />
      )}
    </div>

    {/**Projects */}
    <div id="projects" className="relative min-h-screen bg-[#322f2f] rounded p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {/* Project Image */}
      <p className="text-white text-start text-2xl font-bold uppercase mb-2 pb-2 border-b">{currentProject.name}</p>
      <div className="flex justify-center items-center w-full h-[70vh]">
        <img
          src={currentProject.image}
          alt={currentProject.name || `project-${currentIndex}`}
          onClick={() => handleClickedImage(currentProject)}
          className="h-[50vh] object-contain transition-all duration-500 blur-sm hover:blur-none hover:h-[70vh] cursor-pointer"
        />
      </div>

      {/* Arrows */}
      <div className="mt-4 flex gap-4 items-center justify-center">
        {currentIndex > 0 && (
          <button onClick={handlePrev} className="flex items-center gap-1 p-2 rounded text-white hover:text-[#ff914d]">
            <FaCaretLeft size={40} />
          </button>
        )}
        {currentIndex < projects.length - 1 && (
          <button onClick={handleNext} className="flex items-center gap-1 p-2 rounded text-white hover:text-[#ff914d]">
            <FaCaretRight size={40} />
          </button>
        )}
      </div>
    </div>

    <footer id="contact" className="bg-[#322f2f] text-white border-t">
      <div className="grid grid-cols-1 md:grid-cols-12 border-b">
       <div className="p-4 md:col-span-8 border-r">
          <p className="text-start text-4xl mb-2">I WOULD LOVE TO HEAR FROM YOU</p>
          <p className="text-start text-xs mb-2 text-gray-400">Feel free to reach out if you want to collaborate with me, or simply have a chat.<FaPhone className="inline m-1 text-xs" /></p>
          <a 
            href="mailto:CONTACT@martinezhanzmenzi@gmail.com" 
            className="text-start underline text-sm hover:text-[#ff914d]"
          >
            CONTACT@martinezhanzmenzi@gmail.com
          </a>
        </div>

        <div className="p-5 md:col-span-2 flex flex-col items-center justify-center text-start border-r">
          <p className="w-full font-bold">ADDRESS</p>
          <p className="w-full text-xs text-white">
            <FaMapMarkerAlt className="inline mr-1 text-xs" />
            Purok Ozanam Gawad Kalinga Banganan Aritao Nueva Vizcaya Philippines
          </p>
        </div>

        <div className="p-5 md:col-span-2 flex flex-col items-center justify-center text-start border-r">
          <p className="w-full font-bold">FOLLOW ME</p>

          <div className="w-full flex gap-4 mb-2">
            <a href="https://github.com/mz0018" target="_blank" rel="noopener noreferrer">
              <FaGithub className="fill-current hover:text-[#ff914d] cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/martinez-hanz-menzi-64bba7306/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="fill-current hover:text-[#ff914d] cursor-pointer" />
            </a>
            <a href="https://facebook.com/HnzMnzMrtnz" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="fill-current hover:text-[#ff914d] cursor-pointer" />
            </a>
          </div>

          <p className="w-full text-xs">Github</p>
          <p className="w-full text-xs">LinkedIn</p>
          <p className="w-full text-xs">Facebook</p>
        </div>

      </div>

      <div className="bg-[#1B1B1B] p-4 flex flex-col items-center justify-center text-center">
        <p className="text-sm mb-2">&copy; 2025. All rights reserved.</p>
        <p className="text-sm text-xs mb-2 text-gray-400">Designed by: Martinez, Hanz Menzi</p>
      </div>
    </footer>
    </>
  );
};

export default Content;
