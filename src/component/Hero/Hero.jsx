import React, { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import NavLinks from "../Navbar/NavLinks";
import HeroButton from "./HeroButton";
const Hero = () => {

  return (
    <section id="home" className=" mb-10 md:mb-2">
      <div className="max-w-6xl mx-auto px-10 min-h-screen  md:mt-[14vh] mt-[11vh] flex items-center justify-center text-center gap-10 flex-col-reverse md:flex-row ">
        <div className="space-y-5">
          {/* Intro */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-white ">
            <p className="font-light text-emerald-500 text-2xl text-start md:ml-[11vw] ml-[18vw]">I AM</p>
            <span>Quratulain</span>, a{" "}
          </h1>

          {/* Typewriter Roles */}
          <TypeAnimation
            sequence={["Web Designer", 2000, "Web Developer", 2000, "UI/UX Designer", 2000]}
            wrapper="h2"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl font-semibold text-emerald-500 hero-typewriter"
          />

          {/* Paragraph */}
          <p className="text-gray-300 max-w-xl">
            As a Front-End Developer, I specialize in creating responsive, user-friendly, and visually appealing web interfaces
            using HTML, CSS, JavaScript, and modern frameworks.
          </p>

          {/* Buttons */}
            <HeroButton />


          {/* Social */}
          <p className="font-light text-white text-xl mt-[10vh] text-left">Find me on</p>
          <NavLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
