import { useState, useEffect } from 'react';
import { Phone, CheckCircle, Clock, Shield, Users, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/portfolio/roof1.jpg',
      title: 'Professional Roof Installation',
      subtitle: 'Quality Metal Roofing Solutions',
    },
    {
      image: '/portfolio/roof6.jpg',
      title: 'Expert Roof Maintenance',
      subtitle: 'Durable & Long-lasting Results',
    },
    {
      image: '/portfolio/roof4.jpg',
      title: 'Residential Roofing Specialists',
      subtitle: 'Your Home, Our Priority',
    },
    {
      image: '/portfolio/roof8.jpg',
      title: 'Commercial Roofing Services',
      subtitle: 'Built to Last, Built to Protect',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const services = [
    {
      icon: '🏗️',
      title: 'Roof Construction',
      description: 'Professional installation of new roofs with premium materials',
    },
    {
      icon: '🔧',
      title: 'Roof Maintenance',
      description: 'Regular maintenance to extend your roof lifespan',
    },
    {
      icon: '🔍',
      title: 'Roof Inspection',
      description: 'Thorough inspections to identify and prevent issues',
    },
    {
      icon: '🪵',
      title: 'Trusses Installation',
      description: 'Quality wooden and metal trusses for structural support',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          </div>
        ))}

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              RICHSAM ROOFING COMPANY
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Roof & Trusses Installation & Maintenance
            </p>
            <p className="text-2xl md:text-3xl mb-4 text-yellow-500 font-semibold">
              We are committed to using high-quality materials and equipment to meet every roofing need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                Request a Quote
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="tel:+233575338800"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-yellow-500 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div className="text-left">
                <p className="font-semibold">Working Hours</p>
                <p className="text-sm text-gray-400">Mon-Fri: 8am-5pm | Sat: 8am-1pm</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-8 w-8 text-yellow-500" />
              <div className="text-left">
                <p className="font-semibold">Call Us Now</p>
                <p className="text-sm text-gray-400">+233 57 533 8800</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="h-8 w-8 text-yellow-500" />
              <div className="text-left">
                <p className="font-semibold">Quality Guaranteed</p>
                <p className="text-sm text-gray-400">Certified & Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive roofing solutions for all your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-yellow-500 hover:shadow-xl transition-all group"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-yellow-600 font-semibold hover:text-yellow-700 flex items-center gap-2"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose RICHSAM Roofing?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience and a commitment to excellence, we deliver roofing solutions that stand the test of time.
              </p>
              <div className="space-y-4">
                {[
                  'Certified and experienced technicians',
                  'High-quality materials and equipment',
                  'Timely project completion',
                  'Competitive pricing',
                  'Comprehensive warranty',
                  'Excellent customer service',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('about')}
                className="mt-8 bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold flex items-center gap-2"
              >
                Learn More About Us
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/portfolio/roof1.jpg"
                alt="Roofing Project"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/portfolio/roof6.jpg"
                alt="Roofing Project"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. Let's protect your property with quality roofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+233575338800"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call: +233 57 533 8800
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
