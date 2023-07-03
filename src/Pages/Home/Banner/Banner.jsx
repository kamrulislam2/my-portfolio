import React from "react";
import img from "../../../assets/Kamrul Islam.png";
import bgImage from "../../../assets/web-developer.jpg";

const Banner = () => {
  return (
    <div
      className="h-[100vh] bg-cover bg-no-repeat bg-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-gradient-to-r from-black h-full flex flex-col-reverse lg:flex-row lg:justify-between gap-10 px-10 lg:px-28 items-center pt-24 pb-16">
        <div className="space-y-6 lg:space-y-10 w-full lg:w-1/2">
          <div className="space-y-4">
            <p className="text-sm lg:text-lg bg-red-950 border-red-600 rounded p-2 w-28 lg:w-[131px] uppercase shadow-2xl">
              Welcome To,
            </p>
            <div className="lg:space-y-2">
              <h2 className="text-2xl lg:text-5xl uppercase font-extrabold">
                Kamrul Islam's
              </h2>
              <p className="text-base lg:text-xl flex flex-col">
                MERN Stack Developer
                <small className="hidden lg:block text-xs">
                  MongoDB, ExpressJs, React.Js, Node.Js
                </small>
              </p>
            </div>

            <p className="text-sm lg:text-lg">
              Dynamic MERN stack developer with a passion for staying up-to-date
              with the latest industry trends and emerging technologies. Seeking
              an opportunity to contribute to a collaborative development team,
              utilizing my expertise in the MERN stack to develop innovative
              solutions and drive business growth
            </p>
          </div>

          <button className="bg-transparent px-5 py-3 text-lg rounded-lg transition border-b-4 border-r-2 border-red-900 hover:border-0 hover:-translate-y-1 hover:scale-110 ease-in-out delay-150 hover:bg-red-950">
            Contact Us
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
          <img
            className="w-44 lg:w-96 h-full border-2 rounded-full border-red-950"
            src={img}
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
