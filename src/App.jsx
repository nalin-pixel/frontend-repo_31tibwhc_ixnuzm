import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Top nav */}
      <header className="sticky top-0 z-20 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-lg font-bold text-slate-900">PastelPay</a>
          <nav className="hidden gap-6 text-sm text-slate-700 sm:flex">
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#auth" className="hover:text-slate-900">Auth</a>
            <a href="#blog" className="hover:text-slate-900">Blog</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <a href="#auth" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800">Sign in</a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Pricing />
      <Auth />
      <Blog />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} PastelPay. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
