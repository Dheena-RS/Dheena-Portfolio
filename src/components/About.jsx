import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Education & <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-blue-500" size={28} />
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
              <h4 className="text-xl font-bold text-white mb-2">B.Sc. Computer Science and Engineering</h4>
              <p className="text-blue-400 font-medium mb-2">Erode Sengunthar Engineering College</p>
              <div className="flex justify-between items-center text-slate-400 text-sm">
                <span>Graduated: 2025</span>
                <span className="bg-slate-700/50 px-3 py-1 rounded-full">CGPA: 7.10 / 10</span>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-blue-500" size={28} />
              <h3 className="text-2xl font-semibold text-white">Certifications</h3>
            </div>
            <div className="flex flex-col gap-4">
              {[ 
                { title: 'Deloitte Data Analytics Certificate', org: 'Tableau and Data Visualization', year: '2026' },
                { title: 'Infosys Springboard', org: 'Basics of Python', year: '2024' },
                { title: 'NPTEL', org: 'Foundation of Cloud, IoT, Edge, and ML', year: '2024' }
              ].map((cert, index) => (
                <div key={index} className="bg-slate-800/50 p-5 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                  <h4 className="font-bold text-white text-lg mb-1">{cert.title}</h4>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">{cert.org}</span>
                    <span className="text-purple-400">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
