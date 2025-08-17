import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { LinkedInIcon, GitHubIcon, InstagramIcon } from './icons';
import useScrollReveal from './useScrollReveal';
import emailjs from "@emailjs/browser";

function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_wdecepg",       //EmailJS service ID
      "template_vzkvniq",      //EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      "2XJtYfKJD7---0frC"        //EmailJS public key
    )
    .then(() => {
      setStatus("Message sent successfully ✅");
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      setStatus("Something went wrong ❌ Try again later.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div id="contact" className="m-4 lg:m-6 card scroll-reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl sm:text-4xl text-center md:text-left mb-6 text-gradient">
          Get In Touch
        </h2>
        
        <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
          I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers. 
          Feel free to reach out if you'd like to discuss a project, share ideas, or simply say hello!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-text-primary mb-6">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email</p>
                  <a href="mailto:sumitpatel2907@gmail.com" className="text-text-primary hover:text-primary transition-colors">
                    sumitpatel2907@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <LinkedInIcon className="text-accent w-5 h-5" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/sumit-patel-42697b324/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Location</p>
                  <p className="text-text-primary">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-text-muted text-sm mb-4">Follow me on</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/sumit-patel-42697b324/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:transform hover:-translate-y-1"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon className="text-text-primary w-4 h-4" />
                </a>
                <a 
                  href="https://github.com/sumitpatel-2322" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:transform hover:-translate-y-1"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon className="text-text-primary w-4 h-4" />
                </a>
                <a 
                  href="https://www.instagram.com/_sumit._0815?igsh=MWN5czJ6b3Bqa2s5bg==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-surface-secondary hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-200 hover:transform hover:-translate-y-1"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="text-text-primary w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows="6"
                  required
                  className="w-full px-4 py-3 bg-surface-secondary border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full flex items-center justify-center gap-2 group"
              >
                <Send size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p className="text-center text-sm mt-2 text-text-secondary">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
