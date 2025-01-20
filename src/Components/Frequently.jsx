import React from "react";
import SectionName from "../UI/SectionName";
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from "keep-react";

function Frequently() {
  return (
    <section>
      <div className="container md:py-20">
        <SectionName>
          Frequently Asked <br className="hidden md:block" /> Question
        </SectionName>

        <div className="md:py-10 py-5 px-2">
          {Array.from(Array(4).keys()).map((i) => (
            <Accordion
              flush={true}
              type="single"
              key={i}
              defaultValue={1}
              collapsible
            >
              <AccordionItem value={i + 1}>
                <AccordionAction>
                  <AccordionTitle className="font-semibold md:font-bold text-start text-white text-lg md:text-[28px]">
                    Lorem ipsum dolor sit amet consterqeur?
                  </AccordionTitle>
                  <AccordionIcon />
                </AccordionAction>
                <AccordionContent className="text-white/80 text-sm md:text-base">
                  Web hosting is a data storage service so that a website can be
                  accessed online. This website data is stored in a storage
                  space called a web hosting server which is always active 24
                  hours a day. The quality of web hosting services can determine
                  the success of your business as well as all your website
                  activities. Without a quality web hosting service, a website
                  may not be accessed properly. Therefore, always use the best
                  web hosting service for your website
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Frequently;
