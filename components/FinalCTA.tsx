import React from "react";
import { Lock } from "lucide-react";
import { BuyNowButton } from "@/components/BuyNowButton";

export const FinalCTA: React.FC = () => {
  return (
    <section id="checkout-section" className="py-16 px-4 text-center">
      <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-orange-500/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Kal mat socho. Aaj start karo.
          </h2>

          <p className="text-slate-300 text-lg mb-8">
            Your child’s habits won’t wait. Why should you?
          </p>

          <div className="bg-white/10 p-6 rounded-xl mb-8 backdrop-blur-sm border border-white/10">
            <div className="flex justify-between items-center mb-2 text-sm text-slate-300">
              <span>Screen Time Reset Toolkit</span>
              <span className="line-through">₹999</span>
            </div>

            <div className="flex justify-between items-center mb-4 text-2xl font-bold">
              <span>Total</span>
              <span className="text-orange-400">₹199</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded w-fit">
              + Bonus: 7-Day Reset Guide (Free)
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <BuyNowButton />
          </div>

          <p className="mt-4 text-xs text-slate-500 flex items-center justify-center gap-1">
            <Lock size={12} />
            Secure One-Time Payment
          </p>
        </div>
      </div>
    </section>
  );
};
