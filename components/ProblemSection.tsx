import React from 'react';
import { XCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const painPoints = [
    "Khana khate waqt phone compulsory hai.",
    "Homework ke time tantrums aur bargaining.",
    "Bahar khelne jaane ka man nahi karta.",
    "Chid-chida pan (Aggression) badh raha hai.",
    "Sone se pehle 'bas 5 minute aur' ki rat."
  ];

  return (
    <section id="problem-section" className="py-16 px-4 md:px-8 relative z-10 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-blue-100">The Problem</h2>
        <p className="text-center text-slate-400 mb-12">Identify the signs before it's too late</p>

        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-8 md:p-10 shadow-2xl">
          <ul className="space-y-6">
            {painPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-4">
                <XCircle className="text-red-400 shrink-0 mt-1" size={24} />
                <span className="text-lg md:text-xl text-slate-200">{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 p-6 bg-red-900/30 border border-red-500/30 rounded-xl text-center">
             <p className="text-red-200 font-medium italic text-lg">
               “Screen time badhta hai quietly… aur ek din realize hota hai control haath se nikal gaya.”
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};