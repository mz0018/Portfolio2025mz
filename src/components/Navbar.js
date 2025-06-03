import React, { useState } from "react";
import { FolderIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { HiMiniBars4 } from "react-icons/hi2";
import logo from "../img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white px-4 py-2 shadow-lg">
      <div className="flex items-center justify-between">
        {/* <img src={logo} alt="Logo" className="h-10 w-auto" /> */}
        <img src={logo} alt="Logo" className="w-50 h-auto" />

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#322f2f] text-5xl"
        >
          <HiMiniBars4 className="hover:text-[#ff914d] cursor-pointer" />
        </button>

        <div className="hidden md:flex gap-6 text-[#322f2f] font-bold text-lg">
          <a
            href="#projects"
            className="flex items-center gap-2 text-[#322f2f] rounded-full hover:bg-[#ff914d] hover:text-white px-4 py-2 transition"
          >
            <FolderIcon className="w-5 h-5" />
            PROJECTS
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 text-[#322f2f] rounded-full hover:bg-[#ff914d] hover:text-white px-4 py-2 transition"
          >
            <EnvelopeIcon className="w-5 h-5" />
            CONTACT
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 flex flex-col gap-2 md:hidden text-[#322f2f] bg-[#FFF8DC] font-bold text-lg">
          <a href="#projects" className="hover:hover:bg-[#ff914d] hover:text-white px-4 py-2 transition">Projects</a>
          <a href="#contact" className="hover:hover:bg-[#ff914d] hover:text-white px-4 py-2 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
