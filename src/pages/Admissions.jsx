import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from 'framer-motion';
import { CheckCircle, FileText, Users, ClipboardCheck, CreditCard, PartyPopper } from 'lucide-react';
import { toast } from "sonner";

const steps = [
  { icon: FileText, text: 'Step 1: Fill the enquiry form' },
  { icon: Users, text: 'Step 2: Visit the school for interaction' },
  { icon: ClipboardCheck, text: 'Step 3: Submit required documents' },
  { icon: CreditCard, text: 'Step 4: Pay admission fees' },
  { icon: PartyPopper, text: 'Step 5: Receive confirmation' },
];

const classes = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];

export default function Admissions() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';
  const [form, setForm] = useState({ parent_name: '', student_name: '', phone: '', email: '', class_seeking: '', previous_school: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.parent_name || !form.student_name || !form.phone || !form.class_seeking) return;
    setSubmitting(true);
    await base44.entities.AdmissionQuery.create({ ...form, status: 'New' });
    setSubmitting(false);
    setSubmitted(true);
    toast.success(t('Enquiry submitted successfully! We will contact you soon.'));
  }

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <div>
      <PageHeader title="Admissions" subtitle="Fill out the form below and we will get back to you soon." />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2">
              <h2 className={`text-xl font-bold text-foreground mb-6 ${hClass}`}>{t('Admission Process')}</h2>
              <div className="space-y-4">
                {steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className={`text-sm text-foreground ${fClass}`}>{t(s.text)}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-card rounded-2xl border border-border p-10 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className={`text-xl font-bold text-foreground mb-2 ${hClass}`}>
                    {t('Enquiry submitted successfully! We will contact you soon.')}
                  </h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <h2 className={`text-xl font-bold text-foreground mb-2 ${hClass}`}>{t('Admission Enquiry')}</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Parent/Guardian Name')} *</label>
                      <Input value={form.parent_name} onChange={e => update('parent_name', e.target.value)} required className={fClass} />
                    </div>
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Student Name')} *</label>
                      <Input value={form.student_name} onChange={e => update('student_name', e.target.value)} required className={fClass} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Phone Number')} *</label>
                      <Input value={form.phone} onChange={e => update('phone', e.target.value)} required className={fClass} />
                    </div>
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Email')}</label>
                      <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} className={fClass} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Class Seeking Admission')} *</label>
                      <Select value={form.class_seeking} onValueChange={v => update('class_seeking', v)}>
                        <SelectTrigger className={fClass}><SelectValue placeholder={t('Select')} /></SelectTrigger>
                        <SelectContent>
                          {classes.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Previous School')}</label>
                      <Input value={form.previous_school} onChange={e => update('previous_school', e.target.value)} className={fClass} />
                    </div>
                  </div>

                  <div>
                    <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Message')}</label>
                    <Textarea value={form.message} onChange={e => update('message', e.target.value)} rows={3} className={fClass} />
                  </div>

                  <Button type="submit" disabled={submitting} className={`w-full ${fClass}`}>
                    {submitting ? t('Loading...') : t('Submit Enquiry')}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}