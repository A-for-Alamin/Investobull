import React from "react";

function Payment() {
  return (
    <section className="bg-gradient-to-l from-primary/50 pt-3 my-20 relative px-4">
      <img
        src="./bg-filter/payment-bg-filter-2.png"
        className="absolute right-0 hidden md:block"
      />
      <div className="bg-[url(./bg-filter/payment-bg-filter.png)] bg-cover">
        <div className="container flex flex-col md:flex-row gap-7 pt-5">
          <div className="md:w-1/2 relative overflow-hidden">
            <img src="./img/payment2.png" className="py-3 ps-20" />
            <img src="./img/payment1.png" className="absolute top-0" />
          </div>
          <div className="space-y-3 md:space-y-8 my-auto">
            <h3 className="font-medium text-3xl md:text-4xl lg:text-5xl md:leading-[55px]">
              The New Way of <br className="hidden md:block" /> Cashless Payment
            </h3>
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
              <br className="hidden md:block" /> sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-[34px] pt-5">
              <img src="./icons/play.png" />
              <img src="./icons/store.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Payment;
