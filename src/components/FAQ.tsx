import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What types of roofing materials do you work with?',
      answer:
        'We specialize in metal roofing sheets we have Aluzinc, leasen, and aluminium produced either as Selflock or IBR. We also work with both wooden and metal trusses for structural support. All our materials are sourced from trusted suppliers to ensure quality and durability.',
    },
    {
      question: 'How long does a typical roof installation take?',
      answer:
        'The duration varies depending on the size and complexity of the project. A typical residential roof installation takes 3-7 days, while commercial projects may take longer. We provide a detailed timeline during the consultation phase.',
    },
    {
      question: 'Do you offer warranties on your roofing work?',
      answer:
        'Yes, we provide comprehensive warranties on both materials and workmanship. The specific warranty terms depend on the type of service and materials used. We discuss all warranty details before starting any project.',
    },
    {
      question: 'How often should I have my roof inspected?',
      answer:
        'We recommend having your roof inspected at least once a year, ideally before and after the rainy season. Regular inspections help identify and address minor issues before they become major problems, extending the life of your roof.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve all regions across Ghana. Whether you are in Accra, Kumasi, or any other location, our team is ready to provide quality roofing services. Contact us to discuss your specific location.',
    },
    {
      question: 'Do you provide free quotes?',
      answer:
        'Yes, we offer free consultations and quotes for all roofing projects. Contact us via phone, email, or our contact form, and we will schedule a site visit to assess your needs and provide a detailed estimate.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept various payment methods including cash, bank transfers, and mobile money. Payment terms are discussed and agreed upon before the project begins, with options for installment payments on larger projects.',
    },
    {
      question: 'Can you handle emergency roof repairs?',
      answer:
        'Yes, we offer emergency repair services for urgent roofing issues. Contact us immediately if you have a leak or storm damage, and we will prioritize your situation to prevent further damage to your property.',
    },
    
    {
      question: 'What colors do you have available?',
      answer:
          'We offer a full range of colors and can provide any option based on your preference.',
    },
  ];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our roofing services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-yellow-500 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help. Contact us and we'll be happy to answer any questions you may have.
          </p>
          <a
            href="tel:+233575338800"
            className="inline-block bg-yellow-600 text-white px-8 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-semibold"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
