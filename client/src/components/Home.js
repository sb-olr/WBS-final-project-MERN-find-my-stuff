import React from "react";
import homeing from "../Assets/homeing.png";
import Features from "./Features";
import Footer from "./Footer";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="w-full from-black via-black to-gray-800 h-screen"
      >
        <img
          src={homeing}
          alt="img"
          className="absolute top-0 left-0 -z-10 h-[60rem] sm:h-[6
            2rem] lg:h-[60rem] object-cover mt-20 w-full opacity-80"
        />
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-30 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-4xl text-blue-400 sm:text-7xl font-bold pt-40 font-serif">
              Manage your stuff before it manages you!
            </h3>

            <p className="text-black-400 pb-2 max-w-md font-serif">
              My Stuff allows you to catalog, organize and track your
              possessions. You can create a comprehensive list of all your
              belongings.
            </p>
            <div className="mb-20 md:mb-32 xl:mb-48">
              <Link
                to="feature"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-2  ml-[8rem] my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                style={{ textDecoration: "none" }}
              >
                Features
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardDoubleArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Features />
      <Footer />
    </>
  );
};
export default Home;
