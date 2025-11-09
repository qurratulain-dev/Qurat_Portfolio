import React from "react";
import { SiMysql, SiPhp } from "react-icons/si";
import SkillsSection from "./SkillsSection";

const leftSkills = [
  { name: "MySQL", level: 55, icon: <SiMysql className="text-[#00758F]" size={24} /> },
];

const rightSkills = [
  { name: "PHP", level: 60, icon: <SiPhp className="text-[#777BB4]" size={24} /> },
];

export default function BackEnd() {
  return <SkillsSection title="Back End" leftSkills={leftSkills} rightSkills={rightSkills} />;
}
