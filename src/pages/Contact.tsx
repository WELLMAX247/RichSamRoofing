import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage(
      'Thank you for contacting us! We will get back to you within 24 hours.'
    );
    setIsSubmitting(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Get in touch with us for a free consultation and quote
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+233 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="construction">Roof Construction & Installation</option>
                    <option value="replacement">Roof Replacement & Maintenance</option>
                    <option value="inspection">Roof Inspection</option>
                    <option value="trusses">Woodwork & Metal Trusses</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-colors font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <a
                      href="tel:+233575338800"
                      className="text-gray-600 hover:text-yellow-600 transition-colors block"
                    >
                      +233 57 533 8800
                    </a>
                    <a
                      href="tel:+233500595132"
                      className="text-gray-600 hover:text-yellow-600 transition-colors block"
                    >
                      +233 50 059 5132
                    </a>
                    <a
                      href="tel:+233256864730"
                      className="text-gray-600 hover:text-yellow-600 transition-colors block"
                    >
                      +233 25 686 4730
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email Address</h3>
                    <a
                      href="mailto:richardobronisamponpong@gmail.com"
                      className="text-gray-600 hover:text-yellow-600 transition-colors break-all"
                    >
                      richardobronisamponpong@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8am - 5pm</p>
                    <p className="text-gray-600">Saturday: 8am - 12pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                    <p className="text-gray-600">Serving all regions across Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <MessageSquare className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Social Media</h3>
                    <p className="text-gray-600">@richsamroofing</p>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="https://facebook.com/richsamroofing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        Facebook
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="https://instagram.com/richsamroofing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                        Instagram
                      </a>
                      <span className="text-gray-400">|</span>
                      <a href="https://tiktok.com/@richsamroofing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-yellow-600 transition-colors"
                      >
                       TikTok
                        </a>  
                      
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">Quick Response Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  We respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
                <a
                  href="tel:+233575338800"
                  className="inline-flex items-center gap-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
                >
                  <Phone className="h-5 w-5" />
                  Call Now for Urgent Matters
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Visit Our Website
            </h2>
            <p className="text-center text-gray-600 mb-4">
              For more information about our services and latest projects
            </p>
            <p className="text-center">
              <a
                href="https://www.richsamroofing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-700 font-semibold text-lg"
              >
                www.richsamroofing.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
