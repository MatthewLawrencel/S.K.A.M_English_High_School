import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69d47cfb17ba294f2c631826/04f31d5f6_generated_28ddc56a.png"
          alt="S.K.A.M English High School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className={`text-sm text-primary-foreground/90 ${fClass}`}>
              Karnataka State Board
            </span>
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold text-white mb-4 leading-tight ${lang === 'kn' ? 'font-kannada' : 'font-heading'}`}>
            {t('S.K.A.M English High School')}
          </h1>
          
          <p className={`text-xl md:text-2xl text-white/90 mb-3 ${lang === 'kn' ? 'font-kannada' : 'font-heading'}`}>
            {t('Nurturing Young Minds, Building Tomorrow\'s Leaders')}
          </p>

          <p className={`text-base text-white/70 mb-8 max-w-lg ${fClass}`}>
            {t('Committed to academic excellence, character building, and holistic development of every student since establishment.')}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/admissions">
              <Button size="lg" className={`bg-accent hover:bg-accent/90 text-accent-foreground gap-2 ${fClass}`}>
                {t('Apply Now')} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className={`border-white/30 text-white hover:bg-white/10 ${fClass}`}>
                {t('Explore More')}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}