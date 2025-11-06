import React, { useState } from 'react';
import { Mail, MessageSquare, User } from 'lucide-react';

const Field = ({ label, children }) => (
  <label className="block text-sm">
    <span className="mb-1 block font-medium text-slate-700">{label}</span>
    {children}
  </label>
);

const Contact = () => {
  const [status, setStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent! We will get back to you shortly.');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-pink-50/60 to-emerald-50/60 py-16">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white/70 p-8 shadow-lg backdrop-blur">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Contact us</h2>
          <p className="mt-2 text-slate-600">We'd love to hear about your project.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <Field label="Name">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><User className="h-4 w-4" /></span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white/90 py-2 pl-9 pr-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                placeholder="Your name"
                required
              />
            </div>
          </Field>

          <Field label="Email">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><Mail className="h-4 w-4" /></span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-slate-200 bg-white/90 py-2 pl-9 pr-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                placeholder="you@company.com"
                required
              />
            </div>
          </Field>

          <div className="sm:col-span-2">
            <Field label="Message">
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400"><MessageSquare className="h-4 w-4" /></span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white/90 py-2 pl-9 pr-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-emerald-300 focus:ring-2 focus:ring-emerald-100"
                  placeholder="How can we help?"
                  required
                />
              </div>
            </Field>
          </div>

          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-xs text-slate-500">By sending, you agree to our terms and privacy policy.</p>
            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-5 py-2.5 font-medium text-white shadow-md transition hover:bg-emerald-700"
            >
              Send message
            </button>
          </div>
        </form>

        {status && (
          <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700 ring-1 ring-emerald-100">
            {status}
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
