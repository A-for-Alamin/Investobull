import { twMerge } from "tailwind-merge";

export default function FeaturesCard({ imgsrc, imgsrc2, children, className }) {
  return (
    <div
      className={twMerge(
        "text-white flex flex-col md:flex-row justify-between rounded-[30px] p-3 pb-0 md:p-0 overflow-hidden shadow-sm",
        className
      )}
    >
      <div className="md:p-24 lg:w-1/2 space-y-4">
        <img src={`./icons/${imgsrc}`} />
        <h3 className="font-semibold text-2xl md:text-[40px] md:leading-10">
          {children}
        </h3>
        <p className="text-lg md:text-[22px] text-[#C0BDBD] pb-5">
          Commonly used in the graphic, print & publishing industris for
          previewing visual layout and mockups.
        </p>
        <img src="./icons/arrow.png" />
      </div>
      <div className="flex items-end mt-3 md:mt-0">
        <img src={`./img/${imgsrc2}`} />
      </div>
    </div>
  );
}
