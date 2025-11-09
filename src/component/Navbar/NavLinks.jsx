import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const NavLinks = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      href: "https://github.com/qurratulain-dev",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      href: "http://www.linkedin.com/in/qurratulain-reactdeveloper",
    },
  ];

  return (
    <div className="flex items-center gap-5">
      {socialLinks.map(({ id, icon, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-item w-10 h-10 text-gray-100 inline-flex items-center justify-center 
                     bg-white/10 rounded-full text-xl z-1 transition-all duration-400 
                     hover:text-emerald-400 hover:scale-110 hover:shadow-[0_0_15px_#10b981]"
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
