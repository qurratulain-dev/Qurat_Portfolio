import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import SkillsSection from "./SkillsSection";

const leftSkills = [
  { name: "HTML", level: 90, icon: <FaHtml5 color="#E44D26" size={24} /> },
  { name: "CSS", level: 80, icon: <FaCss3Alt color="#1572B6" size={24} /> },
  { name: "JavaScript", level: 70, icon: <FaJs color="#F7DF1E" size={24} /> },
];

const rightSkills = [
  { name: "React", level: 55, icon: <FaReact color="#61DBFB" size={24} /> },
  { name: "Tailwind CSS", level: 70, icon: <SiTailwindcss color="#38BDF8" size={24} /> },
  { name: "Bootstrap", level: 80, icon: <FaBootstrap color="#7952B3" size={24} /> },
];

export default function FrontEnd() {
  return <SkillsSection title="Front End" leftSkills={leftSkills} rightSkills={rightSkills} />;
}
