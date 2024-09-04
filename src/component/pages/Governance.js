import React from "react";

const Governance = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 md:mt-14">
        <div className="text-3xl md:text-5xl lg:text-6xl mb-4 text-center">
          GOVERNANCE
        </div>
        <hr className="w-20 md:w-32 lg:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
        <div className="grid grid-cols-1 gap-8 max-w-full md:max-w-screen-md lg:max-w-screen-lg w-full mt-6 pb-6 md:pb-8 lg:pb-10 px-6 md:px-12 lg:px-24 bg-gray-100">
          <div className="flex flex-col justify-between text-center">
            <p className="text-gray-600 text-left text-sm md:text-base lg:text-lg mt-4">
              Flowdale Trading DMCC conducts all business with integrity and the
              highest ethical standards, creating an environment of respect for
              all employees, which is vital to our continued success. Our
              company focuses on innovation which has created a culture of
              integration and teamwork.
            </p>
            <br />
            <p className="text-gray-600 text-left text-sm md:text-base lg:text-lg">
              Fairness, accountability and transparency are key to our business.
              Through these qualities we develop and maintain relationships with
              counterparties, operating regions and financial institutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
