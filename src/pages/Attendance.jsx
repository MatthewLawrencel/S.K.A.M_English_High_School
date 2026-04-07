import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, CheckCircle, XCircle, Clock, CalendarOff } from 'lucide-react';
import { motion } from 'framer-motion';

const statusConfig = {
  Present: { icon: CheckCircle, color: 'text-green-600 bg-green-50' },
  Absent: { icon: XCircle, color: 'text-red-600 bg-red-50' },
  Late: { icon: Clock, color: 'text-amber-600 bg-amber-50' },
  Holiday: { icon: CalendarOff, color: 'text-blue-600 bg-blue-50' },
};

export default function Attendance() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const [studentId, setStudentId] = useState('');
  const [records, setRecords] = useState(null);
  const [loading, setLoading] = useState(false);
  const [studentInfo, setStudentInfo] = useState(null);

  async function handleSearch() {
    if (!studentId.trim()) return;
    setLoading(true);
    const data = await base44.entities.Attendance.filter({ student_id: studentId.trim() }, '-date', 30);
    setRecords(data);
    if (data.length > 0) {
      setStudentInfo({ name: data[0].student_name, class: data[0].class_name, section: data[0].section });
    } else {
      setStudentInfo(null);
    }
    setLoading(false);
  }

  const presentCount = records?.filter(r => r.status === 'Present').length || 0;
  const totalDays = records?.filter(r => r.status !== 'Holiday').length || 0;
  const percentage = totalDays > 0 ? Math.round((presentCount / totalDays) * 100) : 0;

  return (
    <div>
      <PageHeader title="Student Attendance" subtitle="Check your attendance records" />

      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
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

            {records && !loading && records.length === 0 && (
              <div className={`text-center py-10 text-muted-foreground ${fClass}`}>
                {t('No records found')}
              </div>
            )}

            {records && records.length > 0 && (
              <div>
                {studentInfo && (
                  <div className="bg-muted rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className={`text-muted-foreground ${fClass}`}>{t('Student Name')}</span>
                        <p className="font-semibold">{studentInfo.name}</p>
                      </div>
                      <div>
                        <span className={`text-muted-foreground ${fClass}`}>{t('Class')}</span>
                        <p className="font-semibold">{studentInfo.class}</p>
                      </div>
                      <div>
                        <span className={`text-muted-foreground ${fClass}`}>{t('Section')}</span>
                        <p className="font-semibold">{studentInfo.section}</p>
                      </div>
                      <div>
                        <span className={`text-muted-foreground ${fClass}`}>{t('Attendance')}</span>
                        <p className="font-semibold text-green-600">{percentage}%</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  {records.map((r, i) => {
                    const cfg = statusConfig[r.status] || statusConfig.Present;
                    const Icon = cfg.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.03 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <span className={`text-sm text-foreground ${fClass}`}>{r.date}</span>
                        <span className={`flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full ${cfg.color} ${fClass}`}>
                          <Icon className="w-3.5 h-3.5" />
                          {t(r.status)}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}