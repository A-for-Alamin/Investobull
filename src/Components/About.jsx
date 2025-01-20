import { Button } from "../UI/Button";

function About() {
  return (
    <section className="bg-[url(./bg-filter/about-bg.png)] bg-no-repeat bg-cover py-12 my-16">
      <div className="container bg-[url(./bg-filter/about-bg-filter.png)] flex flex-col md:flex-row justify-between items-center px-5 gap-y-8">
        <img src="./img/about-img.png" alt="about-img" />

        <div className="md:w-1/2 space-y-4 md:space-y-[22px]">
          <img src="./icons/qout.png" />
          <p className="text-xl md:text-[42px] md::leading-[50px] lg:leading-[57px]">
            Deski combines excellent live chat, ticketing and automation that
            allow us to provide quality.
          </p>

          <div className="md:text-xl pb-4 md:pb-8">
            <p>Mike Lucas.</p>
            <strong>CEO & Founder</strong>
          </div>

          <Button className="text-black rounded-full font-medium w-full md:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
