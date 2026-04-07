import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Calendar, FlaskConical, Languages, Calculator, Globe, Monitor, Palette, Heart, Dumbbell } from 'lucide-react';

const subjects = [
  { name: 'Kannada', icon: Languages },
  { name: 'English', icon: Languages },
  { name: 'Hindi', icon: Languages },
  { name: 'Mathematics', icon: Calculator },
  { name: 'Science', icon: FlaskConical },
  { name: 'Social Science', icon: Globe },
  { name: 'Physical Education', icon: Dumbbell },
  { name: 'Computer Science', icon: Monitor },
  { name: 'Art & Craft', icon: Palette },
  { name: 'Moral Science', icon: Heart },
];

const calendar = [
  { month: 'June', events: ['School Reopening'] },
  { month: 'July', events: ['Unit Test 1'] },
  { month: 'August', events: ['Independence Day', 'Science Exhibition'] },
  { month: 'September', events: ['Mid Term Exams'] },
  { month: 'October', events: ['Dasara Holidays'] },
  { month: 'November', events: ['Unit Test 2', "Children's Day"] },
  { month: 'December', events: ['Annual Day', 'Christmas Holidays'] },
  { month: 'January', events: ['Republic Day', 'Sports Day'] },
  { month: 'February', events: ['Unit Test 2'] },
  { month: 'March', events: ['Annual Exams'] },
  { month: 'April', events: ['Results Declaration', 'Summer Vacation'] },
];

export default function Academics() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';

  return (
    <div>
      <PageHeader title="Academics" subtitle="Our school follows the Karnataka State Board curriculum, providing a strong foundation in all subjects." />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <Tabs defaultValue="curriculum" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="curriculum" className={fClass}>{t('Curriculum')}</TabsTrigger>
            <TabsTrigger value="calendar" className={fClass}>{t('Year Calendar')}</TabsTrigger>
          </TabsList>

          <TabsContent value="curriculum">
            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Subjects Offered')}</h2>
              <p className={`text-muted-foreground mt-2 ${fClass}`}>Classes 1st to 10th — Karnataka State Board</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {subjects.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <s.icon className="w-6 h-6 text-accent" />
                  </div>
                  <p className={`text-sm font-medium text-foreground ${fClass}`}>{t(s.name)}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <img
                src="https://media.base44.com/images/public/69d47cfb17ba294f2c631826/2e36c2b5c_generated_bbb6fd64.png"
                alt="Students in classroom"
                className="rounded-2xl w-full max-h-80 object-cover shadow-lg"
              />
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="text-center mb-8">
              <h2 className={`text-2xl font-bold text-foreground ${hClass}`}>{t('Year Calendar')} 2025-26</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {calendar.map((m, i) => (
                <motion.div
                  key={m.month}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="bg-card rounded-xl border border-border p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className={`font-semibold text-foreground ${fClass}`}>{t(m.month)}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {m.events.map(e => (
                      <li key={e} className={`text-sm text-muted-foreground flex items-center gap-2 ${fClass}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {t(e)}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}