import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center py-10 px-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-lg">
        <h2 className="text-4xl font-bold text-center text-teal-600">Get in Touch</h2>
        <p className="text-gray-600 text-center mt-4">Have questions or want to reach out? Contact me through the following channels:</p>

        <div className="mt-8 space-y-4">
          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut' }}>
            <FaEnvelope className="text-teal-500 w-6 h-6" />
            <a href="mailto:firosmalik.job@gmail.com" className="hover:underline text-teal-600">
              firosmalik.job@gmail.com
            </a>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}>
            <FaPhone className="text-teal-500 w-6 h-6" />
            <a href="https://wa.me/+6285236446961" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600">
              +62 852 3644 6961
            </a>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.4 }}>
            <FaFacebook className="text-teal-500 w-6 h-6" />
            <a href="https://www.facebook.com/profile.php?id=100008615866247" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600">
              Facebook Page
            </a>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.5 }}>
            <FaInstagram className="text-teal-500 w-6 h-6" />
            <a href="https://instagram.com/firos_malik" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600">
              @firos_malik
            </a>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}>
            <FaGithub className="text-teal-500 w-6 h-6" />
            <a href="https://github.com/Firosmalik000" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600">
              firosmalik000
            </a>
          </motion.div>

          <motion.div className="flex items-center justify-center space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.7 }}>
            <FaLinkedin className="text-teal-500 w-6 h-6" />
            <a href="https://www.linkedin.com/in/firos-malik-abdillah/" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-600">
              Firos Malik Abdillah
            </a>
          </motion.div>
        </div>

        <p className="text-gray-500 text-center text-sm mt-6">We look forward to hearing from you!</p>
      </div>
    </div>
  );
};

export default Contact;
