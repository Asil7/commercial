import { Col, Image, Row } from "antd";
import { useLocation } from "react-router-dom";
import Bitumen2 from "../pages/img/Bitumen2.jpg";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-12">
      <Row gutter={[16, 24]} justify="center">
        <Col xs={24} sm={24} md={24} lg={16} xl={18}>
          <Image
            src={Bitumen2}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={8}
          xl={6}
          className="flex flex-col justify-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
            {product?.name}
          </p>
          <p className="text-base sm:text-lg md:text-xl">
            {product?.description}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
