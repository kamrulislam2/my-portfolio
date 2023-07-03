import React from "react";
import "./experience.css";

const ExperienceCard = () => {
  return (
    <div className="flex justify-center items-center gap-6 lg:gap-20 px-10 lg:px-28 py-10 mb-16 bg-[#2A2344]  text-white relative box-border">
      {/* className="text-center border-dashed border  w-52 h-32 rounded-r-2xl rounded-b-none flex justify-center items-center flex-col" */}
      <div className="box overflow-hidden bg-black flex items-center justify-center flex-col">
        <h2 className="text-3xl font-extrabold relative z-10">01+</h2>
        <p className="text-xl font-semibold relative z-10">Year Experience</p>
      </div>
      <div className="box overflow-hidden bg-black flex items-center justify-center flex-col">
        <h2 className="text-3xl font-extrabold relative z-10">12+</h2>
        <p className="text-xl font-semibold relative z-10">Projects</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
