import { FaAnglesDown } from "react-icons/fa6";

function Footer() {
  return (
    <div className="flex flex-col items-center border-2 border-t-0 rounded-bl-xl rounded-br-xl relative">
      <p className="absolute top-2 left-5">
        <FaAnglesDown size={24} className="text-[#b99b58]" />
      </p>
      <h2 className="text-gray-600 text-3xl uppercase font-medium">
        global rundown
      </h2>
      <div className="flex justify-between flex-col w-[300px]">
        <div className="flex items-center gap-2">
          <p className="text-gray-600 pl-[7px] uppercase font-medium leading-5">
            segiun
          </p>
          <p className="border border-gray-800 h-[10px] bg-gray-600 w-3/6"></p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-800 uppercase font-medium  leading-5">
            Conroe
          </p>
          <p className="border border-gray-800 h-[10px] bg-gray-800 w-full"></p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-gray-400 pl-[2px] uppercase font-medium  leading-5">
            Gunter
          </p>
          <p className="border border-gray-800 h-[10px] bg-gray-400 w-2/6"></p>
        </div>
      </div>
      {/* icon area */}
      <div className="flex justify-between gap-8">
        <div className="flex gap-2 items-center justify-center">
          <p className="text-2xl flex gap-2 font-medium uppercase">
            <span>units</span>
            <span className="text-gray-400">00000</span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <p className="text-2xl flex gap-2 font-medium uppercase">
            <span>tons</span>
            <span className="text-gray-400">00000</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-1">
        <p className="text-gray-400 uppercase">january 20 2024 || 7:03 am</p>
      </div>
    </div>
  );
}

export default Footer;
