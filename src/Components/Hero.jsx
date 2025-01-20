import React from "react";
import { Button } from "../UI/Button";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

function Hero() {
  return (
    <section className="md:pb-16 px-2">
      <div className="bg-[url(./bg-filter/hero-bg.png)] bg-cover bg-bottom flex flex-col items-center py-9 md:py-[7rem]">
        <div className="text-center">
          <h1 className="text-4xl md:text-5px lg:text-6xl md:leading-[74px] font-semibold md:font-bold">
            We make it easy for <br /> everyone to invest
          </h1>
          <p className="sm:text-lg sm:leading-[30px] mt-6 px-4 md:px-0 text-justify sm:text-center">
            Investment is a term with several meanings related to finance and
            economics. The term relates <br className="hidden md:block" /> to
            the accumulation of an assets in the forms of an expectation of the
            future profits.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 text-xl font-medium py-2 mt-10">
          <Button>Get Started</Button>
          <Button className="bg-transparent text-primary flex items-center gap-3">
            <MdOutlinePlayCircleFilled className="text-2xl" /> Watch Demo
          </Button>
        </div>
      </div>

      {/* Images of Hero Section  */}
      <div className="bg-[url(./bg-filter/hero-image-bg.png)] bg-no-repeat bg-cover -mt-10 md:-mt-14 px-3 md:px-0">
        <div className="container flex flex-col md:flex-row justify-center gap-3 md:gap-[25px] scale-90 sm:scale-100">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[25px]">
            <img src="./img/hero-img-1.png" />
            <div className="space-y-3 md:space-y-[25px]">
              <img src="./img/hero-img-2.png" />
              <div className="flex justify-center gap-3 md:gap-[25px]">
                <img src="./img/hero-img-5.png" />
                <img src="./img/hero-img-6.png" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-[25px]">
            <div className="space-y-3 md:space-y-[25px]">
              <img src="./img/hero-img-3.png" />
              <img src="./img/hero-img-7.png" />
            </div>
            <img src="./img/hero-img-4.png" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
