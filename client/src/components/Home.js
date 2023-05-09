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
          className="absolute top-0 left-0 -z-10 h-[55rem] sm:h-[32rem] lg:h-[60rem] object-cover mt-20 w-full opacity-80"
        />
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-40 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-4xl sm:text-7xl font-bold text-gray">
              Home Inventory
            </h2>
            <p className="text-gray-800 py-4 max-w-md">
              Lorem ITEMS, dolor sit amet consectetur adipisicing elit. Amet
              iusto quisquam eius enim, deleniti assumenda rem sed fuga labore
              commodi.
            </p>
            <div className="mb-20 md:mb-32 xl:mb-48">
              <Link
                to="feature"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
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
