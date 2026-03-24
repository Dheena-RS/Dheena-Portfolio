import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming & Web',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java']
  },
  {
    category: 'Frameworks & Databases',
    skills: ['React', 'Tailwind CSS', 'Bootstrap', 'MongoDB']
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VSCode', 'Ubuntu', 'Clerk', 'Excel', 'Power BI']
  }
];

export default function Skills() {
  return (
    <section className="py-20 relative bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-blue-500">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold text-white mb-6 tracking-wide">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-700/30 text-slate-300 rounded-lg text-sm font-medium border border-slate-700/50 hover:border-blue-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
