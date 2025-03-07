import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

// Import project images
import img1 from "../assets/world.jpg";
import img2 from "../assets/obsrun.png";
import img3 from "../assets/world.jpg";
import img4 from "../assets/world.jpg";
import img from "../assets/profile.jpeg";
function ProjectCard({
  icon: Icon,
  title,
  description,
  technologies,
  image,
  projectId,
}) {
  return (
    <Link to={`/projects/${projectId}`} className="block">
      <div className="bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className="h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Icon className="text-blue-500 mr-4" size={40} />
            <h3 className="text-2xl font-semibold text-white">{title}</h3>
          </div>
          <p className="text-gray-400 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-900 text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function Home() {
  const projects = [
    {
      id: "img1",
      icon: FaGamepad,
      title: "Interactive Skill Enhancer For Children With ASD and ID",
      description:
        "An advanced terrain generation system with dynamic biome creation and realistic landscape rendering.",
      technologies: ["Unity", "AR/VR"],
      image: img1,
    },
    {
      id: "img2",
      icon: FaCode,
      title: "Obstacle Overrun",
      description:
        "Developed a flexible AI decision-making framework for complex NPC interactions and game logic.",
      technologies: ["Unreal Engine", "C++"],
      image: img2,
    },
    {
      id: "img3",
      icon: FaUnity,
      title: "Tank Shooter",
      description:
        "Implemented robust networking and synchronization for a competitive multiplayer game prototype.",
      technologies: ["Unreal Engine", "C++"],
      image: img3,
    },
    {
      id: "img4",
      icon: FaDesktop,
      title: "Third Person Shooter",
      description:
        "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
      technologies: ["Unreal Engine", "C++"],
      image: img4,
    },
  ];

  return (
    <div className="min-h-screen bg-black font-montserrat text-white flex flex-col">
      <div className="container mx-auto px-24 py-16">
        <div className="flex items-center justify-between space-x-16">
          <div className="flex-shrink-0">
            <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-gray-800 shadow-2xl">
              <img
                src={img}
                alt="Ashish Sakthi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="flex-grow">
            <div className="text-lg text-gray-400 space-y-4">
              <p>
                Enthusiastic and motivated Game Programmer with expertise in
                Unreal Engine C++ and AR/VR development using Unity. Skilled in
                designing immersive gameplay, implementing collision detection,
                and creating adaptive AI behaviors. Demonstrates strong
                problemsolving abilities and effective team collaboration to
                deliver innovative gaming experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Game Programming Projects Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-24">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Game Programming Projects
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                icon={project.icon}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                projectId={project.id}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1a2b4a] text-white py-16">
        <div className="container mx-auto px-24">
          <h2 className="text-3xl font-bold mb-6 text-blue-400">
            Hi, I'm Ashish Sakthi D
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I am an enthusiastic Game Programmer specializing in Unreal Engine
            C++ and AR/VR development. Currently pursuing a Bachelor of
            Technology in Computer Science and Business Systems at Bannari Amman
            Institute of Technology, I am passionate about creating immersive
            gameplay experiences and developing innovative solutions in the
            gaming industry.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I describe myself as a problem solver who enjoys tackling challenges
            and constantly refining my skills. I take pride in designing
            interactive environments, adaptive AI behaviors, and engaging game
            mechanics that enhance player experience. My expertise includes C++,
            C#, Unreal Engine, Unity, and AR/VR development, along with strong
            analytical thinking and teamwork.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
