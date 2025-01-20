import React from "react";
import SectionName from "../UI/SectionName";
import InvestobullCard from "../UI/InvestobullCard";

function Investobull() {
  return (
    <section>
      <div className="container py-10 md:mt-10">
        <SectionName>
          These are why you should use <br /> Investobull
        </SectionName>
      </div>
      <div className="flex flex-col md:flex-row px-4 md:mb-10">
        <div className="md:w-1/2">
          <InvestobullCard
            className="border-b border-[#E6E6E6]"
            imgsrc="investo-img-1.png"
            label="Lots Choices"
            describe="There are various types of investments available and you can choose investments"
          />
          <InvestobullCard
            className="border-b border-[#E6E6E6] md:border-none"
            imgsrc="investo-img-2.png"
            label="High Profit"
            describe="The money or assets will gradually grow or increase in value within a certain period"
          />
        </div>
        <div className="w-[1px] bg-gradient-to-b from-transparent via-[#E6E6E6] to-transparent hidden md:block" />
        <div className="md:w-1/2 md:pt-32">
          <InvestobullCard
            className="border-b border-[#E6E6E6]"
            imgsrc="investo-img-3.png"
            label="Minimal Risk"
            describe="Interest rate risk in the risk that arises because the relative value"
          />
          <InvestobullCard
            imgsrc="investo-img-4.png"
            label="Legal"
            describe="Our platform has been verified and supervised by related institutions"
          />
        </div>
      </div>
    </section>
  );
}

export default Investobull;
