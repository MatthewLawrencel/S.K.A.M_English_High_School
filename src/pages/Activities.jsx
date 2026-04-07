import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Dumbbell, Music, FlaskConical, Palette, TreePine, BookOpen, Users, Compass } from 'lucide-react';

const sports = [
  'Cricket', 'Kabaddi', 'Athletics', 'Volleyball', 'Kho-Kho', 'Badminton'
];

const clubs = [
  { name: 'Cultural Programs', icon: Music, desc: 'Dance, drama, and music performances' },
  { name: 'Science Club', icon: FlaskConical, desc: 'Experiments, exhibitions, and innovation' },
  { name: 'Art Club', icon: Palette, desc: 'Drawing, painting, and craft activities' },
  { name: 'Eco Club', icon: TreePine, desc: 'Environmental awareness and plantation drives' },
  { name: 'Literary Club', icon: BookOpen, desc: 'Debates, essay writing, and poetry' },
  { name: 'NSS/NCC', icon: Users, desc: 'Community service and discipline' },
  { name: 'Scout & Guide', icon: Compass, desc: 'Adventure, camping, and leadership' },
  { name: 'Yoga & Meditation', icon: Users, desc: 'Physical and mental wellness' },
];

export default function Activities() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';

  return (
    <div>
      <PageHeader title="School Activities" subtitle="Our school offers a wide range of activities to ensure holistic development of students." />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-green-600" />
            </div>
            <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Sports')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <img
                src="https://media.base44.com/images/public/69d47cfb17ba294f2c631826/d6dfc7890_generated_a29bc319.png"
                alt="School Sports"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {sports.map((s, i) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-5 h-5 text-green-600" />
                  </div>
                  <span className={`text-sm font-medium text-foreground ${fClass}`}>{t(s)}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
              <Music className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Activities')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clubs.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-5"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                  <c.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className={`font-semibold text-foreground text-sm mb-1 ${fClass}`}>{t(c.name)}</h3>
                <p className={`text-xs text-muted-foreground ${fClass}`}>{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <img
              src="https://media.base44.com/images/public/69d47cfb17ba294f2c631826/69da0d052_generated_a712052e.png"
              alt="Cultural Activities"
              className="rounded-2xl w-full max-h-72 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}