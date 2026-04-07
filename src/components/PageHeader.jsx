import { useLanguage } from '../hooks/useLanguage';
import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <div className="bg-primary py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl md:text-4xl font-bold text-primary-foreground mb-3 ${lang === 'kn' ? 'font-kannada' : 'font-heading'}`}
        >
          {t(title)}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-primary-foreground/70 max-w-2xl mx-auto ${fClass}`}
          >
            {t(subtitle)}
          </motion.p>
        )}
      </div>
    </div>
  );
}