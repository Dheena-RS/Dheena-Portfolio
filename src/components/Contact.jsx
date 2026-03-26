import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = "54dbb303-a903-44fe-b7d2-356ab65adf65";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          ...formData
        })
      });

      const result = await response.json();

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-[#111111]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#fafafa] mb-4">
            Get In Touch.
          </h2>
          <div className="w-12 h-px bg-[#333333] mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-[#fafafa] mb-6 tracking-tight">Let's Connect</h3>
            <p className="text-[#888888] mb-10 leading-relaxed font-light text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#111111] rounded-sm border border-[#222222] text-[#fafafa] group-hover:bg-[#222222] transition-colors duration-300">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#fafafa] font-bold mb-1 tracking-wide text-sm uppercase">Email</h4>
                  <a href="mailto:rsdheenacse@gmail.com" className="text-[#888888] hover:text-[#fafafa] transition-colors font-light">rsdheenacse@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#111111] rounded-sm border border-[#222222] text-[#fafafa] group-hover:bg-[#222222] transition-colors duration-300">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#fafafa] font-bold mb-1 tracking-wide text-sm uppercase">Phone</h4>
                  <a href="tel:+916374382550" className="text-[#888888] hover:text-[#fafafa] transition-colors font-light">+91 6374382550</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-[#111111] rounded-sm border border-[#222222] text-[#fafafa] group-hover:bg-[#222222] transition-colors duration-300">
                  <MapPin size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#fafafa] font-bold mb-1 tracking-wide text-sm uppercase">Location</h4>
                  <p className="text-[#888888] font-light">Dharmapuri, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="card-minimal rounded-md p-8 lg:p-10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-sm text-green-400 text-sm font-medium">
                  Thanks for reaching out! Your message was sent successfully.
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-400 text-sm font-medium">
                  {errorMessage}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-[#888888] mb-2 tracking-widest uppercase">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-[#111111] border border-[#222222] rounded-sm px-4 py-3 text-[#fafafa] focus:outline-none focus:border-[#555555] transition-colors duration-300 disabled:opacity-50 placeholder-[#444444]"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#888888] mb-2 tracking-widest uppercase">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-[#111111] border border-[#222222] rounded-sm px-4 py-3 text-[#fafafa] focus:outline-none focus:border-[#555555] transition-colors duration-300 disabled:opacity-50 placeholder-[#444444]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#888888] mb-2 tracking-widest uppercase">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'submitting'}
                  className="w-full bg-[#111111] border border-[#222222] rounded-sm px-4 py-3 text-[#fafafa] focus:outline-none focus:border-[#555555] transition-colors duration-300 resize-none disabled:opacity-50 placeholder-[#444444]"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-[#fafafa] hover:bg-[#e0e0e0] text-[#000000] font-bold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'} 
                {status !== 'submitting' && <Send size={16} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
