import React, { useState } from "react";
import { Anchor, Row, Col } from "antd";
import Footer from "../footer/Footer";
import About from "../pages/About";
import ship2 from "../pages/img/ship2.gif";
import Products from "../pages/Products";
import { FloatButton } from "antd";
import { DownOutlined, MenuOutlined, UpOutlined } from "@ant-design/icons";
import GeographicScope from "../pages/GeographicScope";
import Map from "../pages/Map";
import Governance from "../pages/Governance";
import Statistics from "../pages/Statistics";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import favicon from "../pages/img/favicon.png";

const Main = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const offsetPosition = aboutSection.offsetTop - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Row
        className={`navbar fixed top-0 w-full flex items-center ${
          isModalOpen ? "hidden" : ""
        }`}
      >
        <Col xs={18} sm={12} md={7} lg={10} xl={13} xxl={16}>
          <Row className="ms-6" style={{ lineHeight: "0.1" }}>
            <Col>
              <img src={favicon} alt="Favicon" className="mr-2" />
            </Col>
            <Col className="text-white text-lg md:text-2xl">
              <div>
                <strong>FLOWDALE</strong>
              </div>
              <div>TRADING DMCC</div>
            </Col>
          </Row>
        </Col>
        <Col
          xs={6}
          sm={12}
          md={17}
          lg={14}
          xl={11}
          xxl={8}
          className="text-right p-2"
        >
          <div className="md:hidden" onClick={toggleMobileMenu}>
            <MenuOutlined className="text-white text-3xl" />
          </div>
          <div className="hidden md:block">
            <Anchor
              direction="horizontal"
              targetOffset={100}
              items={[
                { key: "home", href: "#home", title: "HOME" },
                { key: "about", href: "#about", title: "ABOUT" },
                { key: "product", href: "#product", title: "PRODUCTS" },
                {
                  key: "geographicScope",
                  href: "#geographicScope",
                  title: "GEOGRAPHIC SCOPE",
                },
                { key: "map", href: "#map", title: "MAP" },
                { key: "governance", href: "#governance", title: "GOVERNANCE" },
                { key: "statistics", href: "#statistics", title: "STATISTICS" },
                { key: "team", href: "#team", title: "TEAM" },
                { key: "contact", href: "#contact", title: "CONTACT" },
              ]}
            />
          </div>
        </Col>
      </Row>

      <div>
        <div id="home">
          <div
            className="bg-fixed bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${ship2})` }}
          >
            <div className="flex flex-col justify-start items-center h-full px-4 mt-16">
              <div className="text-center mt-24 md:mt-36">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-normal">
                  A COMMODITY <br /> TRADING COMPANY
                </h1>
                <div
                  onClick={handleScroll}
                  className="text-4xl md:text-5xl text-white mt-4 md:mt-6 cursor-pointer bounce-animation"
                >
                  <DownOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end bg-gray-100">
          <div
            id="about"
            className="w-full xl:w-[78%] lg:w-[100%] md:w-4/4 px-4 md:px-8 lg:px-0"
          >
            <About />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            id="product"
            className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0"
          >
            <Products setIsModalOpen={setIsModalOpen} />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            id="geographicScope"
            className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0"
          >
            <GeographicScope />
          </div>
        </div>

        <div className="flex justify-center bg-gray-50 mt-14">
          <div className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0 mb-14">
            <Map />
          </div>
        </div>

        <div className="flex justify-center bg-gray-100">
          <div className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0">
            <Governance />
          </div>
        </div>

        <div className="flex justify-center bg-yellow-400">
          <div className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0">
            <Statistics />
          </div>
        </div>

        <div className="flex justify-center bg-gray-100">
          <div
            id="team"
            className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0"
          >
            <Team />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            id="contact"
            className="w-full xl:w-2/4 lg:w-3/4 md:w-3/4 px-4 md:px-8 lg:px-0"
          >
            <Contact />
          </div>
        </div>
      </div>

      <FloatButton.BackTop
        className="back-top-color"
        visibilityHeight={0}
        duration={1500}
        icon={<UpOutlined className="text-white" />}
      />

      <div className="flex justify-center">
        <div className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
