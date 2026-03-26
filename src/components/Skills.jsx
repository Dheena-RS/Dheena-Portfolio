import { motion } from 'framer-motion';

const skills = [
  { category: 'Programming & Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'Java'] },
  { category: 'Framework & Database', items: ['React', 'Bootstrap', 'Tailwind CSS', 'MongoDB'] },
  { category: 'Tools', items: ['VSCode', 'eclipse', 'IntelliJ IDEA', 'Ubuntu', 'Git', 'Github', 'Clerk', 'Excel'] },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Skills.
          </h2>
          <div className="w-12 h-px bg-[#333333] mx-auto md:mx-0"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="card-minimal flex flex-col p-6 rounded-md hover:border-[#444444]"
            >
              <h3 className="text-lg font-medium text-[#fafafa] mb-6 tracking-tight border-b border-[#222222] pb-3">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-[#111111] text-[#888888] rounded-sm text-xs font-medium border border-[#222222] hover:text-[#fafafa] hover:border-[#444444] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
