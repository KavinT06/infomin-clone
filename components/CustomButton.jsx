import React from "react";

const CustomButton = () => {
    return (
        <button className="relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden hover:text-[#00ccff] hover:border-[#00ccff] transition-all duration-500 group">
            <span className="relative z-10">See more</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#3b065e] to-[#00ccff] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        </button>
    );
};

export default CustomButton;
