import React from 'react';
import { Testimonial } from '../types';
import { MessageSquareQuote } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const testimonials: Testimonial[] = [
    { text: "Starting mein tough tha, but the Weekly Scoreboard really helped my son track his own progress.", author: "Parent", location: "Mumbai" },
    { text: "Mujhe laga lectures honge, but these are simple rules. Dinner time is peaceful now.", author: "Parent", location: "Pune" },
    { text: "The alternatives list is a lifesaver. 'Bore ho raha hu' sunna kam ho gaya.", author: "Parent", location: "Delhi" },
    { text: "Best ₹199 spent. We realized we were the ones addicted first.", author: "Parent", location: "Bangalore" },
    { text: "Routine tracker printed and on the fridge. Works like magic.", author: "Parent", location: "Hyderabad" },
    { text: "Rules clear hote hi fights kam hue. Consistency is key.", author: "Parent", location: "Gurgaon" },
  ];

  return (
    <section className="py-16 px-4 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">What Other Parents Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
              <MessageSquareQuote className="text-orange-300 mb-4" size={32} />
              <p className="text-slate-700 italic mb-4">"{t.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.author}</p>
                  <p className="text-xs text-slate-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-orange-50 p-4 rounded-lg inline-block w-full">
           <p className="text-orange-800 font-medium">Common Pattern: "Rules clear hote hi fights kam hue."</p>
        </div>
      </div>
    </section>
  );
};