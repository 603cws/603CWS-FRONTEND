import React from "react";

const OurPopularity: React.FC = () => {
  return (
    <>
      <div className="w-full">
        {/* 1st div for headers */}
        <div className=" text-2xl md:text-xl font-sans font-semibold text-center">
          <h2>India's largest marketplace for flexible workspace solutions</h2>
        </div>
        {/* second for flex */}
        <div className="grid grid-cols-4 gap-y-8 p-8 w-2/3 mx-auto">
          <div className="justify-items-center">
            {/* <Scramble totype="50+" /> */}
            <span className="text-3xl text-yellow-500 font-bold">50+</span>
            <p className="text-lg ">Dedicated experts</p>
          </div>
          <div className="justify-items-center">
            <span className="text-3xl text-yellow-500 font-bold">1000+</span>
            <p className="text-lg">Clients Served</p>
          </div>
          <div className="justify-items-center">
            <span className="text-3xl text-yellow-500 font-bold">10+</span>
            <p className="text-lg">Locations</p>
          </div>
          <div className="justify-items-center">
            <span className="text-3xl text-yellow-500 font-bold">5000+</span>
            <p className="text-lg">Seats Delivered</p>
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
