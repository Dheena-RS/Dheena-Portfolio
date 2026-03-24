import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional <span className="text-blue-500">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="relative border-l border-slate-700/50 pl-8 ml-4 md:ml-0">
          {/* Timeline Item */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] top-1 bg-blue-500 rounded-full p-2 border-4 border-slate-900">
              <Briefcase size={16} className="text-white" />
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">Data Warehouse Engineer</h3>
                  <p className="text-blue-400 font-medium text-lg">NCR Atleos</p>
                </div>
                <div className="flex flex-col md:items-end text-slate-400 text-sm">
                  <span className="bg-slate-700/50 px-3 py-1 rounded-full mb-2 w-fit">Feb 2025 – Dec 2025</span>
                  <span>Remote</span>
                </div>
              </div>
              
              <ul className="space-y-3 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Specialized in integrating ERP modules with data warehousing systems to ensure seamless data flow and integrity.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Developed robust data pipelines and utilized SQL and Excel for ETL testing and data analysis.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-1">▹</span>
                  <span>Designed multipage Power BI dashboards with slicers to help stakeholders drill down by region and product.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
