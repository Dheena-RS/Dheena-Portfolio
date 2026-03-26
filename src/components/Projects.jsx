import { motion } from 'framer-motion';
import { ExternalLink, Ticket, CloudSun } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';

const projects = [
  {
    title: 'Movie Ticket Booking (Quick-Show)',
    description: 'Developed a full-stack movie ticketing application with secure user authentication and account management using Clerk. Implemented robust database management using MongoDB to handle user data, dynamic showtimes, and real-time seat availability efficiently. Integrated TMDB API to automatically fetch and display current movie releases, cast details, and ratings dynamically.',
    icon: Ticket,
    tech: ['MERN Stack', 'Tailwind CSS', 'TMDB API', 'Stripe API', 'Inngest'],
    liveUrl: 'https://quickshows-xi.vercel.app/',
    githubUrl: 'https://github.com/Dheena-RS/Quick-Show.git'
  },
  {
    title: 'Weather Forecast',
    description: 'Built a dynamic weather dashboard that provides users with instant, accurate, real-time forecast data by integrating a third-party weather API. Enhanced the user visual experience by writing conditional rendering logic that programmatically updates weather condition icons based on live API responses.',
    icon: CloudSun,
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    liveUrl: 'https://weather-app-ruby-theta-22.vercel.app/',
    githubUrl: 'https://github.com/Dheena-RS/Weather-App'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Projects.
          </h2>
          <div className="w-12 h-px bg-[#333333] mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="card-minimal flex flex-col rounded-md overflow-hidden group hover:border-[#444444]"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="w-14 h-14 bg-[#111111] border border-[#222222] rounded-md flex items-center justify-center text-[#fafafa] mb-8 group-hover:bg-[#fafafa] group-hover:text-[#000000] transition-colors duration-300">
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#fafafa] mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-[#888888] text-base mb-8 flex-grow font-light leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-semibold text-[#cccccc]">
                        {tech}
                        {i < project.tech.length - 1 && <span className="text-[#333333] ml-2">•</span>}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 pt-6 border-t border-[#222222]">
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#fafafa] font-medium transition-colors">
                      <Github size={18} /> Code
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-[#888888] hover:text-[#fafafa] font-medium transition-colors">
                      <ExternalLink size={18} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
