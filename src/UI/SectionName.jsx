export default function SectionName({ children }) {
  return (
    <div className="text-white flex flex-col justify-center items-center text-center font-DMSans">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold md:font-bold md:leading-[64px]">
        {children}
      </h2>
      <p className="mt-2 mb-6 md:mt-[15px] md:mb-[44px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <br className="hidden md:block" /> sed do eiusmod tempor incididunt ut
        labore et dolore magna.
      </p>
      <img
        className="scale-75 md:scale-100"
        src="./bg-filter/name-underline.png"
        alt="Name-Underline"
      />
    </div>
  );
}
