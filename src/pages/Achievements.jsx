import { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Trophy, Medal, Star } from 'lucide-react';

const sampleAchievements = [
  { title: '100% SSLC Results', title_kn: '೧೦೦% ಎಸ್‌ಎಸ್‌ಎಲ್‌ಸಿ ಫಲಿತಾಂಶ', description: 'All students passed SSLC examination with distinction', description_kn: 'ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು ಎಸ್‌ಎಸ್‌ಎಲ್‌ಸಿ ಪರೀಕ್ಷೆಯಲ್ಲಿ ವಿಶಿಷ್ಟ ಶ್ರೇಣಿಯೊಂದಿಗೆ ಉತ್ತೀರ್ಣರಾಗಿದ್ದಾರೆ', category: 'Academic', year: '2025' },
  { title: 'District Level Cricket Champions', title_kn: 'ಜಿಲ್ಲಾ ಮಟ್ಟದ ಕ್ರಿಕೆಟ್ ಚಾಂಪಿಯನ್ಸ್', description: 'Our cricket team won the district championship', description_kn: 'ನಮ್ಮ ಕ್ರಿಕೆಟ್ ತಂಡವು ಜಿಲ್ಲಾ ಚಾಂಪಿಯನ್‌ಶಿಪ್ ಗೆದ್ದಿದೆ', category: 'Sports', year: '2025' },
  { title: 'State Science Exhibition Award', title_kn: 'ರಾಜ್ಯ ವಿಜ್ಞಾನ ಪ್ರದರ್ಶನ ಪ್ರಶಸ್ತಿ', description: 'Students won first place at state level science exhibition', description_kn: 'ವಿದ್ಯಾರ್ಥಿಗಳು ರಾಜ್ಯ ಮಟ್ಟದ ವಿಜ್ಞಾನ ಪ್ರದರ್ಶನದಲ್ಲಿ ಪ್ರಥಮ ಸ್ಥಾನ ಗೆದ್ದಿದ್ದಾರೆ', category: 'Academic', year: '2024' },
  { title: 'Best School Award - Ramanagara', title_kn: 'ಅತ್ಯುತ್ತಮ ಶಾಲೆ ಪ್ರಶಸ್ತಿ - ರಾಮನಗರ', description: 'Recognized as the best school in Ramanagara district', description_kn: 'ರಾಮನಗರ ಜಿಲ್ಲೆಯ ಅತ್ಯುತ್ತಮ ಶಾಲೆ ಎಂದು ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ', category: 'Other', year: '2024' },
  { title: 'Taluk Level Kabaddi Winners', title_kn: 'ತಾಲೂಕು ಮಟ್ಟದ ಕಬಡ್ಡಿ ವಿಜೇತರು', description: 'Kabaddi team won at taluk level competition', description_kn: 'ಕಬಡ್ಡಿ ತಂಡವು ತಾಲೂಕು ಮಟ್ಟದ ಸ್ಪರ್ಧೆಯಲ್ಲಿ ಗೆದ್ದಿದೆ', category: 'Sports', year: '2024' },
  { title: 'Cultural Fest Winners', title_kn: 'ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವ ವಿಜೇತರು', description: 'Won multiple prizes at inter-school cultural fest', description_kn: 'ಅಂತರ ಶಾಲಾ ಸಾಂಸ್ಕೃತಿಕ ಉತ್ಸವದಲ್ಲಿ ಅನೇಕ ಬಹುಮಾನಗಳನ್ನು ಗೆದ್ದಿದ್ದಾರೆ', category: 'Cultural', year: '2025' },
];

const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Other'];
const iconMap = { Academic: Trophy, Sports: Medal, Cultural: Star, Other: Trophy };

export default function Achievements() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const [filter, setFilter] = useState('All');
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await base44.entities.Achievement.list('-created_date', 50);
      setAchievements(data.length > 0 ? data : sampleAchievements);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = filter === 'All' ? achievements : achievements.filter(a => a.category === filter);

  return (
    <div>
      <PageHeader title="Our Achievements" subtitle="Celebrating excellence in academics, sports, and beyond." />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${fClass} ${
                  filter === c ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {t(c)}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="text-center py-20 text-muted-foreground">{t('Loading...')}</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((a, i) => {
                const Icon = iconMap[a.category] || Trophy;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <span className="text-xs text-accent font-medium">{a.year} · {t(a.category)}</span>
                        <h3 className={`font-semibold text-foreground mt-1 ${fClass}`}>
                          {lang === 'kn' && a.title_kn ? a.title_kn : a.title}
                        </h3>
                        <p className={`text-sm text-muted-foreground mt-1 ${fClass}`}>
                          {lang === 'kn' && a.description_kn ? a.description_kn : a.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}