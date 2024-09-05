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
    <div>
      <Row>
        <Col span={14} className="m-24">
          <Image
            src={Bitumen2}
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Col>
        <Col span={6} className="mt-36">
          <p className="mb-5">{product?.name}</p>
          <p>{product?.description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
