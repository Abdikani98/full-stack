import React from "react";
// import image from "../assets/background.jpg"; // Ensure the correct path to your image
import { NavLink } from "react-router-dom";
import imgOne from "../assets/img3.jpg"

function Header() {
  return (
    <div>
      <div className="bg-violet-900 w-full h-[80px] flex items-center justify-center">
        <h1 className="text-white font-semibold text-3xl">
          Online Complaints Management System
        </h1>
      </div>

      <div
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${imgOne})` }}
      >
        <div>
          <h1 className="text-white text-4xl font-bold  bg-opacity-50 p-4 rounded-lg text-center">
          Form completion refers to the process of filling out a form<br />  such as user registration applications surveys or transactions. <br />{" "}
            
          </h1>
          <NavLink to="/cawasho">
            <button className="ml-[40%] px-10 py-2 bg-violet-700 text-white font-semibold rounded-lg hover:bg-violet-600 transition duration-300">
              Register Now
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
