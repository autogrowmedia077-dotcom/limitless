import React, { useState } from 'react';
import { ToggleLeft, ToggleRight, Clock } from 'lucide-react';

export const CostOfWaiting: React.FC = () => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <section className="py-20 px-4 bg-orange-50 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Comparison Table */}
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">The Cost of Waiting</h2>
        <p className="text-center text-slate-600 mb-10">₹199 ka decision chhota hai. Delay ka cost bada.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 mb-16">
          <div className="bg-white p-8 rounded-t-2xl md:rounded-2xl border-l-4 border-red-400 shadow-sm opacity-75">
            <h3 className="text-red-500 font-bold mb-4 uppercase text-sm tracking-wide">If you delay 30 days...</h3>
            <ul className="space-y-3 text-slate-700">
              <li>• More bargaining ("Bas 2 min")</li>
              <li>• Harder to change established routine</li>
              <li>• Brain seeks more dopamine cues</li>
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-b-2xl md:rounded-2xl border-l-4 border-green-500 shadow-xl transform md:-translate-y-4">
            <h3 className="text-green-600 font-bold mb-4 uppercase text-sm tracking-wide">If you start today...</h3>
            <ul className="space-y-3 text-slate-800 font-medium">
              <li>• Clear boundaries set</li>
              <li>• More quality family time</li>
              <li>• Better sleep & dinner structure</li>
            </ul>
          </div>
        </div>

        {/* Interactive Toggle */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white mb-16 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6">Imagine your evening...</h3>
          
          <div className="flex items-center justify-center gap-4 mb-6 cursor-pointer" onClick={() => setIsAfter(!isAfter)}>
            <span className={`text-sm md:text-base font-medium ${!isAfter ? 'text-white' : 'text-slate-500'}`}>Current Reality</span>
            {isAfter ? <ToggleRight className="text-green-400" size={48} /> : <ToggleLeft className="text-slate-400" size={48} />}
            <span className={`text-sm md:text-base font-medium ${isAfter ? 'text-green-400' : 'text-slate-500'}`}>Goal Reality</span>
          </div>

          <div className="min-h-[100px] flex items-center justify-center">
            {isAfter ? (
              <p className="text-xl md:text-2xl font-serif text-green-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
                "Dinner table par baatein ho rahi hain. No phone nearby. Bachha time par so gaya."
              </p>
            ) : (
              <p className="text-xl md:text-2xl font-serif text-slate-300 animate-in fade-in slide-in-from-bottom-4 duration-500">
                "Khana khane ke liye phone chahiye. TV band karne par rona dhona. Exhausted parents."
              </p>
            )}
          </div>
          <p className="text-xs text-slate-500 mt-4">Results depend on consistency.</p>
        </div>

        {/* Regret Minimizer */}
        <div className="text-center max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-slate-800 flex items-center justify-center gap-2 mb-4">
             <Clock size={20} /> Most parents regret one thing...
          </h4>
          <p className="text-slate-600 mb-6">
            Habits deep hote jaate hain. Aaj start karna easier hai than 3 months later.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-red-50 text-red-800 px-3 py-1 rounded-full text-xs">"Maine boundaries late set ki"</span>
            <span className="bg-red-50 text-red-800 px-3 py-1 rounded-full text-xs">"Phone = babysitter ban gaya"</span>
            <span className="bg-red-50 text-red-800 px-3 py-1 rounded-full text-xs">"Routine toot gaya"</span>
          </div>
        </div>

      </div>
    </section>
  );
};