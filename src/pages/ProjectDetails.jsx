import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaGamepad, FaCode, FaUnity, FaDesktop } from "react-icons/fa";

// Import project images (keeping for fallback)
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const projectDetails = {
  img1: {
    title: "Interactive Skill Enhancer For Children With ASD and ID",
    icon: FaGamepad,
    image: img1,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual project video
    technologies: ["Unity", "AR/VR"],
    description:
      "An advanced terrain generation system with dynamic biome creation and realistic landscape rendering.",
    fullDescription: `
      The Procedural World Generator is a cutting-edge terrain generation system developed in Unity, showcasing advanced procedural generation techniques. 
      The project leverages sophisticated algorithms to create dynamic, realistic landscapes with unique biome distributions.

      Key Features:
      - Dynamic terrain generation using Perlin noise and fractal algorithms
      - Realistic biome creation with smooth transitions
      - Adaptive terrain detail based on player proximity
      - Optimized rendering techniques for large-scale landscapes
    `,
    challenges: [
      "Implementing efficient noise generation algorithms",
      "Creating natural-looking terrain transitions",
      "Optimizing performance for large-scale worlds",
    ],
    learnings: [
      "Advanced procedural generation techniques",
      "Noise algorithm implementation",
      "Terrain rendering optimization",
    ],
  },
  img2: {
    title: "Obstacle Overrun",
    icon: FaCode,
    image: img2,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual project video
    technologies: ["Unreal Engine", "C++"],
    description:
      "Developed a flexible AI decision-making framework for complex NPC interactions and game logic.",
    fullDescription: `
      The AI Behavior Tree System is a sophisticated decision-making framework designed to create intelligent and adaptive NPC behaviors.
      Implemented in Unreal Engine, the system provides a flexible and extensible approach to game AI.

      Key Features:
      - Hierarchical behavior tree architecture
      - Dynamic task composition and prioritization
      - Context-aware decision making
      - Modular and easily extensible design
    `,
    challenges: [
      "Creating a flexible and performant AI decision system",
      "Implementing complex behavior hierarchies",
      "Ensuring realistic and unpredictable NPC behaviors",
    ],
    learnings: [
      "Advanced AI programming techniques",
      "Behavior tree design patterns",
      "Complex system architecture",
    ],
  },
  img3: {
    title: "Tank Shooter",
    icon: FaUnity,
    image: img3,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual project video
    technologies: ["Unreal Engine", "C++"],
    description:
      "Implemented robust networking and synchronization for a competitive multiplayer game prototype.",
    fullDescription: `
      The Multiplayer Combat Mechanics project focuses on creating a robust networking solution for a competitive multiplayer game.
      Utilizing Unity Netcode and Photon, the system ensures smooth, synchronized gameplay across multiple clients.

      Key Features:
      - Lag compensation techniques
      - Client-side prediction
      - Server-authoritative gameplay mechanics
      - Seamless player interaction and combat systems
    `,
    challenges: [
      "Implementing reliable network synchronization",
      "Handling latency and network variations",
      "Ensuring fair and responsive combat mechanics",
    ],
    learnings: [
      "Multiplayer networking principles",
      "Synchronization techniques",
      "Network programming best practices",
    ],
  },
  img4: {
    title: "Third Person Shooter",
    icon: FaDesktop,
    image: img4,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with actual project video
    technologies: ["Unreal Engine", "C++"],
    description:
      "Created innovative gameplay systems leveraging advanced physics simulations and interactions.",
    fullDescription: `
      The Physics-Based Gameplay Mechanics project explores advanced physics interactions to create unique and engaging gameplay experiences.
      Developed in Godot, the project demonstrates sophisticated use of physics engines in game design.

      Key Features:
      - Complex object interaction systems
      - Dynamic environmental physics
      - Realistic material and collision responses
      - Innovative gameplay mechanics driven by physics
    `,
    challenges: [
      "Creating realistic and predictable physics interactions",
      "Balancing gameplay mechanics with physical accuracy",
      "Optimizing performance of complex physics simulations",
    ],
    learnings: [
      "Advanced physics engine integration",
      "Gameplay design through physics",
      "Performance optimization techniques",
    ],
  },
};

function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectDetails[projectId];

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  const ProjectIcon = project.icon;

  return (
    <div className="min-h-screen bg-black font-montserrat text-white">
      {/* Project Details Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Project Video */}
          <div className="w-full order-1 md:order-none">
            <div className="rounded-lg overflow-hidden shadow-2xl aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={project.videoUrl}
                title={`${project.title} Video`}
                frameBorder="0"
                allow="autoplay; accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Project Information */}
          <div className="order-2 md:order-none px-4 sm:px-8 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center mb-8 lg:mb-12">
              <ProjectIcon
                className="text-blue-500 mb-4 sm:mr-6 sm:mb-0"
                size={40}
                md:size={48}
              />
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center sm:text-left">
                {project.title}
              </h1>
            </div>

            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                Technologies
              </h2>
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-900 text-blue-300 px-3 py-1.5 rounded-full text-sm md:text-base"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                Description
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center sm:text-left">
                {project.fullDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                  Challenges
                </h2>
                <ul className="list-disc list-inside text-gray-300 text-center sm:text-left text-base md:text-lg space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-center sm:text-left">
                  Learnings
                </h2>
                <ul className="list-disc list-inside text-gray-300 text-center sm:text-left text-base md:text-lg space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index}>{learning}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
