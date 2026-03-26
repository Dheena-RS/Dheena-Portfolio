import { motion } from 'framer-motion';
import { Award, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            About Me.
          </h2>
          <div className="w-12 h-px bg-[#333333] mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="card-minimal rounded-md p-8 lg:p-10 text-[#888888] leading-relaxed font-light text-lg">
              <p className="mb-6">
                I am an aspiring Front-End Developer with a strong foundation in web technologies and a B.E. in Computer Science and Engineering from Erode Sengunthar Engineering College.
              </p>
              <p className="mb-6">
                My passion lies in creative problem-solving and building intuitive, responsive user experiences. I thrive on translating complex ideas into elegant code, constantly seeking out new challenges to refine my skills in React, JavaScript, and modern CSS frameworks.
              </p>
              <p>
                I am eager to contribute my technical expertise to a collaborative team. By leveraging a growth mindset, I aim to consistently deliver high-quality, user-centric web solutions that drive real-world impact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="card-minimal p-6 rounded-md hover:border-[#333333]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#111111] rounded-sm text-[#fafafa] border border-[#222222]">
                  <BookOpen size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#fafafa] mb-2 tracking-tight">Education</h3>
                  <h4 className="text-[#cccccc] font-medium">B.E. Computer Science and Engineering</h4>
                  <p className="text-[#666666] text-sm mt-1">Erode Sengunthar Engineering College</p>
                  <p className="text-[#666666] text-sm mt-1">CGPA: 7.10 / 10 | Graduated: 2025</p>
                </div>
              </div>
            </div>

            <div className="card-minimal p-6 rounded-md hover:border-[#333333]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#111111] rounded-sm text-[#fafafa] border border-[#222222]">
                  <Award size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#fafafa] mb-2 tracking-tight">Certifications</h3>
                  <ul className="space-y-3">
                    <li className="text-[#cccccc] text-sm flex flex-col">
                      <span className="font-medium text-[#cccccc]">Deloitte Data Analytics Certificate</span>
                      <span className="text-[#666666]">Tableau and Data Visualization (2026)</span>
                    </li>
                    <li className="text-[#cccccc] text-sm flex flex-col">
                      <span className="font-medium text-[#cccccc]">Infosys Springboard</span>
                      <span className="text-[#666666]">Basics of Python (2024)</span>
                    </li>
                    <li className="text-[#cccccc] text-sm flex flex-col">
                      <span className="font-medium text-[#cccccc]">NPTEL</span>
                      <span className="text-[#666666]">Foundation of Cloud, IoT, Edge, and ML (2024)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
