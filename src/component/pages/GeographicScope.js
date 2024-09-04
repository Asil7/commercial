import React from "react";

const GeographicScope = () => {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-20 lg:mt-20">
      <div className="text-3xl md:text-5xl lg:text-6xl mb-4 text-center">
        GEOGRAPHIC SCOPE
      </div>
      <hr className="w-20 md:w-32 lg:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
      <div className="grid grid-cols-1 gap-8 max-w-full md:max-w-screen-md lg:max-w-screen-lg w-full mt-10 md:mt-14 pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="flex flex-col justify-between text-center">
          <strong className="text-base md:text-lg lg:text-xl">
            We deliver and distribute products across Central and Eastern
            Europe, Central Asia, and Far East Asia
          </strong>
          <p className="text-gray-600 text-left mt-4 text-sm md:text-base lg:text-lg">
            Flowdale Trading DMCC uses its widespread network globally to source
            the required commodities its clients need. Our suppliers are
            industry known producers from the Mediterranean, Former Soviet Union
            and Central / Eastern Europe.
          </p>
          <br />
          <p className="text-gray-600 text-left text-sm md:text-base lg:text-lg">
            The global presence of Flowdale Trading DMCC allows us to expand our
            trading services in order to pursue sustainable growth in our
            business. Our foundation and corporate values lead by example in
            maintaining a corporate advantage with greater efficiency in a world
            interdependent on energy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeographicScope;
