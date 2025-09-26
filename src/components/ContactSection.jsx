import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Menggunakan EmailJS atau service similar untuk mengirim email
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fallback jika API route tidak tersedia
  const handleFallbackSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi pengiriman email
    setTimeout(() => {
      const mailtoLink = `mailto:nisamudin0407@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Cont<span className="text-blue-400">act</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Let's start a conversation about your next project or collaboration opportunity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and interesting projects. 
                Whether you have a question or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:nisamudin0407@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                    nisamudin0407@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Tulungagung, Jawa Timur, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/ImNizamudin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 hover:bg-blue-600 transition-all duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/muhammad-nizamudin-mahfud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 hover:bg-blue-600 transition-all duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:nisamudin0407@gmail.com"
                  className="flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-lg hover:border-blue-400 hover:bg-blue-600 transition-all duration-200"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">Available for new projects</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">Currently accepting freelance work and collaboration opportunities</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            {/* Status Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 font-medium">Message sent successfully!</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Thank you for your message. I'll get back to you soon!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-red-400 font-medium">Failed to send message</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Please try again or contact me directly via email.</p>
              </div>
            )}

            <form onSubmit={handleFallbackSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input 
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input 
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 resize-none transition-colors duration-200"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;