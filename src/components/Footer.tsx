import { Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Adobe Express - file.png"
              alt="RICHSAM Roofing Company"
              className="h-20 w-auto mb-4 bg-white rounded-lg p-2"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your Best Roofing Service Experts. Quality roofing solutions for homes and businesses across Ghana.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onNavigate(item.toLowerCase().replace(' ', ''))}
                    className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:+233575338800" className="text-gray-400 hover:text-yellow-500 transition-colors block">
                    +233 57 533 8800
                  </a>
                  <a href="tel:+233500595132" className="text-gray-400 hover:text-yellow-500 transition-colors block">
                    +233 50 059 5132
                  </a>
                  <a href="tel:+233256864730" className="text-gray-400 hover:text-yellow-500 transition-colors block">
                    +233 25 686 4730
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                <a href="mailto:richardobronisampong@gmail.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm break-all">
                  richardobronisampong@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Working Hours</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-gray-400">
                <p>Monday - Friday: 8am - 5pm</p>
                <p>Saturday: 8am - 12pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com/richsamroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/richsamroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@richsamroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} RICHSAM Roofing Company. All rights reserved. | www.richsamroofing.com
          </p>
        </div>
      </div>
    </footer>
  );
}
