import { IoMdRadio } from "react-icons/io";

export default function Card({ children }) {
  return (
    <div className="text-white max-w-[280px]">
      <div>
        <IoMdRadio className="p-2 pt-5 bg-primary text-6xl rounded-full" />
      </div>
      <h3 className="font-medium text-3xl mb-4 mt-6">{children}</h3>
      <p>
        Lorem ipsum dolor sit amet, etetcera ut consectetur adipiscing elit, sed
        do terru eiusmod tempor incididunt ut labore et dolore magna.
      </p>
    </div>
  );
}
