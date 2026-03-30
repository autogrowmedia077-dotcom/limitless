import React from "react";

export const BuyNowButton: React.FC = () => {
  return (
    <a
      href="https://payments.cashfree.com/forms/limitlesskid"
      className="
        inline-flex items-center justify-center
        h-12 px-8
        bg-[#E19100]
        text-white font-bold text-sm
        rounded-lg
        hover:bg-[#d48400]
        transition-all
        shadow-lg shadow-orange-500/20
      "
    >
      Buy Now
    </a>
  );
};
