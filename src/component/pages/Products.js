import { Image } from "antd";
import bitumen from "./img/bitumen.jpg";
import oil from "./img/oil.jpg";
import gasoline from "./img/gasoline.jpg";
import middleDistillates from "./img/middleDistillates.jpg";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const { ref: bitumenRef, inView: bitumenInView } = useInView();
  const { ref: oilRef, inView: oilInView } = useInView();
  const { ref: gasolineRef, inView: gasolineInView } = useInView();
  const { ref: distillatesRef, inView: distillatesInView } = useInView();

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="text-4xl md:text-6xl mb-4">PRODUCTS</div>
      <hr className="w-20 md:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg w-full mt-6">
        <div className={`flex flex-col justify-between text-center `}>
          <div className={`${bitumenInView ? "slide-out-top" : ""}`}>
            <strong>Bitumen</strong>
            <p className="text-sm md:text-base text-gray-600">
              Flowdale Trading DMCC is rapidly becoming a key player in the
              trading and transportation of bitumen in the Central Asia and Far
              East Asian Markets. Bridging the gap between the demand markets
              and suppliers, Flowdale Trading
            </p>
          </div>
          <div
            ref={bitumenRef}
            className={`${bitumenInView ? "fade-in-right" : ""}`}
          >
            <Image src={bitumen} preview={false} className="mt-4 image" />
          </div>
        </div>

        <div className={`flex flex-col justify-between text-center`}>
          <div className={`${oilInView ? "slide-out-top" : ""}`}>
            <strong>Fuel Oil</strong>
            <p className="text-sm md:text-base text-gray-600">
              Our Fuel Oil business is built on strong relationships which
              allows us to respond efficiently due to deep awareness of market
              developments.
            </p>
          </div>
          <div ref={oilRef} className={`${oilInView ? "fade-in-left" : ""}`}>
            <Image src={oil} preview={false} className="mt-4 image" />
          </div>
        </div>

        <div className={`flex flex-col justify-between text-center `}>
          <div className={`${gasolineInView ? "slide-out-top" : ""}`}>
            <strong>Gasoline</strong>
            <p className="text-sm md:text-base text-gray-600">
              In a specification-focused environment which varies by region, we
              utilize our logistic and product range capabilities to guarantee
              delivery of the correct quality at the correct time in the right
              place.
            </p>
          </div>
          <div
            ref={gasolineRef}
            className={`${gasolineInView ? "fade-in-right" : ""}`}
          >
            <Image src={gasoline} preview={false} className="mt-4 image" />
          </div>
        </div>

        <div className={`flex flex-col justify-between text-center`}>
          <div className={`${gasolineInView ? "slide-out-top" : ""}`}>
            <strong>Middle Distillates</strong>
            <p className="text-sm md:text-base text-gray-600">
              Flowdale Trading DMCC has a focus on Central/Eastern Europe and
              Central Asia, serving industrial customers.
            </p>
          </div>
          <div
            ref={distillatesRef}
            className={`${distillatesInView ? "fade-in-left" : ""}`}
          >
            <Image
              src={middleDistillates}
              preview={false}
              className="mt-4 image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
