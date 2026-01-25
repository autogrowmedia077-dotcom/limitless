import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    { question: "Is this a physical book?", answer: "Nahi, yeh ek digital toolkit (PDF) hai. Aap purchase ke baad turant download aur print kar sakte hain." },
    { question: "Meri beti 3 saal ki hai, kya yeh uske liye hai?", answer: "Yes, the toolkit has age-appropriate rules. For toddlers, it helps parents set boundaries early." },
    { question: "Kya mujhe daily print nikalna padega?", answer: "No. Tracker ko ek baar print karein aur laminate kar lein, ya pencil se use karein." },
    { question: "What if it doesn't work?", answer: "Habit change takes time. The system works if you are consistent for at least 7-14 days." },
    { question: "Is it available in Hindi?", answer: "The content is in simple English, easily understandable for Indian parents." },
    { question: "Teenagers ke liye kaam karega?", answer: "Yeh toolkit primarily 3-12 years ke liye best hai. Teenagers need more dialogue-based approach, but rules still apply." },
    { question: "Payment safe hai?", answer: "Ji haan, 100% secure payment gateway use hota hai." },
    { question: "How do I get the Bonus?", answer: "It is included in the main download bundle automatically." },
  ];

  return (
    <section className="py-12 px-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-slate-200 pb-4">
            <button 
              className="w-full flex justify-between items-center text-left py-2 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-slate-800">{item.question}</span>
              {openIndex === index ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-slate-400" />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-slate-600 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-200">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};