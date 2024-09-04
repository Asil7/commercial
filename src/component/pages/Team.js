import React from "react";

const Team = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 md:mt-14">
        <div className="text-3xl md:text-5xl lg:text-6xl mb-4 text-center">
          TEAM
        </div>
        <hr className="w-20 md:w-32 lg:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
        <div className="grid grid-cols-1 gap-8 max-w-full md:max-w-screen-md lg:max-w-screen-lg w-full mt-6 pb-6 md:pb-8 lg:pb-10 px-6 md:px-12 lg:px-24 bg-gray-100">
          <div className="flex flex-col justify-between text-center">
            <p className="text-gray-600 text-left text-sm md:text-base lg:text-lg">
              People are the building blocks of our company. Our success is
              built on the skill set, experience, and entrepreneurial spirit of
              our employees. Across all of our offices and facilities, you will
              find outstanding individuals working towards common goals and the
              highest standards as part of a powerful global team. Our
              fundamental business is sourcing, supplying, and trading crude oil
              and refined oil products. Flowdale Trading DMCC has a global
              presence and a comprehensive product coverage, including extensive
              logistic capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
