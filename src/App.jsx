import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-[#fafafa] selection:bg-white/20 overflow-hidden relative font-sans">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
