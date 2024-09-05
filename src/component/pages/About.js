import city from "./img/city.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto">
      <div className="w-full xl:w-[35%] lg:w-[45%] md:w-[50%] h-auto bg-gray-100 flex items-center justify-center p-6 md:p-12">
        <div className="max-w-lg">
          <div className="text-4xl md:text-6xl mb-4">About</div>
          <hr className="w-20 md:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
          <p className="text-base md:text-lg mb-4 text-gray-600">
            Flowdale Trading DMCC is an international oil trading company,
            established in 2018. We focus on refined oil products, matching
            global supply and demand requirements and keeping our clients'
            satisfaction at the forefront of our business. The global presence
            of Flowdale Trading DMCC allows us to expand our trading services in
            order to pursue sustainable growth in our business. Our foundation
            and corporate values lead by example in maintaining a corporate
            advantage with greater efficiency in a world interdependent on
            energy.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Our fundamental business is sourcing, supplying, and trading crude
            oil and refined oil products. Flowdale Trading DMCC has a global
            presence and comprehensive product coverage, including extensive
            logistic capabilities.
          </p>
        </div>
      </div>

      <div
        className="w-full xl:w-[65%] lg:w-[55%] md:w-[50%] h-64 md:h-auto bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${city})` }}
      />
    </div>
  );
};

export default About;
