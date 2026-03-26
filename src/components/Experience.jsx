import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Data Warehouse Engineer",
    company: "NCR Atleos",
    duration: "Feb 2025 - Dec 2025",
    description: "Specialized in integrating ERP modules with data warehousing systems to ensure seamless data flow and integrity. Developed robust data pipelines and utilized SQL and Excel for ETL testing and data analysis. Designed multipage Power BI dashboards with slicers to help stakeholders drill down by region and product."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Experience.
          </h2>
          <div className="w-12 h-px bg-[#333333] mx-auto md:mx-0"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="card-minimal p-8 rounded-md hover:border-[#444444]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#fafafa] tracking-tight">{exp.role}</h3>
                  <div className="text-[#cccccc] font-medium mt-1">{exp.company}</div>
                </div>
                <div className="px-3 py-1 bg-[#111111] text-[#888888] rounded-sm text-sm border border-[#222222] inline-block w-fit">
                  {exp.duration}
                </div>
              </div>
              <p className="text-[#888888] font-light leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
