import { FiX } from "react-icons/fi";
import { Button } from "../UI/Button";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";

// Nav Links Array
const NavLinks = ["Home", "Service", "Features", "Payment"];

// Header Components
export const Header = () => {
  //State Navbar Open / Close When on mobile screen.
  const [openNav, setOpenNav] = useState(false);

  // Click Function for Navbar Open and Close.
  const handleNavBar = () => {
    setOpenNav(!openNav);
  };

  return (
    <>
      <header className="sticky top-0 py-1 md:py-3 px-2 bg-Background">
        <div className="container flex justify-between items-center">
          <img
            className="scale-75 md:scale-100"
            src="./Logo/logo.png"
            alt="Website Logo"
          />

          {/* Nav Item  */}
          <nav
            className={`absolute md:static w-full md:w-auto left-0 top-full md:block ${
              !openNav && "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-14 py-5 md:py-0 px-4 text-center text-white bg-slate-500 md:bg-transparent">
              {NavLinks.map((navlink, i) => (
                <li
                  key={i}
                  onClick={handleNavBar}
                  className="cursor-pointer hover:bg-primary/70 md:hover:bg-transparent w-full py-2 md:p-0 rounded-sm"
                >
                  {navlink}
                </li>
              ))}

              <Button className="md:hidden rounded-full font-semibold scale-75">
                Download The App
              </Button>
            </ul>
          </nav>

          <Button className="hidden md:block rounded-full font-bold">
            Download The App
          </Button>

          {/* Nav Icons  */}
          <div className="text-white text-2xl md:hidden" onClick={handleNavBar}>
            {openNav ? <FiX /> : <HiMiniBars3BottomLeft />}
          </div>
        </div>
      </header>
    </>
  );
};
