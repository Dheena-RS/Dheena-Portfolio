export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Dheena R S. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <a href="https://github.com/Dheena-RS" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/dheena-rs/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:rsdheenacse@gmail.com" className="text-slate-400 hover:text-white transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
