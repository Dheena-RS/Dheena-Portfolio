import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="subtle-blur w-full"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3 group">
              {/* Optional logo image, keeping text minimal */}
              <span className="font-semibold text-lg tracking-tight text-[#fafafa]">
                Dheena R S
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-[#888888] hover:text-[#fafafa] transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-5 hidden md:flex">
            <a href="https://github.com/Dheena-RS" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#fafafa] transition-colors duration-200">
              <FiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/dheena-rs/" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#fafafa] transition-colors duration-200">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
