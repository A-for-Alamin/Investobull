import React from "react";
import { twMerge } from "tailwind-merge";

export default function InvestobullCard({
  imgsrc,
  label,
  describe,
  className,
}) {
  return (
    <div
      className={twMerge(
        "text-white w-full py-10 md:py-32 px-3 grid place-items-center",
        className
      )}
    >
      <div className="max-w-[27rem]">
        <img className="scale-75 md:scale-100" src={`./img/${imgsrc}`} />
        <h3 className="font-bold text-2xl lg:text-[30px] md:mt-8 mb-2">
          {label}
        </h3>
        <img src="./bg-filter/path.png" />
        <p className="font-light text-[26px] lg:text-[35px] md:leading-[52px] mt-3">
          {describe}
        </p>
      </div>
    </div>
  );
}
