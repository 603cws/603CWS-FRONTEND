import React from "react";

const OurPopularity: React.FC = () => {
  return (
    <>
      <div className="w-full">
        {/* 1st div for headers */}
        <div className="max-w-3xl mx-auto font-sans font-semibold text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 tracking-wide ">
            Amongst India's premier integrated workspace solutions, delivering
            the full spectrum of flexible offices, managed HQs, and bespoke
            build-to-suit solutions.
          </h2>
          {/* <h2>India's largest marketplace for flexible workspace solutions</h2> */}
        </div>
        {/* second for flex */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 p-8 w-2/3 mx-auto">
          <div className="flex flex-col justify-center items-center ">
            {/* <Scramble totype="50+" /> */}
            <span className="text-3xl text-yellow-500 font-bold">50+</span>
            <p className="text-center text-lg ">Dedicated experts</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="text-3xl text-yellow-500 font-bold">1000+</span>
            <p className="text-center text-lg">Clients Served</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="text-3xl text-yellow-500 font-bold">10+</span>
            <p className="text-center text-lg">Locations</p>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <span className="text-3xl text-yellow-500 font-bold">5000+</span>
            <p className="text-center text-lg">Seats Delivered</p>
          </div>
        </div>
        {/* last line
        <div className="flex justify-center text-lg">
          <button onClick={() => navigate("/contactus")} className="">
            contact us
          </button>
        </div> */}
      </div>
    </>
  );
};

export default OurPopularity;
