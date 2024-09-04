import { Col, Row } from "antd";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer p-6 md:p-12">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={16} className="text-left">
          <strong className="text-xl md:text-3xl">Contact Us</strong>
          <p className="text-sm md:text-lg mt-2 md:mt-5 text-gray-600">
            For any inquiries, questions, or commendations, please <br /> call
            or write to us
          </p>
          <p className="mt-2 md:mt-5 text-gray-600">
            operations@flowdaletrading.com
          </p>
        </Col>
        <Col xs={24} md={8} className="text-left">
          <strong className="text-xl md:text-3xl">Head Office</strong>
          <p className="mt-4 md:mt-12 text-sm md:text-lg text-gray-600">
            Platinum Tower, <br /> Dubai, <br /> United Arab Emirates
          </p>
        </Col>
      </Row>
      <Row className="mt-12 md:mt-20">
        <Col xs={24} md={12} className="text-left text-gray-600">
          <p>© 2024 by Flowdale Trading DMCC</p>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]} className="text-gray-600">
            <Col span={8}>Terms of Service</Col>
            <Col span={8}>Privacy Policy</Col>
            <Col span={8}>Cookie Policy</Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
