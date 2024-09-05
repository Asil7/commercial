import { Col, Image, Row } from "antd";
import { useLocation } from "react-router-dom";
import Bitumen from "../pages/img/detailImg/Bitumen.jpg";
import FuelOil from "../pages/img/detailImg/FuelOil.jpg";
import Gasoline from "../pages/img/detailImg/Gasoline.jpg";
import MiddleDistillates from "../pages/img/detailImg/MiddleDistillates.jpg";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  const getProductImage = (id) => {
    switch (id) {
      case 1:
        return Bitumen;
      case 2:
        return FuelOil;
      case 3:
        return Gasoline;
      case 4:
        return MiddleDistillates;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <Row gutter={[16, 24]} justify="center">
        <Col xs={24} sm={24} md={24} lg={16} xl={17}>
          <Image
            src={getProductImage(product.id)}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={7}
          className="flex flex-col justify-start lg:mt-10 xl:mt-10"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-xl mb-4 text-gray-600">
            {product?.name}
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            {product?.description}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
