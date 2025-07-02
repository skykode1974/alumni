'use client';

import { useEffect, useState } from 'react';

const stats = [
  { label: 'Deepfakes Detected', value: 120000 },
  { label: 'Partners & Clients', value: 80 },
  { label: 'API Integrations', value: 150 },
  { label: 'Accuracy Rate', value: '99.2%' },
];

export default function StatsSection() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
    setCounts(prev =>
  prev.map((count, idx) => {
    const targetValue = stats[idx].value;
    if (typeof targetValue !== 'number') return count; // fallback
    return count + Math.ceil((targetValue - count) / 5);
  })
);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white text-center px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark">Trusted Globally</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-[#0057B7]">
              {counts[i]}{typeof stat.value === 'string' && stat.value !== '1' ? '+' : ''}
            </h3>
            <p className="text-muted mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
