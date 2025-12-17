import { useState } from 'react';
import { Phone, Mail, Shield, Users, Home, Wrench, Sparkles, Package, CheckCircle, Menu, X } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-gray-100">
      <nav className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/letitglowholidaylighting.jpg" alt="Let It Glow" className="w-12 h-12 rounded-lg" />
              <span className="hidden sm:inline font-bold text-lg text-white">Let It Glow</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium">Services</a>
              <a href="#gallery" className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium">Gallery</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium">How It Works</a>
              <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors text-sm font-medium">Contact</a>
              <a href="tel:+1234567890" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-500/30 hover:scale-105 flex items-center gap-2">
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
              <a href="tel:+1234567890" className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full text-center font-semibold transition-all mt-4">Call Now</a>
            </div>
          )}
        </div>
      </nav>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] py-20 px-6">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
            <div className="absolute top-60 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-40 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <img
              src="/letitglowholidaylighting.jpg"
              alt="Let It Glow Holiday Lighting"
              className="w-64 h-64 mx-auto mb-8 drop-shadow-2xl"
            />

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Make Your Home <span className="text-red-500">Glow</span><br />
              This Holiday Season
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Professional Holiday Lighting, Done Right
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Design, installation, maintenance, and removal — fully insured and handled by professionals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+1234567890"
                className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="#quote"
                className="bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 hover:scale-105"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 px-6 bg-[#151515]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                <h3 className="font-semibold text-white mb-1">Professional</h3>
                <p className="text-sm text-gray-400">Expert Installation</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#1f1f1f] rounded-2xl border border-gray-800 hover:border-yellow-700/50 transition-all">
                <div className="w-16 h-16 bg-yellow-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-yellow-700/50">
                  <Home className="w-8 h-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">Residential & Commercial</h3>
                <p className="text-sm text-gray-400">All Properties</p>
              </div>

              <div className="flex flex-col items-center text-center p-6 bg-[#1f1f1f] rounded-2xl border border-gray-800 hover:border-blue-700/50 transition-all">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 border-2 border-blue-700/50">
                  <Sparkles className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-white mb-1">Local New Jersey</h3>
                <p className="text-sm text-gray-400">Your Neighbors</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-6 bg-[#1a1a1a]">
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
                <p className="text-gray-400 leading-relaxed">Hassle-free takedown and safe storage until next year</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-[#151515] to-[#1a1a1a]">
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
        </section>

        <section id="how-it-works" className="py-20 px-6 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
              How It <span className="text-green-500">Works</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg">
              Three simple steps to holiday magic
            </p>

            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-yellow-500 opacity-20"></div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-red-500/50 transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-red-500/50 border-4 border-[#1a1a1a]">
                    1
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Free Quote & Design</h3>
                  <p className="text-gray-400 leading-relaxed">
                    We visit your property, discuss your vision, and create a custom lighting plan
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-green-500/50 transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-green-500/50 border-4 border-[#1a1a1a]">
                    2
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Professional Installation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Our expert team brings your design to life with safe, quality installation
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-[#1f1f1f] to-[#151515] p-8 rounded-3xl border border-gray-800 hover:border-yellow-500/50 transition-all text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg shadow-yellow-500/50 border-4 border-[#1a1a1a]">
                    3
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Enjoy — We Handle the Rest</h3>
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
              <Sparkles className="w-16 h-16 text-yellow-400 mx-auto animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Light Up <span className="text-red-500">Your Home?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Limited installation slots available during peak season
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:+1234567890"
                className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg shadow-red-500/50 hover:shadow-red-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
              <a
                href="#quote"
                className="bg-green-700 hover:bg-green-800 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <Mail className="w-6 h-6" />
                Request a Quote
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-semibold">Book now and secure your spot before we're fully booked!</span>
            </div>
          </div>
        </section>

        <footer id="contact" className="bg-[#0f0f0f] py-12 px-6 border-t border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center md:text-left">
                <img
                  src="/letitglowholidaylighting.jpg"
                  alt="Let It Glow Holiday Lighting"
                  className="w-32 h-32 mx-auto md:mx-0 mb-4"
                />
                <p className="text-gray-400 text-sm">
                  Professional holiday lighting services across New Jersey
                </p>
              </div>

              <div className="text-center">
                <h3 className="font-bold text-white mb-4 text-lg">Contact Us</h3>
                <div className="space-y-2">
                  <a href="tel:+1234567890" className="flex items-center justify-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                    <Phone className="w-4 h-4" />
                    <span>(123) 456-7890</span>
                  </a>
                  <a href="mailto:info@letitglowlighting.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-red-500 transition-colors">
                    <Mail className="w-4 h-4" />
                    <span>info@letitglowlighting.com</span>
                  </a>
                </div>
              </div>

              <div className="text-center md:text-right">
                <h3 className="font-bold text-white mb-4 text-lg">Service Area</h3>
                <p className="text-gray-400 mb-4">Proudly serving all of New Jersey</p>
                <div className="inline-flex items-center gap-2 bg-green-900/30 px-4 py-2 rounded-full border border-green-700/50">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-green-400 font-semibold">Fully Insured</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; 2024 Let It Glow Holiday Lighting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
