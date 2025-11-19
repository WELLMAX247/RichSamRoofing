import { Target, Eye, Award, Users, Shield, Wrench } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">About RICHSAM Roofing Company</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Your trusted partner for professional roofing solutions across Ghana
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                RICHSAM Roofing Company is a leading professional roofing service provider dedicated to delivering excellence in every project. We specialize in comprehensive roofing solutions, from new installations to maintenance and repairs.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With years of experience in the industry, our team of certified technicians brings expertise, precision, and dedication to every job. We understand that your roof is one of the most important investments in your property, and we treat it with the care and attention it deserves.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to using high-quality materials and state-of-the-art equipment ensures that every roof we install or maintain stands the test of time, providing you with peace of mind and lasting protection.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/portfolio/roof1.jpg"
                alt="Our Work"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/portfolio/roof7.jpg"
                alt="Our Work"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
              <img
                src="/portfolio/roof8.jpg"
                alt="Our Work"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img
                src="/portfolio/roof6.jpg"
                alt="Our Work"
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <Target className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To provide exceptional roofing services that exceed our clients' expectations through quality workmanship, reliable service, and innovative solutions. We are committed to protecting what matters most to you by delivering roofing systems that combine durability, aesthetics, and value.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-4 rounded-lg">
                  <Eye className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the most trusted and preferred roofing company in Ghana, recognized for our excellence, integrity, and commitment to customer satisfaction. We envision a future where every property has access to quality roofing solutions that provide lasting protection and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">
              Experience the RICHSAM difference in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certified Experts</h3>
              <p className="text-gray-600">
                Our team consists of highly trained and certified roofing professionals with years of industry experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Materials</h3>
              <p className="text-gray-600">
                We use only premium-grade materials from trusted suppliers to ensure durability and longevity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Modern Equipment</h3>
              <p className="text-gray-600">
                State-of-the-art tools and equipment enable us to deliver precise, efficient, and safe installations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focused</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen to your needs and deliver customized solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                We respect your time and ensure projects are completed on schedule without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Warranty</h3>
              <p className="text-gray-600">
                We stand behind our work with comprehensive warranties for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Our Commitment to Quality</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              At RICHSAM Roofing Company, quality is not just a promise—it's our standard. Every project, regardless of size, receives the same level of attention, expertise, and dedication. We are committed to delivering roofing solutions that provide lasting value and protection for your investment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">10+</div>
                <p className="text-xl">Years Experience</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <p className="text-xl">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-xl">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
