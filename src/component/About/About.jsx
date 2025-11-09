import React from "react";
import LeftAbout from "./LeftAbout";
import RightAbout from "./RightAbout";

const About = () => {
    

    return (
        <section  id="about" className="min-h-screen mb-10">
            <div className="max-w-6xl mx-auto px-10 flex flex-col-reverse md:flex-row gap-10 items-center ">
                <LeftAbout />
                {/* RIGHT SIDE */}
               <RightAbout />
            </div>
        </section>
    );
};

export default About;
