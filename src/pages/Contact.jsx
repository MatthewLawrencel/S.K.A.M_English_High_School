import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import PageHeader from '../components/PageHeader';
import { base44 } from '@/api/base44Client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

const contactInfo = [
  { icon: MapPin, label: 'Address', value: 'S.K.A.M English High School, Huliyurdurga, Tumakuru District, Karnataka - 562123' },
  { icon: Phone, label: 'Phone', value: '+91 9986126910' },
  { icon: Mail, label: 'Email', value: 'info@skamschool.edu.in' },
  { icon: Clock, label: 'School Hours', value: 'Mon - Sat: 8:00 AM - 4:00 PM' },
];

export default function Contact() {
  const { lang, t } = useLanguage();
  const fClass = lang === 'kn' ? 'font-kannada' : 'font-body';
  const hClass = lang === 'kn' ? 'font-kannada' : 'font-heading';
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) return;
    setSubmitting(true);
    await base44.entities.ContactMessage.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast.success(t('Message sent successfully!'));
  }

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <div>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you" />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold text-foreground ${fClass}`}>{t(c.label)}</p>
                    <p className={`text-sm text-muted-foreground ${fClass}`}>{c.label === 'Address' ? t(c.value) : c.value}</p>
                  </div>
                </motion.div>
              ))}

              <div className="mt-6 rounded-xl overflow-hidden border border-border h-64">
                <iframe
                  title="School Location"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d223.2609114493044!2d77.03113064851448!3d12.824685803481817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1775557096646!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!4v1775557248831!6m8!1m7!1si3B5iFAqrNuEAEX1xxTmRQ!2m2!1d12.82470918666959!2d77.03189658511464!3f264.24690516465546!4f17.275777483853446!5f0.7820865974627469"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                />
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
                  <h3 className={`text-xl font-bold text-foreground ${hClass}`}>{t('Message sent successfully!')}</h3>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5">
                  <h2 className={`text-xl font-bold text-foreground mb-2 ${hClass}`}>{t('Get In Touch')}</h2>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Name')} *</label>
                      <Input value={form.name} onChange={e => update('name', e.target.value)} required className={fClass} />
                    </div>
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Phone')} *</label>
                      <Input value={form.phone} onChange={e => update('phone', e.target.value)} required className={fClass} />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Email')}</label>
                      <Input type="email" value={form.email} onChange={e => update('email', e.target.value)} className={fClass} />
                    </div>
                    <div>
                      <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Subject')}</label>
                      <Input value={form.subject} onChange={e => update('subject', e.target.value)} className={fClass} />
                    </div>
                  </div>

                  <div>
                    <label className={`text-sm text-muted-foreground mb-1 block ${fClass}`}>{t('Message')} *</label>
                    <Textarea value={form.message} onChange={e => update('message', e.target.value)} rows={5} required className={fClass} />
                  </div>

                  <Button type="submit" disabled={submitting} className={`w-full ${fClass}`}>
                    {submitting ? t('Loading...') : t('Send Message')}
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