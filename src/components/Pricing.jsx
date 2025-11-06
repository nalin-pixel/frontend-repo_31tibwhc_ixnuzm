import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$9',
    description: 'For individuals validating ideas',
    features: ['1 project', 'Basic analytics', 'Email support'],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$29',
    description: 'For growing teams and startups',
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support'],
    cta: 'Choose Growth',
    highlight: true,
  },
  {
    name: 'Scale',
    price: '$99',
    description: 'For established products at scale',
    features: ['SLA + SSO', 'Custom limits', 'Dedicated manager'],
    cta: 'Contact sales',
    highlight: false,
  },
];

const PricingCard = ({ tier }) => (
  <div className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
    tier.highlight ? 'border-indigo-300 bg-indigo-50/60' : 'border-slate-200 bg-white'
  }`}>
    <h3 className="text-lg font-semibold text-slate-900">{tier.name}</h3>
    <p className="mt-1 text-sm text-slate-600">{tier.description}</p>
    <div className="mt-4 flex items-baseline gap-1">
      <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
      <span className="text-slate-600">/mo</span>
    </div>
    <ul className="mt-6 space-y-2">
      {tier.features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
          <Check className="h-4 w-4 text-indigo-600" /> {f}
        </li>
      ))}
    </ul>
    <a
      href="#contact"
      className={`mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition ${
        tier.highlight
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-white text-indigo-700 ring-1 ring-indigo-200 hover:bg-indigo-50'
      }`}
    >
      {tier.cta}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
        <p className="mt-2 text-slate-600">Pick a plan that grows with you. Cancel anytime.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
