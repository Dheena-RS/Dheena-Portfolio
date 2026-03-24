import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import profileImg from '../assets/cout photo.png'; // We'll use this placeholder assuming user saves it here

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-500 font-medium tracking-wide mb-4">FRONT-END DEVELOPER</h2>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Crafting intuitive <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              user experiences.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl"
          >
            Hi, I'm Dheena R S. I'm passionate about creative problem-solving and building intuitive, responsive web applications. Eager to contribute technical skills to deliver high-quality, user-centric solutions.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 rounded-full font-medium flex items-center gap-2 transition-colors"
            >
              <FileText size={18} /> Resume
            </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex justify-center relative"
          >
            <div className="relative w-72 h-96 lg:w-80 lg:h-[400px] rounded-3xl p-1 bg-gradient-to-tr from-blue-500 to-purple-500 overflow-visible shadow-2xl">
              <div className="w-full h-full rounded-3xl overflow-hidden bg-slate-800 border-4 border-slate-900">
                <img 
                  src={profileImg} 
                  alt="Dheena R S" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to hero.png if profile.jpg is not found
                    e.target.src = new URL('../assets/hero.png', import.meta.url).href;
                  }}
                />
              </div>
            </div>
            
            {/* Decorative floating elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="text-blue-400 font-bold text-sm">React</div>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-10 bg-slate-800/80 backdrop-blur p-3 rounded-xl border border-slate-700 shadow-xl"
            >
              <div className="text-purple-400 font-bold text-sm">Frontend</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
