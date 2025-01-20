import React from "react";
import { Button } from "../UI/Button";

function Trial() {
  return (
    <section className="py-24 px-2">
      <div className="container rounded-3xl bg-[#086436] bg-[url(./bg-filter/trial-bg-filter.png)] bg-cove text-white flex flex-col md:flex-row justify-between p-4 md:p-[84px] gap-y-5">
        <div>
          <p className="text-xl">Stert your free trial.</p>
          <h2 className="font-semibold md:font-bold text-3xl md:text-4xl lg:text-5xl md:leading-[58px]">
            New user? Start your <br className="hidden md:block" /> free trial
            now.
          </h2>
        </div>
        <div className="md:w-1/2 space-y-2 md:space-y-[23px]">
          <div className="bg-white rounded-full p-2 flex justify-between overflow-hidden">
            <input
              type="email"
              placeholder="Email address"
              className="border-none outline-none ps-1 md:ps-5 text-black md:text-xl"
            />
            <Button className="bg-Background rounded-full text-xs md:text-base p-2 px-3.5 text-nowrap">
              Start Trial
            </Button>
          </div>

          <p className="text-sm md:text-base">
            Already a member?{" "}
            <span className="text-primary cursor-pointer">Sign in.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Trial;
