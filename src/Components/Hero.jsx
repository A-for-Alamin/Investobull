import React from "react";
import { Button } from "../UI/Button";

function Hero() {
  return (
    <section className="pb-16">
      <div className="bg-[url(./img/hero-bg.png)] bg-cover flex flex-col items-center py-[8rem]">
        <div className="text-white text-center mt-28">
          <h1 className="text-6xl leading-[74px] font-bold">
            We make it easy for <br /> everyone to invest
          </h1>
          <p className="text-lg leading-[30px] mt-5">
            Investment is a term with several meanings related to finance and
            economics. The term relates <br /> to the accumulation of an assets
            in the forms of an expectation of the future profits.
          </p>
        </div>
        <div className="space-x-10 text-xl font-medium py-2">
          <Button>Get Started</Button>
          <Button className="bg-transparent text-primary">Watch Demo</Button>
        </div>
      </div>

      <div className="bg-[url(./img/hero-image-bg.png)] bg-no-repeat bg-cover -mt-16">
        <div className="container flex md:flex-row justify-center gap-[25px]">
          <div className="flex items-center gap-[25px]">
            <img src="./img/hero-img-1.png" />
            <div className="space-y-[25px]">
              <img src="./img/hero-img-2.png" />
              <div className="flex gap-[25px]">
                <img src="./img/hero-img-5.png" />
                <img src="./img/hero-img-6.png" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[25px]">
            <div className="space-y-[25px]">
              <img src="./img/hero-img-3.png" />
              <img src="./img/hero-img-7.png" />
            </div>
            <img src="./img/hero-img-4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
