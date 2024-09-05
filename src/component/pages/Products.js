import { Image } from "antd";
import bitumen from "./img/bitumen.jpg";
import oil from "./img/oil.jpg";
import gasoline from "./img/gasoline.jpg";
import middleDistillates from "./img/middleDistillates.jpg";
import { useInView } from "react-intersection-observer";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Products = ({ setIsModalOpen }) => {
  const { ref: bitumenRef, inView: bitumenInView } = useInView();
  const { ref: oilRef, inView: oilInView } = useInView();
  const { ref: gasolineRef, inView: gasolineInView } = useInView();
  const { ref: distillatesRef, inView: distillatesInView } = useInView();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Bitumen",
      description:
        "Flowdale Trading DMCC is rapidly becoming a key player in the trading and transportation of bitumen in the Central Asia and Far East Asian Markets. Bridging the gap between the demandmarkets and suppliers, Flowdale Trading",
      image: bitumen,
    },
    {
      id: 2,
      name: "Fuel Oil",
      description:
        "Our Fuel Oil business is built on strong relationships which allows us to respond efficiently due to deep awareness of market developments.",
      image: oil,
    },
    {
      id: 3,
      name: "Gasoline",
      description:
        "In a specification-focused environment which varies by region, we utilize our logistic and product range capabilities to guarantee delivery of the correct quality at the correct time in the right place.",
      image: gasoline,
    },
    {
      id: 4,
      name: "Middle Distillates",
      description:
        "Flowdale Trading DMCC has a focus on Central/Eastern Europe and Central Asia, serving industrial customers.",
      image: middleDistillates,
    },
  ];

  const handleProductClick = (product) => {
    navigate(`/product-detail`, { state: { product } });
  };

  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="text-4xl md:text-6xl mb-4">PRODUCTS</div>
        <hr className="w-20 md:w-40 border-yellow-500 border-2 md:border-4 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg w-full mt-6">
          <div className={`flex flex-col justify-between text-center `}>
            <div className={`${bitumenInView ? "slide-out-top" : ""}`}>
              <strong>{products[0].name}</strong>
              <p className="text-sm md:text-base text-gray-600">
                {products[0].description}
              </p>
            </div>
            <div
              ref={bitumenRef}
              className={`${bitumenInView ? "fade-in-right" : ""}`}
            >
              <Image
                src={products[0].image}
                preview={false}
                className="mt-4 image"
                onClick={() => handleProductClick(products[0])}
              />
            </div>
          </div>

          <div className={`flex flex-col justify-between text-center`}>
            <div className={`${oilInView ? "slide-out-top" : ""}`}>
              <strong>{products[1].name}</strong>
              <p className="text-sm md:text-base text-gray-600">
                {products[1].description}
              </p>
            </div>
            <div ref={oilRef} className={`${oilInView ? "fade-in-left" : ""}`}>
              <Image
                src={products[1].image}
                preview={false}
                className="mt-4 image"
                onClick={() => handleProductClick(products[1])}
              />
            </div>
          </div>

          <div className={`flex flex-col justify-between text-center `}>
            <div className={`${gasolineInView ? "slide-out-top" : ""}`}>
              <strong>{products[2].name}</strong>
              <p className="text-sm md:text-base text-gray-600">
                {products[2].description}
              </p>
            </div>
            <div
              ref={gasolineRef}
              className={`${gasolineInView ? "fade-in-right" : ""}`}
            >
              <Image
                src={products[2].image}
                preview={false}
                className="mt-4 image"
                onClick={() => handleProductClick(products[2])}
              />
            </div>
          </div>

          <div className={`flex flex-col justify-between text-center`}>
            <div className={`${gasolineInView ? "slide-out-top" : ""}`}>
              <strong>{products[3].name}</strong>
              <p className="text-sm md:text-base text-gray-600">
                {products[3].description}
              </p>
            </div>
            <div
              ref={distillatesRef}
              className={`${distillatesInView ? "fade-in-left" : ""}`}
            >
              <Image
                src={products[3].image}
                preview={false}
                className="mt-4 image"
                onClick={() => handleProductClick(products[3])}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
