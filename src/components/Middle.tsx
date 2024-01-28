import React from "react";

function Middle() {
  return (
    <div className="border-t-[10px] border-b-[10px] border-gray-400 flex flex-col gap-3 bg-gray-200 relative">
      <div className="max-h-[500px] overflow-y-scroll overflow-x-hidden">
        <div className="flex justify-center items-center mt-0">
          <p className="text-3xl font-medium uppercase tracking-wider px-3">
            segiun <span className="text-gray-600">: 12</span>
          </p>
          <p className="text-lg bg-gray-500 text-white font-medium uppercase tracking-wider px-3 py-1">
            Conroe
          </p>
          <p className="text-lg bg-gray-900 text-white font-medium uppercase tracking-wider px-3 py-1">
            Gunter
          </p>
        </div>
        {/* radial press */}
        <div className="flex flex-col">
          <h3 className="text-xl text-[#a0181d] uppercase text-left  px-12">
            radial press
          </h3>
          <div className="container mx-auto">
            <div className="px-8 flex justify-between w-full">
              <span className="px-6  py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                Timers
              </span>
              <span className="px-6 py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                unit:
              </span>
              <span className="px-6 py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                tons
              </span>
            </div>
            {radial.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`w-full ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  <div className="px-8 flex justify-between w-full">
                    <span className="px-6  py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                      rp1625
                    </span>
                    <span className="px-6 py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                      20
                    </span>
                    <p className="flex">
                      <span className="px-6 py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                        1240
                      </span>
                      <span className="w-[8px] h-[8px] mt-2 bg-green-500 rounded-full"></span>
                    </p>
                  </div>
                  <p className="uppercase text-left pl-20 pb-1 leading-3 text-gray-400">
                    66X4 cla rubber gasket
                  </p>
                </div>
              );
            })}
            <div className="w-full bg-gray-100 flex items-center justify-end pr-4">
              <span className="px-2  py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                total
              </span>
              <span className="px-12 py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                60
              </span>
              <span className="px-12 py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                4960
              </span>
            </div>
          </div>
        </div>
        {/* variant */}
        <div className="flex flex-col">
          <h3 className="text-xl text-[#a0181d] uppercase text-left  px-12">
            variant
          </h3>
          <div className="container mx-auto">
            <div className="px-8 flex justify-between w-full">
              <span className="px-6  py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                Timers
              </span>
              <span className="px-6 py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                unit:
              </span>
              <span className="px-6 py-0 text-left text-md font-medium text-gray-800 capitalize tracking-wider">
                tons
              </span>
            </div>
            {radial.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className={`w-full ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  <div className="px-8 flex justify-between w-full">
                    <span className="px-6  py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                      rp1625
                    </span>
                    <span className="px-6 py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                      20
                    </span>
                    <p className="flex">
                      <span className="px-6 py-0 text-left text-md text-gray-500 uppercase tracking-wider">
                        1240
                      </span>
                      <span className="w-[8px] h-[8px] mt-2 bg-green-500 rounded-full"></span>
                    </p>
                  </div>
                  <p className="uppercase text-left pl-20 pb-1 leading-3 text-gray-400">
                    66X4 cla rubber gasket
                  </p>
                </div>
              );
            })}
            <div className="w-full bg-gray-100 flex items-center justify-end pr-4">
              <span className="px-2  py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                total
              </span>
              <span className="px-12 py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                60
              </span>
              <span className="px-12 py-0 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                4960
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
      <div className="px-10 z-20">
        <div className="border-2 border-b-0 rounded-tl-lg rounded-tr-lg border-[#5b6351] flex justify-center gap-3 mt-auto">
          <p className="text-[#5b6351] font-medium uppercase">
            total units: 0000
          </p>
          <p className="text-[#5b6351] font-medium uppercase">
            {" "}
            total tons : 00000
          </p>
        </div>
      </div>
    </div>
  );
}

export default Middle;

const radial = [
  {
    id: 1,
    name: "rp1625",
    unit: "20",
    tons: "1240",
    description: "66X4 cla rubber gasket",
  },
  {
    id: 2,
    name: "rp1625",
    unit: "20",
    tons: "1240",
    description: "66X4 cla rubber gasket",
  },
  {
    id: 3,
    name: "rp1625",
    unit: "20",
    tons: "1240",
    description: "66X4 cla rubber gasket",
  },
  {
    id: 4,
    name: "rp1625",
    unit: "20",
    tons: "1240",
    description: "66X4 cla rubber gasket",
  },
];
