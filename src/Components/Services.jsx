import Card from "../UI/Card";
import SectionName from "../UI/SectionName";

const serviceCards = ["Guarantee Safety", "All in One App", "Easy to Use"];

function Services() {
  return (
    <section>
      <div className="relative z-10 overflow-hidden py-8 md:py-20 font-DMSans">
        <img
          className="absolute top-0 -z-10 scale-50 md:scale-100 -translate-x-10 md:translate-x-0"
          src="./bg-filter/service-filter-left.png"
          alt="Background Filter"
        />
        <img
          className="absolute right-0 -z-10 scale-50 md:scale-100 translate-x-20 md:translate-x-0"
          src="./bg-filter/service-filter-right.png"
          alt="Background Filter"
        />

        <div className="container py-14 md:py-28">
          <SectionName>
            Our Best Services <br /> For Your Convinience
          </SectionName>
        </div>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-[120px]">
          {serviceCards.map((serviceCard, i) => (
            <Card key={i} children={serviceCard} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
