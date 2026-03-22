import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function LuxuryLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      number: "01",
      title: "Brand Identity",
      description: "Crafting distinctive visual languages that resonate with your audience and elevate your market presence."
    },
    {
      number: "02",
      title: "Digital Experience",
      description: "Creating immersive digital journeys that captivate users and drive meaningful engagement."
    },
    {
      number: "03",
      title: "Strategic Design",
      description: "Aligning business objectives with creative excellence to deliver measurable impact."
    }
  ];

  const projects = [
    {
      title: "Lumière",
      category: "Luxury Hospitality",
      year: "2024"
    },
    {
      title: "Nexus Capital",
      category: "Financial Services",
      year: "2024"
    },
    {
      title: "Atelier",
      category: "Fashion & Lifestyle",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e5df] overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@200;300;400;500;600&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        .font-display {
          font-family: 'Cormorant Garamond', serif;
        }

        .font-body {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          z-index: 100;
        }

        .gradient-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #d4af37, transparent);
        }

        .service-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .service-card:hover::before {
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.1);
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .project-item {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .project-item:hover {
          color: #d4af37;
        }

        .text-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #d4af37;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.5s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateX(5px);
        }

        .bg-image-smooth {
          transition: all 0.6s ease-out;
        }

        .bg-image-smooth:hover {
          transform: scale(1.05);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .opacity-3 {
          opacity: 0.03;
        }

        /* Smooth background loading */
        .bg-cover {
          background-size: cover;
        }

        .bg-center {
          background-position: center;
        }

        .bg-no-repeat {
          background-repeat: no-repeat;
        }
      `}</style>

      {/* Grain texture overlay */}
      <div className="grain" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/10' : ''
        }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            <div className="font-display text-2xl font-light tracking-wider text-gradient">
              ÉLITE
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12 font-body text-sm font-light tracking-widest">
              <a href="#services" className="nav-link uppercase">Services</a>
              <a href="#work" className="nav-link uppercase">Work</a>
              <a href="#about" className="nav-link uppercase">About</a>
              <button className="px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300 uppercase tracking-wider">
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#d4af37]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-[#d4af37]/10 animate-fadeIn">
            <div className="px-6 py-8 space-y-6 font-body text-sm font-light tracking-widest">
              <a href="#services" className="block uppercase">Services</a>
              <a href="#work" className="block uppercase">Work</a>
              <a href="#about" className="block uppercase">About</a>
              <button className="w-full px-6 py-3 border border-[#d4af37] text-[#d4af37] uppercase tracking-wider">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://www.thedesignauthority.com.au/wp-content/uploads/2023/01/Luxury-Modern-Interior-Design-Ideas.jpg)',
              filter: 'brightness(0.3)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center space-y-8">
          <div className="space-y-4 opacity-0 animate-fadeInUp">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight">
              Crafting
            </h1>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-gradient">
              Distinction
            </h1>
          </div>

          <p className="font-body text-lg md:text-xl font-light tracking-wide text-[#e8e5df]/70 max-w-2xl mx-auto opacity-0 animate-fadeInUp delay-300">
            We create refined digital experiences that transcend convention and establish lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeInUp delay-500">
            <button className="cta-button px-8 py-4 bg-[#d4af37] text-[#0a0a0a] font-body text-sm font-medium tracking-widest uppercase flex items-center gap-2">
              Start a Project
              <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 border border-[#e8e5df]/20 font-body text-sm font-light tracking-widest uppercase hover:border-[#d4af37]/50 transition-all duration-300">
              View Portfolio
            </button>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn delay-600">
            <ChevronDown size={24} className="animate-bounce text-[#d4af37]/50" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-24 px-6 lg:px-12">
        {/* Marble Texture Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
            style={{
              backgroundImage: 'url(https://i.pinimg.com/originals/21/85/ac/2185acb38c15e5f40e40e15097cfeae6.jpg)',
              backgroundAttachment: 'fixed'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="font-body text-sm font-light tracking-widest uppercase text-[#d4af37] mb-4">
              Our Expertise
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light">
              Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card p-8 space-y-6 opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="font-display text-6xl font-light text-[#d4af37]/20">
                  {service.number}
                </div>
                <h3 className="font-display text-3xl font-normal">
                  {service.title}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed text-[#e8e5df]/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="gradient-line max-w-7xl mx-auto" />

      {/* Work Section */}
      <section id="work" className="relative py-24 px-6 lg:px-12">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-3"
            style={{
              backgroundImage: 'url(https://img.freepik.com/premium-photo/elegant-marble-texture-background-with-gold-highlights_1198457-28455.jpg)',
              backgroundAttachment: 'fixed'
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="mb-20">
            <p className="font-body text-sm font-light tracking-widest uppercase text-[#d4af37] mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light">
              Portfolio
            </h2>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item border-b border-[#e8e5df]/10 pb-8 opacity-0 animate-slideInRight"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-4xl md:text-5xl font-normal">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm font-light tracking-wider text-[#e8e5df]/60">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="font-body text-sm font-light tracking-wider text-[#d4af37]">
                      {project.year}
                    </span>
                    <ArrowRight size={24} className="text-[#d4af37]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 lg:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://www.carpentryguru.com/singapore/wp-content/uploads/2020/12/feature-image-ultra-luxury-living-room-1200x900.jpg)',
              filter: 'brightness(0.25) grayscale(20%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/80" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#d4af37]/10 to-transparent" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light">
            Let's Create
            <span className="block text-gradient mt-2">Something Remarkable</span>
          </h2>

          <p className="font-body text-lg font-light tracking-wide text-[#e8e5df]/70 max-w-2xl mx-auto">
            Transform your vision into an unforgettable digital experience.
          </p>

          <button className="cta-button px-12 py-5 bg-[#d4af37] text-[#0a0a0a] font-body text-sm font-medium tracking-widest uppercase flex items-center gap-3 mx-auto">
            Begin Your Journey
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/10 py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="font-display text-2xl font-light tracking-wider text-gradient">
              ÉLITE
            </div>

            <div className="flex gap-8 font-body text-xs font-light tracking-widest uppercase">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Behance</a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#e8e5df]/10 text-center">
            <p className="font-body text-xs font-light tracking-wider text-[#e8e5df]/40">
              © 2024 ÉLITE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
