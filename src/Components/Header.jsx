import { FiX } from "react-icons/fi";
import { Button } from "../UI/Button";
import React, { useCallback, useEffect, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

// Nav Links Array
const NavLinks = ["Home", "Service", "Features", "Payment"];

// Header Components
export const Header = () => {
  //State Navbar Open / Close When on mobile screen.
  const [openNav, setOpenNav] = useState(false);

  // Navbae Border Control
  const [navborder, setNavborder] = useState(false);

  // Click Function for Navbar Open and Close.
  const handleNavBar = () => {
    setOpenNav(!openNav);
  };

  const handleScroll = useCallback(() => {
    setNavborder(window.scrollY >= 150);
  }, []);

  // Effect to Add/Remove Scroll Event Listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <header
        className={`sticky top-0 py-1 md:py-3 px-2 bg-Background z-40 ${
          navborder && "border-b border-[#33393F]"
        }`}
      >
        <div className="container flex justify-between items-center font-DMSans">
          <img
            className="scale-75 md:scale-90 lg:scale-100"
            src="./Logo/logo.png"
            alt="Website Logo"
          />

          {/* Nav Item  */}
          <nav
            className={`absolute md:static w-full md:w-auto left-0 top-full md:block ${
              !openNav && "hidden"
            }`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-8 lg:gap-14 py-5 md:py-0 px-4 text-center text-white bg-green-500 md:bg-transparent">
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

          <Button className="hidden md:block md:px-5 md:py-3 md:text-sm rounded-full font-bold lg:px-10 lg:py-4 lg:text-base">
            Download The App
          </Button>

          {/* Nav Icons  */}
          <div className="text-white text-2xl md:hidden" onClick={handleNavBar}>
            {openNav ? <FiX /> : <HiMiniBars3CenterLeft />}
          </div>
        </div>
      </header>
    </>
  );
};
