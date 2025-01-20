import FeaturesCard from "../UI/FeaturesCard";
import SectionName from "../UI/SectionName";

function Features() {
  return (
    <section className="bg-[url(./bg-filter/features-bg-filter.png)] bg-no-repeat bg-cover">
      <div className="container py-16 md:py-40">
        <SectionName>Some of Wonderful Features</SectionName>

        <div className="space-y-12 md:space-y-20 lg:space-y-32 pt-10 md:pt-20 px-3 md:p-0">
          <FeaturesCard
            className="bg-[#093015]"
            imgsrc="1st-card.png"
            imgsrc2="feature-card-1.png"
          >
            One Click Blance <br className="hidden md:block" /> view
          </FeaturesCard>
          <FeaturesCard
            className="bg-[#16311F] md:flex-row-reverse"
            imgsrc="2nd-card.png"
            imgsrc2="feature-card-2.png"
          >
            Expense with Our <br className="hidden md:block" /> Limiter
          </FeaturesCard>
          <FeaturesCard
            className="bg-[#093015] pe-0"
            imgsrc="3rd-card.png"
            imgsrc2="feature-card-3.png"
          >
            Custome & Plugin <br className="hidden md:block" /> Development.
          </FeaturesCard>
        </div>
      </div>
    </section>
  );
}

export default Features;
