import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from '../assets/cout photo.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-[90vh] flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="text-[#888888] font-medium tracking-widest uppercase text-xs mb-6">
              Front-End Developer
            </motion.p>
          
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-[#fafafa] mb-6 leading-[1.05]"
            >
              Crafting intuitive <br/>
              <span className="text-[#888888]">
                user experiences.
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-[#666666] mb-10 leading-relaxed max-w-lg font-light"
            >
              Aspiring Front-End Developer with a strong foundation in HTML, CSS, JavaScript. Passionate about creative problem-solving and building intuitive, responsive user experiences. Eager to contribute technical skills to a collaborative team while leveraging a growth mindset to deliver high-quality, user-centric web solutions.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#projects" 
                className="px-7 py-3 bg-[#fafafa] hover:bg-[#e0e0e0] text-[#000000] rounded-sm font-semibold flex items-center gap-2 transition-colors duration-200"
              >
                View Work <ArrowRight size={18} />
              </a>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 bg-transparent border border-[#333333] hover:border-[#fafafa] text-[#fafafa] rounded-sm font-medium flex items-center gap-2 transition-colors duration-200"
              >
                <Download size={18} /> Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
          >
            <div className="relative w-64 h-80 lg:w-[320px] lg:h-[400px]">
              {/* Subtle architectural frame instead of wild colors */}
              <div className="absolute inset-0 border border-[#222222] translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-[#0a0a0a] border border-[#333333] overflow-hidden transition-all duration-700">
                <img 
                  src={profileImg} 
                  alt="Dheena R S" 
                  className="w-full h-full object-cover object-top opacity-80 hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.target.src = new URL('../assets/hero.png', import.meta.url).href;
                  }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
