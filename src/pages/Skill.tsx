import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaLaptopCode, FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress, SiFramer } from 'react-icons/si';

const Skill = () => {
  const skills = [
    { id: 1, name: 'JavaScript', icon: <FaJs className="text-yellow-500 w-10 h-10" /> },
    { id: 2, name: 'React JS', icon: <FaReact className="text-blue-500 w-10 h-10" /> },
    { id: 3, name: 'Node JS', icon: <FaNodeJs className="text-green-500 w-10 h-10" /> },
    { id: 4, name: 'CSS', icon: <FaCss3Alt className="text-blue-400 w-10 h-10" /> },
    { id: 5, name: 'TypeScript', icon: <FaLaptopCode className="text-teal-500 w-10 h-10" /> },
    { id: 6, name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-500 w-10 h-10" /> },
    { id: 7, name: 'Framer Motion', icon: <SiFramer className="text-purple-500 w-10 h-10" /> },
    { id: 8, name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-10 h-10" /> },
    { id: 9, name: 'MongoDB', icon: <SiMongodb className="text-green-600 w-10 h-10" /> },
    { id: 10, name: 'MySQL', icon: <SiMysql className="text-blue-600 w-10 h-10" /> },
    { id: 11, name: 'Express JS', icon: <SiExpress className="text-gray-500 w-10 h-10" /> },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-10 px-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-teal-600 mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 * skill.id }}
          >
            {skill.icon}
            <h3 className="text-lg font-semibold text-gray-700 mt-4">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
