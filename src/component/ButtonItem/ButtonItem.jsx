import React from "react";

const ButtonItem = ({ icon, text, href }) => {
  return (
    <a
      href={href}
      className="relative overflow-hidden border-2 border-emerald-500 text-white px-6 py-3 rounded-lg 
       font-medium flex items-center gap-2 transition-all duration-500 group"
    >
      <span className="w-5 h-5 relative z-10">{icon}</span>
      <span className="relative z-10">{text}</span>

      {/* Animated overlay */}
      <span
        className="absolute top-0 left-0 w-full h-full bg-emerald-500 origin-bottom-left 
         -rotate-90 group-hover:rotate-0 transition-transform duration-500 ease-in-out z-0"
      ></span>
    </a>
  );
};

export default ButtonItem;
