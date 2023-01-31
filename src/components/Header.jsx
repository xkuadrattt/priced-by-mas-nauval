import React, { useState } from "react";

const Header = function () {
  // Arbitary Variants
  const hoverNavLinkStyle = "[&>li>a:hover]:font-bold";
  const hamburgerStyle =
    "[&>span]:block [&>span]:w-[2rem] [&>span]:h-[.25rem] [&>span]:my-[.25rem] [&>span]:bg-slate-700";

  // End Arbitaty Variant

  // useState for responsive menu
  const [toggle, useToggle] = useState("false");

  const handleResponsive = function () {
    return useToggle(function (prevToggle) {
      return !prevToggle;
    });
  };

  // End useState for responsive menu

  return (
    <header className="text-white py-4 font-sans">
      <div className="container mx-auto px-4 sm:px-0 flex justify-between relative [&>nav]:md:flex [&>nav]:md:static md:static [&>nav]:transition-[500ms] [&>nav]:md:basis-[80%] ">
        <h1 className="text-[1.25rem] font-bold self-center cursor-default">
          Strawrage
        </h1>
        <button
          onClick={handleResponsive}
          className={`absolute right-[1rem] sm:right-0 md:hidden z-10 ${hamburgerStyle}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav
          className={
            toggle
              ? `hidden`
              : `flex absolute flex-col md:flex-row justify-between md:gap-[2rem] md:static bg-blue-800 top-[3rem] right-0 left-0 md:bg-transparent w-full py-10 md:py-0`
          }
        >
          <ul
            className={`grid-rows-4 my-6 md:my-0 gap-[2rem] md:gap-0 md:grid-rows-1 md:grid-cols-4 grid md:w-[70%] mx-auto md:items-center text-center font-medium [&>li]:sm:w-[8rem] ${hoverNavLinkStyle}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#" style={{ fontWeight: "bold" }}>
                Pricing
              </a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <button className="px-[.75rem] py-[.7rem] font-bold bg-acsent hover:bg-acsent/80 rounded-lg w-[7rem] mx-auto md:w-auto md:mx-0">
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
