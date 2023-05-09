import React from "react";
import { Link } from "react-router-dom";
import twitter from "../Assets/twitter.png";
import facebook from "../Assets/facebook.png";
import linkedin from "../Assets/linkedin.png";
import instagram from "../Assets/instagram.png";

const Footer = () => {
  return (
    <div
      id="footer"
      name="Feedback"
      className="bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div>
          <h2 className="text-4xl font-bold pt-10 sm:pt-8 inline border-b-1 border-gray-500">
            Feedback
          </h2>
          <p className="py-3">We appreciate your feedback </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/bceea5a5-1bf3-4e6f-95a7-e5f19b49f913"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="my-3 p-1 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>

            <textarea
              name="message"
              placeholder="Enter your Feedback"
              rows="5"
              className="p02 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-row p-4 justify-center max-w-screen-lg mx-auto h-full">
          <a href="/" className="mx-2">
            <img src={twitter} alt="Twitter" className="h-8" />
          </a>
          <a href="/" className="mx-2">
            <img src={facebook} alt="Facebook" className="h-8" />
          </a>
          <a href="/" className="mx-2">
            <img src={instagram} alt="Instagram" className="h-8" />
          </a>
          <a href="/" className="mx-2">
            <img src={linkedin} alt="LinkedIn" className="h-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
