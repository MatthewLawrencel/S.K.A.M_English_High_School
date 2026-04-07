import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Monitor, FlaskConical, BookOpen, Trees, Mic2, Bus, Droplets, Laptop } from 'lucide-react';

const facilities = [
  { icon: Laptop, name: 'Smart Classrooms', desc: 'Digital learning tools in every classroom' },
  { icon: Monitor, name: 'Computer Lab', desc: 'Well-equipped computer lab with internet' },
  { icon: FlaskConical, name: 'Science Laboratory', desc: 'Fully equipped physics, chemistry & biology labs' },
  { icon: BookOpen, name: 'Library', desc: 'Vast collection of books and periodicals' },
  { icon: Trees, name: 'Playground', desc: 'Spacious ground for multiple sports' },
  { icon: Mic2, name: 'Auditorium', desc: 'Multi-purpose hall for events' },
  { icon: Bus, name: 'Transport', desc: 'Bus facility covering nearby areas' },
  { icon: Droplets, name: 'Safe Drinking Water', desc: 'RO purified drinking water for all' },
];

export default function Facilities() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';

  return (
    <div>
      <PageHeader title="Our Facilities" subtitle="State-of-the-art infrastructure to support learning and growth." />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <img
              src="https://media.base44.com/images/public/69d47cfb17ba294f2c631826/0e6fa5c6d_generated_4035511f.png"
              alt="School Facilities"
              className="rounded-2xl w-full max-h-80 object-cover shadow-lg"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {facilities.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-4 transition-colors">
                  <f.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className={`font-semibold text-foreground mb-1 ${fClass}`}>{t(f.name)}</h3>
                <p className={`text-sm text-muted-foreground ${fClass}`}>{t(f.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}