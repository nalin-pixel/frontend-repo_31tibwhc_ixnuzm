import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight, LogIn, UserPlus } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to enhance text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-indigo-700 shadow-sm backdrop-blur">
          <Shield className="h-4 w-4" />
          Secure • Modern • Minimal
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
          The pastel-first platform for modern fintech SaaS
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-700 sm:text-lg">
          Launch faster with a clean, minimalist experience. Beautiful pricing, simple auth entry points, a lightweight blog, and a friendly contact flow.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            <Rocket className="h-5 w-5" /> Get Started
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 text-indigo-700 shadow-md backdrop-blur transition hover:bg-white"
          >
            Contact Sales <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Auth quick actions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <a href="#auth" className="inline-flex items-center gap-2 rounded-lg bg-white/80 px-4 py-2 text-slate-800 shadow-sm backdrop-blur hover:bg-white">
            <LogIn className="h-4 w-4" /> Sign in
          </a>
          <a href="#auth" className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-4 py-2 text-indigo-700 hover:bg-indigo-100">
            <UserPlus className="h-4 w-4" /> Create account
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
