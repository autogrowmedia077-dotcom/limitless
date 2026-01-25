import React from 'react';
import { Calendar, Shield, Trophy, Activity, FileText } from 'lucide-react';

export const ProductSection: React.FC = () => {
  const scrollToCheckout = () => {
    document.getElementById('checkout-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product-section" className="py-20 px-4 relative z-10 bg-orange-50 rounded-t-[3rem] mt-[-2rem] text-slate-900 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
      
      {/* 7-Day Challenge Banner */}
      <div className="max-w-4xl mx-auto -mt-28 mb-16 relative z-20">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 shadow-xl text-white text-center transform hover:scale-[1.01] transition-transform">
          <h3 className="text-2xl font-bold mb-2">Next 7 days decide your child’s habit direction.</h3>
          <p className="mb-6 opacity-90">Don't let another week pass in "auto-pilot".</p>
          <button onClick={scrollToCheckout} className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-colors">
            Start Day 1 Now
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/2">
           <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-all duration-500">
             <img 
               src="https://picsum.photos/600/800?random=2" 
               alt="Screen Time Reset Planner" 
               className="w-full h-auto"
             />
             <div className="absolute bottom-4 right-4 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-lg font-bold">
               ₹199 Only
             </div>
           </div>
           
           {/* Batch Drop Card */}
           <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex items-center justify-between">
             <div>
               <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Stock Status</p>
               <p className="text-sm font-medium text-slate-800">This week's batch: <span className="text-orange-600">Limited copies</span></p>
             </div>
             <div className="text-right">
               <p className="text-xs text-slate-500">Next restock:</p>
               <p className="text-sm font-bold text-slate-800">Soon...</p>
             </div>
           </div>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Screen Time Reset Toolkit <span className="text-orange-500">.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Designed for Indian school routine. Not a lecture book, but a "Do-it-now" system.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-orange-100 p-3 rounded-lg h-fit text-orange-600"><Calendar size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Daily Routine Planner</h4>
                <p className="text-sm text-slate-600">Subah school se lekar bedtime tak ka visual schedule.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-lg h-fit text-blue-600"><Shield size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Screen Rules Sheet</h4>
                <p className="text-sm text-slate-600">Printable rules jo fridge par stick karein. No confusion.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-green-100 p-3 rounded-lg h-fit text-green-600"><Activity size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">No-Screen Activity Ideas</h4>
                <p className="text-sm text-slate-600">"Main bore ho raha hu" ka instant solution list.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="bg-purple-100 p-3 rounded-lg h-fit text-purple-600"><Trophy size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Weekly Scoreboard</h4>
                <p className="text-sm text-slate-600">Gamify the process so kids enjoy following rules.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <button 
              onClick={scrollToCheckout}
              className="w-full md:w-auto bg-slate-900 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-slate-800 transition-all transform hover:-translate-y-1"
            >
              Get Toolkit - ₹199
            </button>
            <p className="mt-3 text-sm text-slate-500 text-center md:text-left">
              Instant PDF Download (Printable)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};