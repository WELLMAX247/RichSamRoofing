import { useState } from 'react';
import { Filter } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      image: '/portfolio/sheet5.jpg',
      title: 'Modern Residential Roofing',
      category: 'residential',
      description: 'Complete metal roofing installation for a modern residential property',
    },
    {
      id: 2,
      image: '/portfolio/sheet9.jpg',
      title: 'Commercial Metal Roof',
      category: 'commercial',
      description: 'Durable metal roofing solution for commercial building',
    },
    {
      id: 3,
      image: '/portfolio/sheet11.jpg',
      title: 'Residential Roof Replacement',
      category: 'residential',
      description: 'Professional roof replacement with premium metal sheets',
    },
    {
      id: 4,
      image: '/portfolio/sheet10.jpg',
      title: 'Residential Roofing Project',
      category: 'residential',
      description: 'Quality roofing installation with structural support',
    },
    {
      id: 5,
      image: '/portfolio/sheet12.jpg',
      title: 'Metal Trusses Installation',
      category: 'trusses',
      description: 'Expert installation of metal trusses for structural integrity',
    },
    {
      id: 6,
      image: '/portfolio/sheet70.jpg',
      title: 'Wood Installation',
      category: 'maintenance',
      description: 'Comprehensive roof maintenance and repair work',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Roofing' },
    { id: 'commercial', label: 'Commercial Roofing' },
    { id: 'trusses', label: 'Trusses & Frames' },
    { id: 'maintenance', label: 'Maintenance Work' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explore our completed projects showcasing quality craftsmanship and attention to detail
          </p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Filter className="h-6 w-6 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">Filter Projects</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                    {filters.find((f) => f.id === project.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust RICHSAM Roofing Company for their roofing needs.
            </p>
            <a
              href="tel:+233575338800"
              className="inline-block bg-white text-yellow-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Roofing Materials We Use</h2>
            <p className="text-xl text-gray-600">
              Premium quality materials for lasting protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              {/* <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4 shadow-lg"></div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Aluzinc</h3>
              <p className="text-gray-600">
                Classic and elegant Aluzinc sheets that add warmth and character to your property.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              {/* <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 shadow-lg"></div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Leasen</h3>
              <p className="text-gray-600">
                Modern and stylish Leasen sheets that provide a contemporary look and excellent durability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              {/* <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-4 shadow-lg"></div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Aluminum</h3>
              <p className="text-gray-600">
                Vibrant Aluminum sheets that blend beautifully with natural surroundings.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              {/* <div className="text-6xl mb-4">🪵</div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Selflock</h3>
              <p className="text-gray-600">
                Premium quality Selflocks for traditional and modern architectural designs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              {/* <div className="text-6xl mb-4">🔩</div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">IBR</h3>
              <p className="text-gray-600">
                Durable IBR engineered for superior strength and longevity.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
