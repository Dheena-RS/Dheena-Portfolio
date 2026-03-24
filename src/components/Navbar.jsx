import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img 
                src={logoImg} 
                alt="RS Logo" 
                className="h-10 w-auto object-contain rounded-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-bold text-xl tracking-tighter text-white ml-2">
                DHEENA<span className="text-blue-500"> </span>R S
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-slate-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/Dheena-RS" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/dheena-rs/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <FiLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
