import { Col, Image, Row } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Bitumen from "../pages/img/detailImg/Bitumen.jpg";
import FuelOil from "../pages/img/detailImg/FuelOil.jpg";
import Gasoline from "../pages/img/detailImg/Gasoline.jpg";
import MiddleDistillates from "../pages/img/detailImg/MiddleDistillates.jpg";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Bitumen",
      description:
        "Flowdale Trading DMCC is rapidly becoming a key player in the trading and transportation of bitumen in the Central Asia and Far East Asian Markets. Bridging the gap between the demand markets and suppliers, Flowdale Trading DMCC has formed strong partnerships with both and continues to expand our activity.",
      image: Bitumen,
    },
    {
      id: 2,
      name: "Fuel Oil",
      description:
        "Our Fuel Oil business is built on strong relationships which allows us to respond efficiently due to deep awareness of market developments.",
      image: FuelOil,
    },
    {
      id: 3,
      name: "Gasoline",
      description:
        "In a specification-focused environment which varies by region, we utilize our logistic and product range capabilities to guarantee delivery of the correct quality at the correct time in the right place.",
      image: Gasoline,
    },
    {
      id: 4,
      name: "Middle Distillates",
      description:
        "Flowdale Trading DMCC has a focus on Central/Eastern Europe and Central Asia, serving industrial customers.",
      image: MiddleDistillates,
    },
  ];

  const [currentProductIndex, setCurrentProductIndex] = useState(
    products.findIndex((product) => product.id === parseInt(id))
  );

  const handleNextProduct = () => {
    const nextIndex = (currentProductIndex + 1) % products.length;
    setCurrentProductIndex(nextIndex);
    navigate(`/product/${products[nextIndex].id}`);
  };

  const handlePreviousProduct = () => {
    const prevIndex =
      (currentProductIndex - 1 + products.length) % products.length;
    setCurrentProductIndex(prevIndex);
    navigate(`/product/${products[prevIndex].id}`);
  };

  const handleClose = () => {
    navigate("/#product");
  };

  const product = products[currentProductIndex];

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:pt-8 lg:pt-12 relative">
      <div
        className="absolute top-0 right-0 m-6 cursor-pointer text-2xl"
        onClick={handleClose}
      >
        <CloseOutlined />
      </div>
      <Row gutter={[16, 24]}>
        <div
          onClick={handlePreviousProduct}
          className="md:mt-48 xl:mt-96 cursor-pointer"
        >
          <LeftOutlined className="text-2xl sm:text-4xl" />
        </div>
        <Col xs={24} sm={24} md={16} lg={15}>
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </Col>
        <div
          onClick={handleNextProduct}
          className="md:mt-48 xl:mt-96 cursor-pointer"
        >
          <RightOutlined className="text-2xl sm:text-4xl" />
        </div>
        <Col
          xs={24}
          sm={24}
          md={8}
          lg={6}
          className="flex flex-col justify-start mt-4 lg:mt-10"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-4 text-gray-600">
            {product.name}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {product.description}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
