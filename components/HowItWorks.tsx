import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Set Rules (10 Min)",
      desc: "Use our template to define clear boundaries. No gray areas."
    },
    {
      num: "02",
      title: "Track Daily (2 Min)",
      desc: "Tick mark the tracker. Consistency creates the habit."
    },
    {
      num: "03",
      title: "Reduce Gradually",
      desc: "Cut 15 mins every week using the substitution method."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white relative z-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative p-6 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors duration-300">
              <span className="text-5xl font-black text-slate-200 absolute top-4 right-4">{step.num}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h3>
              <p className="text-slate-600 relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mini Sample Routine */}
        <div className="mt-12 p-6 bg-slate-900 rounded-xl text-white max-w-2xl mx-auto">
          <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-2">Sample Day 1</p>
          <div className="flex items-center gap-4 border-b border-slate-700 pb-3 mb-3">
            <span className="font-mono text-slate-400">5:00 PM</span>
            <span>Phone Box mein jama (Deposit)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">5:15 PM</span>
            <span>Outdoor Play / Block Building</span>
          </div>
        </div>
      </div>
    </section>
  );
};