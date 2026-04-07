import { useLanguage } from '../hooks/useLanguage';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:bg-muted transition-all duration-300 text-sm font-medium"
      title={lang === 'en' ? 'Switch to Kannada' : 'Switch to English'}
    >
      <Globe className="w-4 h-4 text-accent" />
      <span className={lang === 'kn' ? 'font-kannada' : 'font-body'}>
        {lang === 'en' ? 'ಕನ್ನಡ' : 'English'}
      </span>
    </button>
  );
}