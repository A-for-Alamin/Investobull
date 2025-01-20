import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionIcon,
  AccordionItem,
  AccordionTitle,
} from "keep-react";

function Choose() {
  return (
    <section className="mt-14 mb-20 md:my-40 px-4">
      <div className="container flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <div>
            <p className="sm:text-xl text-[#FFE5E5]">GET STARTED IN MINUTES</p>
            <h2 className="text-3xl md:text-[42px] font-semibold ">
              3 Main Reaosn to <br className="hidden md:block" /> Choose us.
            </h2>
            <img src="./bg-filter/name-underline.png" />
          </div>
          <Accordion flush={true} type="single" defaultValue={1} collapsible>
            <AccordionItem value={1}>
              <AccordionAction>
                <AccordionTitle className="font-semibold md:font-bold text-start text-white text-lg md:text-[32px]">
                  Register and create your first support portal
                </AccordionTitle>
                <AccordionIcon />
              </AccordionAction>
              <AccordionContent className="text-white/80 text-sm md:text-base">
                Web hosting is a data storage service so that a website can be
                accessed online. This website data is stored in a storage space
                called a web hosting server which is always active 24 hours a
                day. The quality of web hosting services can determine the
                success of your business as well as all your website activities.
                Without a quality web hosting service, a website may not be
                accessed properly. Therefore, always use the best web hosting
                service for your website
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value={2}>
              <AccordionAction>
                <AccordionTitle className="font-semibold md:font-bold text-start text-white text-lg md:text-[32px]">
                  Manage your dashbaord easily
                </AccordionTitle>
                <AccordionIcon />
              </AccordionAction>
              <AccordionContent></AccordionContent>
            </AccordionItem>
            <AccordionItem value={3}>
              <AccordionAction>
                <AccordionTitle className="font-semibold md:font-bold text-start text-white text-lg md:text-[32px]">
                  Start Investing
                </AccordionTitle>
                <AccordionIcon />
              </AccordionAction>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bg-[url(./bg-filter/choose-bg-filter.png)] bg-no-repeat py-10 pb-32 px-16 relative md:w-1/2 hidden md:block">
          <img src="./img/choose-img-2.png" className="ms-24" />
          <img src="./img/choose-img-1.png" className="absolute top-20" />
        </div>
      </div>
    </section>
  );
}

export default Choose;
