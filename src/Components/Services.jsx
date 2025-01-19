import SectionName from "../UI/SectionName";

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

          <div></div>
        </div>
      </div>
    </section>
  );
};
