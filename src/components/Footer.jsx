import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { GraduationCap, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8" />
              <div>
                <h3 className={`font-bold text-lg ${lang === 'kn' ? 'font-kannada' : 'font-heading'}`}>
                  {t('S.K.A.M English High School')}
                </h3>
                <p className={`text-sm opacity-80 ${fClass}`}>{t('Huliyurdurga')}</p>
              </div>
            </div>
            <div className={`space-y-2 text-sm opacity-80 ${fClass}`}>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {t('Huliyurdurga')}, Tumakuru, Karnataka</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> +91 9986126910</p>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@skamschool.edu.in</p>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${fClass}`}>{t('Quick Links')}</h4>
            <div className={`grid grid-cols-2 gap-2 text-sm opacity-80 ${fClass}`}>
              {[
                { path: '/about', label: 'About Us' },
                { path: '/academics', label: 'Academics' },
                { path: '/admissions', label: 'Admissions' },
                { path: '/activities', label: 'Activities' },
                { path: '/results', label: 'Results' },
                { path: '/contact', label: 'Contact Us' },
              ].map(l => (
                <Link key={l.path} to={l.path} className="hover:opacity-100 transition-opacity">
                  {t(l.label)}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${fClass}`}>{t('Follow Us')}</h4>
            <div className="flex gap-3">
              {['Facebook', 'Instagram', 'YouTube'].map(s => (
                <div key={s} className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-sm font-medium hover:bg-primary-foreground/20 transition-colors cursor-pointer">
                  {s[0]}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={`border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60 ${fClass}`}>
          © 2026 {t('S.K.A.M English High School')}. {t('All Rights Reserved')}.
        </div>
      </div>
    </footer>
  );
}