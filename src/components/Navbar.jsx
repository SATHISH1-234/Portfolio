import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFileDownload,
} from "react-icons/fa";

function Navbar() {
  const handleDownloadResume = () => {
    // TODO: Replace with actual resume download link
    const resumeUrl =
      "https://drive.google.com/file/d/11JXcmVCmltYlmSgWKc2yLX2eNviYeYkQ/view?usp=sharing";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <nav className="flex justify-between items-center bg-black text-white px-24 py-6 font-montserrat">
      <div className="ml-16 flex flex-col">
        <Link
          to="/"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <h1 className="text-4xl font-bold mb-2 text-white">Ashish Sakthi</h1>
        </Link>
      </div>

      <div className="flex items-center space-x-8 mr-16">
        <a
          href="https://www.linkedin.com/in/iamashishsakthi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://github.com/Ashish-Sakthi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-300 transition-colors duration-300"
        >
          <FaInstagram size={32} />
        </a>
        <button
          onClick={handleDownloadResume}
          className="flex items-center bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-300"
        >
          <FaFileDownload className="mr-3" size={24} />
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
