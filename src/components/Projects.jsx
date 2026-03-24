import { motion } from 'framer-motion';
import { ExternalLink, Ticket, CloudRain, Brain } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Movie Ticket Booking',
    description: 'A full-stack movie ticketing application with secure user authentication and account management using Clerk, handling dynamic showtimes and real-time seat availability efficiently.',
    tech: ['MERN Stack', 'Tailwind CSS', 'TMDB API', 'Stripe API', 'Inngest'],
    github: 'https://github.com/Dheena-RS/Quick-Show.git',
    live: 'https://quickshows-xi.vercel.app/',
    icon: <Ticket className="text-purple-500" size={32} />
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'Dynamic weather dashboard providing users with instant, accurate, real-time forecast data. Features programmatic updates to weather condition icons based on live API responses.',
    tech: ['HTML', 'CSS', 'JavaScript', 'OpenWeatherMap API'],
    github: 'https://github.com/Dheena-RS/Weather-App',
    live: 'https://weather-app-ruby-theta-22.vercel.app/',
    icon: <CloudRain className="text-blue-500" size={32} />
  },
  {
    title: 'Quizz-Game',
    description: 'An interactive quiz application designed to test general knowledge. Built with vanilla JavaScript, featuring dynamic scoring, responsive UI, and immediate feedback for an engaging user experience.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Dheena-RS/Quizz-game',
    live: 'https://quizz-game-nine.vercel.app/',
    icon: <Brain className="text-pink-500" size={32} />
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-slate-900/50 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="flex flex-col h-full bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="bg-slate-700/50 p-4 rounded-xl flex items-center justify-center">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <FiGithub size={22} />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={22} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(tech => (
                  <span key={tech} className="text-xs font-mono text-blue-300 bg-blue-900/20 px-3 py-1 rounded-full border border-blue-800/30">
                    {tech}
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
