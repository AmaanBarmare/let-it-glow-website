import { useState, useEffect } from 'react';
import { Phone, Mail, Shield, Users, Home, Wrench, Sparkles, Package, CheckCircle, Menu, X, Instagram, Facebook, Upload, MessageCircle, Lightbulb } from 'lucide-react';
import Snow from './components/Snow';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetAddress: '',
    town: '',
    message: '',
    photos: null as FileList | null,
  });
  
  const backgroundImages = ['/gallery1.jpg', '/gallery7.jpg', '/gallery3.jpg'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100">
      <Snow />
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/85 backdrop-blur-lg border-b border-gray-800/50 shadow-sm shadow-black/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/let_it_glow_transparent.png" alt="Let It Glow" className="w-12 h-12" />
              <span className="hidden sm:inline font-bold text-lg text-white">Let It Glow</span>
            </a>

            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-gray-200 hover:text-red-400 transition-colors text-[0.95rem] font-medium tracking-wide">Services</a>
              <a href="#gallery" className="text-gray-200 hover:text-red-400 transition-colors text-[0.95rem] font-medium tracking-wide">Gallery</a>
              <a href="#how-it-works" className="text-gray-200 hover:text-red-400 transition-colors text-[0.95rem] font-medium tracking-wide">How It Works</a>
              <a href="#contact" className="text-gray-200 hover:text-red-400 transition-colors text-[0.95rem] font-medium tracking-wide">Contact</a>
              <div className="flex items-center gap-3 border-l border-gray-700 pl-6">
                <a 
                  href="https://www.instagram.com/letitglowholidaylighting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61560141042599" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
              </div>
              <a href="tel:+12015275215" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-500/30 hover:scale-105 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            <button
              className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-800 pt-4">
              <a href="#services" className="block text-gray-300 hover:text-red-500 transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#gallery" className="block text-gray-300 hover:text-red-500 transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#how-it-works" className="block text-gray-300 hover:text-red-500 transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#contact" className="block text-gray-300 hover:text-red-500 transition-colors py-2 font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="flex items-center justify-center gap-4 py-4">
                <a 
                  href="https://www.instagram.com/letitglowholidaylighting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on Instagram"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61560141042599" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Follow us on Facebook"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
              <a href="tel:+12015275215" className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-center font-semibold transition-all mt-4">Call Now</a>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home" className="relative overflow-hidden py-20 px-6 min-h-[90vh] flex items-center scroll-mt-24">
          {/* Background Images Carousel */}
          <div className="absolute inset-0 overflow-hidden">
            {backgroundImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentBgImage ? 'opacity-80' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Holiday lighting background ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-[#0f0f0f]/65 to-black/80"></div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-60 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-30">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.9)]">
              Make Your Home <span className="text-red-500">Glow</span><br />
              This Holiday Season
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.75)]">
              Professional Holiday Lighting, Done Right
            </p>

            <p className="text-lg text-gray-200/95 mb-8 max-w-2xl mx-auto [text-shadow:0_1px_10px_rgba(0,0,0,0.7)]">
              Let It Glow is a Holiday Lighting leasing service which Provides Design, Installation and storage for holiday decor - fully insured and handled by professionals.
            </p>

            <div className="mb-12 flex flex-wrap justify-center items-center gap-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/20 to-green-600/20 px-6 py-3 rounded-full border border-red-500/30">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-white font-bold text-lg">2000+</span>
                <span className="text-gray-300">Jobs Completed</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600/20 to-green-600/20 px-6 py-3 rounded-full border border-green-500/30">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-white font-bold text-lg">Fully Insured</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+12015275215"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-[#151515]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 bg-[#1f1f1f] rounded-2xl border border-gray-800 hover:border-green-700/50 transition-all">
                <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-green-700/50">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">Fully Insured</h3>
                <p className="text-sm text-gray-400">Licensed & Protected</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#1f1f1f] rounded-2xl border border-gray-800 hover:border-red-700/50 transition-all">
                <div className="w-16 h-16 bg-red-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-red-700/50">
                  <Users className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">2000+ Jobs</h3>
                <p className="text-sm text-gray-400">Proven Experience</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#1f1f1f] rounded-2xl border border-gray-800 hover:border-yellow-700/50 transition-all">
                <div className="w-16 h-16 bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-yellow-700/50">
                  <Home className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">Residential & Commercial</h3>
                <p className="text-sm text-gray-400">All Properties</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-[#1a1a1a] scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              Our <span className="text-green-500">Services</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              Everything you need for a stress-free holiday season
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-red-700/50">
                  <Sparkles className="w-7 h-7 text-red-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Holiday Light Design</h3>
                <p className="text-gray-400 leading-relaxed">Custom designs that bring your vision to life</p>
              </div>

              <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-green-700/50">
                  <Home className="w-7 h-7 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Professional Installation</h3>
                <p className="text-gray-400 leading-relaxed">Safe, efficient setup by experienced professionals</p>
              </div>

              <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-yellow-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-yellow-700/50">
                  <Wrench className="w-7 h-7 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Maintenance & Repairs</h3>
                <p className="text-gray-400 leading-relaxed">We keep your lights glowing all season long</p>
              </div>

              <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-700/50">
                  <Package className="w-7 h-7 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Removal & Storage</h3>
                <p className="text-gray-400 leading-relaxed">Hassle-free takedown and safe storage for holiday decor until next year</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-[#151515] to-[#1a1a1a]">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              See the <span className="text-red-500">Glow-Up</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg">
              Every home is custom-designed to shine
            </p>

            <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 md:p-12 rounded-3xl border border-gray-800 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-[#0f0f0f] p-2 rounded-xl inline-block">
                    <span className="text-gray-400 font-semibold px-4 py-2">Before</span>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center border border-gray-700">
                    <p className="text-gray-500 text-lg">Unlit Home</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-red-600 to-green-600 p-2 rounded-xl inline-block">
                    <span className="text-white font-semibold px-4 py-2">After</span>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-red-900/20 via-green-900/20 to-yellow-900/20 rounded-2xl flex items-center justify-center border-2 border-yellow-500/50 shadow-xl shadow-yellow-500/30">
                    <Sparkles className="w-16 h-16 text-yellow-400 animate-pulse" />
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mt-8 text-lg italic">
                "Transform your home into the neighborhood showpiece"
              </p>
            </div>
          </div>
        </section> */}

        <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-[#151515] to-[#1a1a1a] scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              <span className="text-green-500">Gallery</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 text-lg">
              See our stunning holiday lighting transformations
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div
                  key={num}
                  className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
                >
                  <div className="aspect-square overflow-hidden bg-[#1f1f1f]">
                    <img
                      src={`/gallery${num}.jpg`}
                      alt={`Gallery image ${num} - Holiday lighting transformation`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-green-400" />
                        <span className="text-white text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="https://www.instagram.com/letitglowholidaylighting/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/30 hover:shadow-green-500/50"
              >
                <Instagram className="w-5 h-5" />
                View More on Instagram
              </a>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 px-6 bg-[#1a1a1a] scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              How It <span className="text-green-500">Works</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Three simple steps to holiday magic
            </p>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 opacity-20"></div>

              <div className="relative flex">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-red-500/50 transition-all text-center w-full flex flex-col flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-red-500/50 border-4 border-[#1a1a1a]">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Free Quote & Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We visit your property, discuss your vision, and create a custom lighting plan
                  </p>
                </div>
              </div>

              <div className="relative flex">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all text-center w-full flex flex-col flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-green-500/50 border-4 border-[#1a1a1a]">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Professional Installation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our expert team brings your design to life with safe, quality installation
                  </p>
                </div>
              </div>

              <div className="relative flex">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-yellow-500/50 transition-all text-center w-full flex flex-col flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-yellow-500/50 border-4 border-[#1a1a1a]">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enjoy - We Handle the Rest</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Relax while we maintain, repair, and remove your lights when the season ends
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 bg-gradient-to-br from-red-950/30 via-[#1a1a1a] to-green-950/30 border-y border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Lightbulb className="w-16 h-16 text-yellow-400 mx-auto animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Light Up <span className="text-red-500">Your Home?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Limited installation slots available during peak season
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:+12015275215"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="bg-green-700 hover:bg-green-800 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                Request a Quote
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-amber-100/95 max-w-xl mx-auto">
              <CheckCircle className="w-5 h-5 shrink-0 text-amber-300" aria-hidden />
              <span className="text-sm sm:text-base font-medium text-center [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                Book now and secure your spot before we&apos;re fully booked!
              </span>
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-gradient-to-b from-[#141414] via-[#0f0f0f] to-[#0a0a0a] py-14 px-6 border-t border-gray-800/80 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10 items-start">
              <div className="text-center md:text-left">
                <img
                  src="/let_it_glow_transparent.png"
                  alt="Let It Glow Holiday Lighting"
                  className="w-32 h-32 mx-auto md:mx-0 mb-4"
                />
                <p className="text-gray-400 text-sm">
                  Let It Glow Holiday Lighting provides Design, Installation and storage for holiday decor. Serving New Milford, NJ and surrounding areas.
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-white mb-4 text-lg flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Contact Us
                </h3>
                <div className="space-y-2 mb-4">
                  <a href="tel:+12015275215" className="flex items-center justify-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>(201) 527-5215</span>
                  </a>
                  <a href="mailto:LetitglowholidayLighting@gmail.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>LetitglowholidayLighting@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <a 
                    href="https://www.instagram.com/letitglowholidaylighting/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-pink-500/50"
                    aria-label="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href="https://www.facebook.com/profile.php?id=61560141042599" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-blue-500/50"
                    aria-label="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right flex flex-col items-center md:items-end gap-4">
                <h3 className="font-bold text-white text-lg">Service Area</h3>
                <p className="text-gray-400 max-w-xs md:max-w-none md:ml-auto">New Milford, NJ, United States, New Jersey</p>
                <div className="inline-flex items-center gap-2 bg-green-900/30 px-4 py-2.5 rounded-full border border-green-700/50">
                  <Shield className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-green-400 font-semibold">Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800/80 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2026 Let It Glow Holiday Lighting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Quote Request Modal */}
      {quoteModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setQuoteModalOpen(false)}
        >
          <div 
            className="bg-[#1a1a1a] rounded-2xl border border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Request a Free Quote</h2>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <form 
              className="p-6 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                // Handle form submission here
                console.log('Form submitted:', formData);
                // You can add API call or email sending logic here
                alert('Thank you for your request! We will contact you soon.');
                setQuoteModalOpen(false);
                // Reset form
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  streetAddress: '',
                  town: '',
                  message: '',
                  photos: null,
                });
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="(201) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="streetAddress" className="block text-sm font-medium text-gray-300 mb-2">
                  Street Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="streetAddress"
                  required
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="123 Main Street"
                />
              </div>

              <div>
                <label htmlFor="town" className="block text-sm font-medium text-gray-300 mb-2">
                  Town <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="town"
                  required
                  value={formData.town}
                  onChange={(e) => setFormData({ ...formData, town: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                  placeholder="New Milford, NJ"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#0f0f0f] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors resize-none"
                  placeholder="Tell us about your lighting needs..."
                />
              </div>

              <div>
                <label htmlFor="photos" className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Photos (Optional)
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer bg-[#0f0f0f] hover:border-green-500 transition-colors">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                    <input
                      type="file"
                      id="photos"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setFormData({ ...formData, photos: e.target.files })}
                    />
                  </label>
                </div>
                {formData.photos && formData.photos.length > 0 && (
                  <p className="mt-2 text-sm text-gray-400">
                    {formData.photos.length} file(s) selected
                  </p>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setQuoteModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-green-700 hover:bg-green-800 text-white rounded-lg font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
