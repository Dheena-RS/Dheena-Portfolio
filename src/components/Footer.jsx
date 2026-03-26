export default function Footer() {
  return (
    <footer className="border-t border-[#111111] bg-[#000000] py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#666666] font-light text-sm tracking-wide">
          © {new Date().getFullYear()} Dheena R S. All rights reserved.
        </p>
        <div className="flex gap-8 text-sm font-medium">
          <a href="https://github.com/Dheena-RS" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#fafafa] transition-colors duration-200">GitHub</a>
          <a href="https://www.linkedin.com/in/dheena-rs/" target="_blank" rel="noreferrer" className="text-[#888888] hover:text-[#fafafa] transition-colors duration-200">LinkedIn</a>
          <a href="mailto:rsdheenacse@gmail.com" className="text-[#888888] hover:text-[#fafafa] transition-colors duration-200">Email</a>
        </div>
      </div>
    </footer>
  );
}
