import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import { Menu, X, GraduationCap } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/academics', label: 'Academics' },
  { path: '/activities', label: 'Activities' },
  { path: '/facilities', label: 'Facilities' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/results', label: 'Results' },
  { path: '/attendance', label: 'Attendance' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <p className={`text-sm font-bold text-foreground leading-tight ${lang === 'kn' ? 'font-kannada' : 'font-heading'}`}>
                {t('S.K.A.M English High School')}
              </p>
              <p className={`text-xs text-muted-foreground ${lang === 'kn' ? 'font-kannada' : 'font-body'}`}>
                {t('Huliyurdurga')}
              </p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors ${lang === 'kn' ? 'font-kannada' : 'font-body'} ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md hover:bg-muted"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <div className="px-4 py-3 space-y-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm ${lang === 'kn' ? 'font-kannada' : 'font-body'} ${
                  location.pathname === item.path
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}