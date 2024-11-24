import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'PT Hash Rekayasa Teknologi',
      type: 'Contract',
      position: 'Front End Developer',
      duration: 'January 2024 - July 2024',
      desc: ['Mengembangkan antarmuka pengguna dengan React dan Tailwind CSS.', 'Berkolaborasi dengan tim backend untuk mengintegrasikan API.', 'Mengoptimalkan performa aplikasi untuk pengalaman pengguna yang lebih baik.'],
    },
    {
      id: 2,
      company: 'PT Inti Surya Laboratorium',
      type: 'Contract',
      position: 'IT Programmer',
      duration: 'September 2022 - now',
      desc: ['Mendesain ulang fitur aplikasi untuk responsivitas di berbagai perangkat.', 'Mengimplementasikan komponen reusable untuk meningkatkan produktivitas.', 'Membantu debugging dan pengujian aplikasi sebelum peluncuran.'],
    },
    {
      id: 3,
      company: 'DB Klik',
      type: 'Freelance',
      position: 'Front End Developer',
      duration: 'September 2022 - now',
      desc: ['Mendesain ulang fitur aplikasi untuk responsivitas di berbagai perangkat.', 'Mengimplementasikan komponen reusable untuk meningkatkan produktivitas.', 'Membantu debugging dan pengujian aplikasi sebelum peluncuran.'],
    },
  ];

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-50 px-5 py-10">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center text-teal-600 mb-10">My Experiences</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-white border-l-4 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{
                borderLeftColor: experience.type === 'Contract' ? '#2dd4bf' : experience.type === 'Freelance' ? '#fb923c' : '#60a5fa',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 * experience.id }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{experience.position}</h2>
              <p className={`${experience.type === 'Contract' ? 'text-teal-600' : 'text-orange-500'} text-sm font-medium mb-1`}>{experience.type}</p>
              <p className="text-gray-700 font-medium">{experience.company}</p>
              <p className="text-gray-500 text-sm mb-4">{experience.duration}</p>
              <ul className="list-disc pl-5 text-gray-600 text-sm space-y-2">
                {experience.desc.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
