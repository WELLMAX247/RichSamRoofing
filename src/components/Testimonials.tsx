import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mr Frimpong',
      role: 'Homeowner',
      content:
        'RICHSAM Roofing Company did an outstanding job on our home. The team was professional, efficient, and the quality of work exceeded our expectations. Our new roof looks amazing and has been performing perfectly through the rainy season.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Lovia Kissi Korang',
      role: 'Business Owner',
      content:
        'We needed a reliable roofing company for our commercial building, and RICHSAM delivered beyond our expectations. They completed the project on time and within budget. Highly recommended for commercial projects!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Maxwell Boabeng',
      role: 'Property Developer',
      content:
        'I have worked with RICHSAM on multiple projects, and they never disappoint. Their attention to detail and commitment to quality is unmatched. The metal trusses they installed are exceptional.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-6 right-6 text-yellow-600 opacity-20">
                <Quote className="h-12 w-12" />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{testimonial.content}</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
