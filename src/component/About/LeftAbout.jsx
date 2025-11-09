import { aboutGsapAnimation } from "./aboutGsap";
import React, { useEffect, useRef } from "react";


const LeftAbout = () => {
  const aboutRef = useRef(null);

    useEffect(() => {
        aboutGsapAnimation(aboutRef);
    }, []);
  return (
    <div ref={aboutRef} className="flex flex-col gap-6 basis-[45%]">
                    {/* Experience Box */}
                    <div  className="group border  border-emerald-600/40 bg-gray-900/40 
                  rounded-xl text-center px-16 py-9 transition-all duration-300 ease-in-out 
                  hover:bg-emerald-500/5 hover:border-emerald-500 
                  aspect-square w-[320px] mx-auto flex flex-col justify-center items-center">
                        <h3 className="font-bold text-emerald-400 counter text-8xl" data-target="8">
                            0
                        </h3>
                        <p className="text-white text-4xl font-semibold mt-5">
                            Months of Experience
                        </p>
                    </div>

                    {/* Projects Box */}
                    <div className="group border border-emerald-600/40 bg-gray-900/40 
                  rounded-xl text-center p-4 transition-all duration-300 ease-in-out 
                  hover:bg-emerald-500/5 hover:border-emerald-500 
                   aspect-square w-[320px] h-30 mx-auto flex flex-col justify-center items-center ">
                        <h3 className="text-4xl font-bold text-emerald-400 counter" data-target="15">
                            0
                        </h3>
                        <p className="text-white mt-2 text-2xl font-semibold">
                            Projects Completed
                        </p>
                    </div>
                </div>
  )
}

export default LeftAbout
