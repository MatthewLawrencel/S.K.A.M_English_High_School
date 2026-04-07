import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Results() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';
  const [studentId, setStudentId] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSearch() {
    if (!studentId.trim()) return;
    setLoading(true);
    const data = await base44.entities.Result.filter({ student_id: studentId.trim() }, '-created_date', 20);
    setResults(data);
    setLoading(false);
  }

  const gradeColor = (grade) => {
    if (grade === 'A+' || grade === 'A') return 'text-green-600 bg-green-50';
    if (grade === 'B+' || grade === 'B') return 'text-blue-600 bg-blue-50';
    if (grade === 'C+' || grade === 'C') return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div>
      <PageHeader title="Exam Results" subtitle="Check your exam results" />

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex gap-3 mb-8">
              <Input
                placeholder={t('Enter Student ID')}
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                className={`flex-1 ${fClass}`}
              />
              <Button onClick={handleSearch} disabled={loading} className={`gap-2 ${fClass}`}>
                <Search className="w-4 h-4" /> {t('Search')}
              </Button>
            </div>

            {loading && (
              <div className="text-center py-10 text-muted-foreground">{t('Loading...')}</div>
            )}

            {results && !loading && results.length === 0 && (
              <div className={`text-center py-10 text-muted-foreground ${fClass}`}>
                {t('No records found')}
              </div>
            )}

            {results && results.length > 0 && (
              <div>
                <div className="bg-muted rounded-xl p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-accent" />
                    <div>
                      <p className={`font-semibold text-foreground ${fClass}`}>{results[0].student_name}</p>
                      <p className={`text-sm text-muted-foreground ${fClass}`}>{t('Class')}: {results[0].class_name} · {t('Student ID')}: {results[0].student_id}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {results.map((r, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-xl border border-border p-5"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className={`font-semibold text-foreground ${fClass}`}>{t(r.exam_type || 'Exam')}</h3>
                          <p className={`text-xs text-muted-foreground ${fClass}`}>{t('Academic Year')}: {r.year}</p>
                        </div>
                        {r.grade && (
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${gradeColor(r.grade)}`}>
                            {r.grade}
                          </span>
                        )}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {r.total_marks != null && (
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className={`text-xs text-muted-foreground ${fClass}`}>{t('Total Marks')}</p>
                            <p className="font-bold text-foreground">{r.total_marks}</p>
                          </div>
                        )}
                        {r.percentage != null && (
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className={`text-xs text-muted-foreground ${fClass}`}>{t('Percentage')}</p>
                            <p className="font-bold text-foreground">{r.percentage}%</p>
                          </div>
                        )}
                        {r.rank != null && (
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className={`text-xs text-muted-foreground ${fClass}`}>{t('Rank')}</p>
                            <p className="font-bold text-foreground">#{r.rank}</p>
                          </div>
                        )}
                        {r.result_status && (
                          <div className="bg-muted rounded-lg p-3 text-center">
                            <p className={`text-xs text-muted-foreground ${fClass}`}>{t('Result')}</p>
                            <p className={`font-bold ${r.result_status === 'Pass' || r.result_status === 'Distinction' ? 'text-green-600' : 'text-red-600'}`}>
                              {t(r.result_status)}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}