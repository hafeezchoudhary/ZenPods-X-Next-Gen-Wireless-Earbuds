import React, { useState } from 'react';

const Pricing = () => {
  const [selected, setSelected] = useState(1); // default: middle plan selected

  const plans = [
    { name: "Standard", price: "₹6,999", bullets: ["ZenPods X • Carbon Silver", "30-hour battery", "Basic ANC"] },
    { name: "Pro", price: "₹9,499", featured: true, bullets: ["ZenPods X Pro • Matte Black", "60-hour battery", "Adaptive ANC + EQ"] },
    { name: "Bundle", price: "₹12,999", bullets: ["Pro + Carry Case", "Extra Ear Tips", "2-Year Warranty"] },
  ];

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-[#0A2540]">Pricing</h2>
        <p className="mt-3 text-[#1a3350] opacity-70">
          Simple pricing with a plan for casual listeners and power users.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p, i) => {
          const isSelected = selected === i;

          return (
            <div key={p.name} onClick={() => setSelected(i)} className={` rounded-xl p-6 border cursor-pointer transition ${isSelected ? 'border-[#1976D2] shadow-2xl scale-[1.02] bg-white': 'border-[#90CAF9] bg-white'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-[#0A2540]/70">{p.name}</div>
                  <div className="mt-2 text-2xl font-bold text-[#0A2540]">{p.price}</div>
                </div>

                {i === 1 && (
                  <div className="text-xs bg-linear-to-r from-[#42A5F5] to-[#1976D2] text-white px-3 py-1 rounded-full">Popular</div>)}
              </div>

              <ul className="mt-4 space-y-2 text-sm text-[#0A2540]/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-1">
                      <path d="M5 13l4 4L19 7" stroke="#1976D2" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round"/></svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <button className={`w-full px-4 py-3 rounded-lg transition cursor-pointer ${isSelected ? 'bg-linear-to-r from-[#42A5F5] to-[#1976D2] text-white shadow-md' : 'border border-[#90CAF9] text-[#0A2540] hover:bg-[#BBDEFB]'}`}>Choose</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
