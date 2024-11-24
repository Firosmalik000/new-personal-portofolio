import { useState } from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const [tab, setTab] = useState('personal');

  const projects = {
    personal: [
      {
        id: 1,
        title: 'Portfolio Website',
        description: 'A personal website to showcase my skills, projects, and experiences.',
        techStack: ['React', 'Tailwind CSS', 'Vite'],
        img: 'https://via.placeholder.com/300',
        link: 'https://portfolio-example.com',
      },
      {
        id: 2,
        title: 'Weather App',
        description: 'An application that provides real-time weather updates using OpenWeatherMap API.',
        techStack: ['React', 'Axios', 'CSS Modules'],
        img: 'https://via.placeholder.com/300',
        link: 'https://weather-app-example.com',
      },
    ],
    client: [
      {
        id: 1,
        title: 'E-commerce Website',
        description: 'A fully functional e-commerce platform for an online store.',
        techStack: ['Next.js', 'Node.js', 'MongoDB'],
        img: 'https://via.placeholder.com/300',
        link: 'https://ecommerce-example.com',
      },
      {
        id: 2,
        title: 'Company Profile Website',
        description: 'A responsive company profile website for a local business.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        img: 'https://via.placeholder.com/300',
        link: 'https://company-profile-example.com',
      },
    ],
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-5 py-10">
      <div className="max-w-7xl w-full  rounded-lg overflow-hidden p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Projects</h1>
        <div className="flex justify-center gap-x-4 mb-6">
          <motion.button
            onClick={() => setTab('personal')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out ${
              tab === 'personal' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500'
            }`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Personal
          </motion.button>
          <motion.button
            onClick={() => setTab('client')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-in-out ${
              tab === 'client' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-teal-500'
            }`}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Client
          </motion.button>
        </div>

        {/* Carousel Container */}
        <div className="overflow-x-auto flex gap-6 scrollbar-hide">
          {tab === 'personal' &&
            projects.personal.map((project) => (
              <motion.div
                key={project.id}
                className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] shrink-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-teal-600 hover:underline">
                  View Project
                </a>
              </motion.div>
            ))}
          {tab === 'client' &&
            projects.client.map((project) => (
              <motion.div
                key={project.id}
                className="border rounded-lg p-4 hover:shadow-lg transition-all duration-300 ease-in-out w-[300px] shrink-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 * project.id }}
              >
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800">{project.title}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-teal-600 hover:underline">
                  View Project
                </a>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
