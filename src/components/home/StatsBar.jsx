import { useLanguage } from '../../hooks/useLanguage';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '400+', label: 'Students' },
  { icon: GraduationCap, value: '15+', label: 'Teachers' },
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: TrendingUp, value: '100%', label: 'Pass Rate' },
];

export default function StatsBar() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <section className="py-12 -mt-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground font-heading">{stat.value}</p>
                <p className={`text-sm text-muted-foreground mt-1 ${fClass}`}>{t(stat.label)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}