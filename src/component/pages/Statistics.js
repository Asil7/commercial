import React from "react";
import { Col, Row } from "antd";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const formatter = (value) => (
    <CountUp end={value} start={inView ? 0 : undefined} separator="" />
  );

  return (
    <div ref={ref}>
      <Row align="middle" justify="center" className="h-auto py-10">
        <Col xs={24} sm={8} md={7} className="mb-8 sm:mb-0">
          <div className="text-center">
            <strong className="text-4xl sm:text-5xl lg:text-6xl">
              {formatter(2018)}
            </strong>
            <div className="text-lg sm:text-xl mt-4">
              Year <br /> Established
            </div>
          </div>
        </Col>
        <Col xs={0} sm={1}>
          <div className="h-16 w-px bg-white mx-auto hidden sm:block"></div>
        </Col>
        <Col xs={24} sm={8} md={7} className="mb-8 sm:mb-0">
          <div className="text-center">
            <strong className="text-4xl sm:text-5xl lg:text-6xl">
              {formatter(206)}
            </strong>
            <div className="text-lg sm:text-xl mt-4">
              Projects <br /> Completed
            </div>
          </div>
        </Col>
        <Col xs={0} sm={1}>
          <div className="h-16 w-px bg-white mx-auto hidden md:block"></div>
        </Col>
        <Col xs={24} sm={8} md={7}>
          <div className="text-center">
            <strong className="text-4xl sm:text-5xl lg:text-6xl">
              {formatter(870)}
            </strong>
            <div className="text-lg sm:text-xl mt-4">
              Contractors <br /> Appointed
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
