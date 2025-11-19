import { Home, Wrench, Search, Hammer, CheckCircle, Phone, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Home,
      title: 'Roof Construction & Installation',
      description: 'Professional installation of new roofing systems for residential and commercial properties. We work with various roofing materials including metal sheets in multiple colors (red, blue, green) to match your aesthetic preferences.',
      features: [
        'Metal roofing sheet installation (red, blue, green)',
        'Custom color selection and design',
        'Weather-resistant installations',
        'Energy-efficient roofing solutions',
        'Professional site assessment',
        'Quality material sourcing',
      ],
      image: '/portfolio/sheet1.jpeg',
    },
    {
      icon: Wrench,
      title: 'Roof Replacement & Maintenance',
      description: 'Comprehensive roof replacement services and regular maintenance programs to extend the life of your roof. We identify problems early and provide cost-effective solutions.',
      features: [
        'Complete roof replacement',
        'Leak detection and repair',
        'Preventive maintenance programs',
        'Emergency repair services',
        'Gutter cleaning and repair',
        'Roof coating and sealing',
      ],
      image: '/portfolio/sheet2.jpeg',
    },
    {
      icon: Search,
      title: 'Roof Inspection',
      description: 'Thorough roof inspections to identify potential issues before they become costly problems. Our detailed reports help you make informed decisions about your roofing needs.',
      features: [
        'Comprehensive visual inspection',
        'Detailed condition reports',
        'Damage assessment',
        'Maintenance recommendations',
        'Lifespan evaluation',
        'Free consultation and estimates',
      ],
      image: '/portfolio/sheet3.jpeg',
    },
    {
      icon: Hammer,
      title: 'Woodwork & Metal Trusses',
      description: 'Expert installation of wooden and metal trusses providing structural support for your roofing system. We ensure proper load distribution and long-term stability.',
      features: [
        'Custom wooden truss fabrication',
        'Metal truss installation',
        'Structural engineering consultation',
        'Load-bearing analysis',
        'Quality timber and metal materials',
        'Precision installation techniques',
      ],
      image: '/portfolio/sheet4.jpeg',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive roofing solutions tailored to meet your specific needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-yellow-100 p-4 rounded-lg">
                      <service.icon className="h-8 w-8 text-yellow-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold flex items-center gap-2"
                  >
                    Request This Service
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">
              Simple, transparent, and efficient from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via phone, email, or our contact form to discuss your roofing needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Site Inspection</h3>
              <p className="text-gray-600">
                Our experts visit your property for a thorough assessment and measurements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quote & Plan</h3>
              <p className="text-gray-600">
                Receive a detailed quote and project plan tailored to your requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
              <p className="text-gray-600">
                Professional installation with minimal disruption and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Expert Roofing Services?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and discover how we can meet your roofing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Request a Quote
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
