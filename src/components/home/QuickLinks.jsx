import { useLanguage } from '../../hooks/useLanguage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Dumbbell, ClipboardCheck, Calendar, Building } from 'lucide-react';

const links = [
  { icon: BookOpen, label: 'Academics', path: '/academics', color: 'bg-blue-50 text-blue-600' },
  { icon: Trophy, label: 'Achievements', path: '/achievements', color: 'bg-amber-50 text-amber-600' },
  { icon: Dumbbell, label: 'Sports', path: '/activities', color: 'bg-green-50 text-green-600' },
  { icon: ClipboardCheck, label: 'Results', path: '/results', color: 'bg-purple-50 text-purple-600' },
  { icon: Calendar, label: 'Year Calendar', path: '/academics', color: 'bg-red-50 text-red-600' },
  { icon: Building, label: 'Facilities', path: '/facilities', color: 'bg-teal-50 text-teal-600' },
];

export default function QuickLinks() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Link
                to={link.path}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${link.color} flex items-center justify-center`}>
                  <link.icon className="w-7 h-7" />
                </div>
                <span className={`text-sm font-medium text-foreground text-center ${fClass}`}>
                  {t(link.label)}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}