import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Eye, Target, BookOpen, Award, Users, Heart } from 'lucide-react';

const values = [
  { icon: BookOpen, title: 'Academic Excellence', desc: 'Striving for the highest standards in education' },
  { icon: Award, title: 'Character Building', desc: 'Instilling strong moral values and ethics' },
  { icon: Users, title: 'Inclusive Environment', desc: 'Welcoming every child regardless of background' },
  { icon: Heart, title: 'Holistic Growth', desc: 'Nurturing mind, body, and spirit together' },
];

export default function About() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';

  return (
    <div>
      <PageHeader title="About Our School" subtitle="S.K.A.M English High School, located in the historic town of Huliyurdurga, has been a beacon of quality education. Our school is dedicated to providing a comprehensive learning experience that goes beyond textbooks. We believe in nurturing every child's potential through a balanced approach of academics, sports, arts, and value education." />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Our Vision')}</h2>
              </div>
              <p className={`text-muted-foreground leading-relaxed ${fClass}`}>
                {t('To be a leading institution that empowers students with knowledge, values, and skills to become responsible global citizens.')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                  <Target className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Our Mission')}</h2>
              </div>
              <p className={`text-muted-foreground leading-relaxed ${fClass}`}>
                {t('To provide quality education in a nurturing environment that fosters intellectual curiosity, creativity, physical fitness, and moral values through innovative teaching methods and holistic development programs.')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src=""
                alt="Principal"
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className={`text-2xl font-bold text-foreground mb-4 ${hClass}`}>{t("Principal's Message")}</h2>
              <p className={`text-muted-foreground leading-relaxed ${fClass}`}>
                {t("Dear Parents and Students, at S.K.A.M English High School, we are committed to providing an environment where every child can thrive. Our dedicated faculty, modern facilities, and comprehensive curriculum ensure that students receive the best education possible. We look forward to partnering with you in your child's educational journey.")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <v.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className={`font-semibold text-foreground mb-1 ${fClass}`}>{v.title}</h3>
                <p className={`text-xs text-muted-foreground ${fClass}`}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}