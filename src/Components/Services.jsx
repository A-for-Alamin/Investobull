import { IoMdRadio } from "react-icons/io";
import Card from "../UI/Card";
import SectionName from "../UI/SectionName";

const serviceCards = ["Guarantee Safety", "All in One App", "Easy to Use"];

export const Services = () => {
  return (
    <section>
      <div className="relative z-10 overflow-hidden">
        <img
          className="absolute top-0 -z-10 scale-50 md:scale-100 -translate-x-10 md:translate-x-0"
          src="./img/service-filter-left.png"
          alt="Background Filter"
        />
        <img
          className="absolute right-0 -z-10 scale-50 md:scale-100 translate-x-20 md:translate-x-0"
          src="./img/service-filter-right.png"
          alt="Background Filter"
        />

        <div className="container py-28">
          <SectionName>
            Our Best Services <br /> For Your Convinience
          </SectionName>
        </div>
        <div className="flex justify-center gap-[120px]">
          {serviceCards.map((serviceCard, i) => (
            <Card key={i} children={serviceCard} />
          ))}
        </div>
      </div>
    </section>
  );
};
