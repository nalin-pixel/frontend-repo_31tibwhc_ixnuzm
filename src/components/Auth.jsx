import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const Input = ({ icon: Icon, type = 'text', placeholder, value, onChange }) => (
  <div className="relative">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
      <Icon className="h-4 w-4" />
    </div>
    <input
      type={type}
      className="w-full rounded-xl border border-slate-200 bg-white/90 py-2 pl-9 pr-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const Auth = () => {
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} for ${email}`);
  };

  return (
    <section id="auth" className="bg-gradient-to-b from-indigo-50/60 to-pink-50/60 py-16">
      <div className="mx-auto max-w-md rounded-2xl bg-white/70 p-8 shadow-lg backdrop-blur">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">
            {mode === 'signin' ? 'Welcome back' : 'Create your account'}
          </h3>
          <button
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            className="text-sm text-indigo-700 hover:underline"
          >
            {mode === 'signin' ? 'Need an account?' : 'Have an account? Sign in'}
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-3">
          <Input icon={Mail} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input icon={Lock} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-2.5 font-medium text-white shadow-md transition hover:bg-indigo-700"
          >
            {mode === 'signin' ? 'Sign in' : 'Create account'}
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-slate-500">Demo only • Hook to your auth provider</p>
      </div>
    </section>
  );
};

export default Auth;
