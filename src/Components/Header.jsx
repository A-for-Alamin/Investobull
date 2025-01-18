import React from "react";
import { Button } from "../UI/Button";

const NavLinks = ["Home", "Service", "Features", "Payment"];

export const Header = () => {
  return (
    <>
      <header className="fixed w-full py-3 px-2">
        <div className="container flex justify-between items-center">
          <img src="./Logo/logo.png" alt="Website Logo" />
          <nav>
            <ul className="flex items-center gap-14 text-white">
              {NavLinks.map((navlink, i) => (
                <li key={i} className="cursor-pointer">
                  {navlink}
                </li>
              ))}
            </ul>
          </nav>
          <Button className="rounded-full font-bold">Download The App</Button>
        </div>
      </header>
    </>
  );
};
