import { HiOutlineMenu } from "react-icons/hi";
import { FiMoon } from "react-icons/fi";
import { FaExpand } from "react-icons/fa";

function Headline() {
  return (
    <div className="flex flex-col items-center border-2 border-b-0 rounded-tl-xl rounded-tr-xl">
      <h2 className="text-[#a0181d] text-4xl uppercase font-medium">
        production eye
      </h2>
      <div className="flex justify-between gap-2">
        <p className="text-xs">
          <span className="font-medium">Area Temps:</span> Segiun:
          <span className="font-medium"> 44°</span>/
          <sup className="text-gray-600">43°</sup>
        </p>
        <p className="text-xs">
          Conroe:
          <span className="font-medium"> 44°</span>/
          <sup className="text-gray-600">43°</sup>
        </p>
        <p className="text-xs">
          Gunter:
          <span className="font-medium"> 44°</span>/
          <sup className="text-gray-600">43°</sup>
        </p>
      </div>
      {/* icon area */}
      <div className="flex justify-between gap-8">
        <div className="flex gap-4 items-center justify-center">
          <p className="bg-black rounded-xl text-white p-1 flex items-center justify-center">
            <HiOutlineMenu size={24} />
          </p>
          <p className="bg-black rounded-xl text-white p-1 flex items-center justify-center">
            <FiMoon size={24} />
          </p>
          <p className="bg-black rounded-xl text-white py-[7px] flex items-center justify-center px-[6px]">
            <FaExpand size={20} />
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex font-medium flex-col text-gray-500">
            <span className="uppercase leading-4 text-sm">active</span>
            <span className="uppercase leading-4 text-sm">timers</span>
          </div>
          <div className="text-6xl">
            <span className="text-gray-300">0</span>
            <span className="">38</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Headline;
