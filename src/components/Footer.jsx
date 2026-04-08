import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { 
  GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube, 
  Clock, Heart
} from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* School Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3 className={`font-semibold text-sm ${lang === 'kn' ? 'font-kannada' : ''}`}>
                S.K.A.M English High School
              </h3>
            </div>
            <p className="text-xs text-gray-500">Huliyurdurga</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-gray-500 mb-3">
              Quick Links
            </h4>
            <div className="space-y-1.5">
              {['About Us', 'Academics', 'Admissions', 'Activities', 'Results', 'Contact Us'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(' ', '')}`}
                  className="block text-xs text-gray-400 hover:text-white transition-colors"
                >
                  {t(item)}
                </Link>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-gray-500 mb-3">
              Follow Us
            </h4>
            <div className="space-y-1.5">
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-3 h-3" /> Facebook
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-3 h-3" /> Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-3 h-3" /> YouTube
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-gray-500 mb-3">
              Contacts
            </h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                <span>Huliyurdurga, Tumakuru, Karnataka - 572122</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3" />
                <a href="tel:+919986126910" className="hover:text-white">+91 9986126910</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3" />
                <a href="mailto:info@skamschool.edu.in" className="hover:text-white">info@skamschool.edu.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                <span>Mon-Fri: 8AM - 4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
            <div>© 2026 S.K.A.M English High School. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}