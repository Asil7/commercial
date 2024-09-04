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

const Main = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className="navbar fixed top-0 w-full flex items-center bg-black"
        style={{
          zIndex: 1000,
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "black",
        }}
      >
        <Col
          xs={18}
          sm={12}
          md={7}
          lg={10}
          xl={13}
          xxl={16}
          className="text-white text-lg md:text-2xl p-2"
          style={{ lineHeight: "1.2" }}
        >
          <div>
            <strong>FLOWDALE</strong>
          </div>
          <div>TRADING DMCC</div>
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
                { key: "team", href: "#team", title: "TEAM" },
                { key: "contact", href: "#contact", title: "CONTACT" },
              ]}
            />
          </div>
        </Col>
        {isMobileMenuOpen && (
          <Col span={24} className="md:hidden bg-gray-800 text-white">
            <Anchor
              direction="vertical"
              items={[
                { key: "home", href: "#home", title: "HOME" },
                { key: "about", href: "#about", title: "ABOUT" },
                { key: "product", href: "#product", title: "PRODUCTS" },
                {
                  key: "geographicScope",
                  href: "#geographicScope",
                  title: "GEOGRAPHIC SCOPE",
                },
                { key: "team", href: "#team", title: "TEAM" },
                { key: "contact", href: "#contact", title: "CONTACT" },
              ]}
              className="flex flex-col items-start p-4"
            />
          </Col>
        )}
      </Row>

      <div>
        <div id="home">
          <div
            className="bg-fixed bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${ship2})` }}
          >
            <div className="flex justify-center items-center h-full px-4">
              <div className="text-center">
                <h1 className="text-white mt-24 md:mt-36 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-normal">
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
          <div id="about" className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
            <About />
          </div>
        </div>

        <div className="flex justify-center">
          <div id="product" className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
            <Products />
          </div>
        </div>

        <div className="flex justify-center">
          <div
            id="geographicScope"
            className="w-full md:w-3/4 px-4 md:px-8 lg:px-0"
          >
            <GeographicScope />
          </div>
        </div>

        <div className="flex justify-center bg-gray-50 mt-14">
          <div className="w-full md:w-3/4 px-4 md:px-8 lg:px-0 mb-14">
            <Map />
          </div>
        </div>

        <div className="flex justify-center bg-gray-100">
          <div className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
            <Governance />
          </div>
        </div>

        <div className="flex justify-center bg-yellow-400">
          <div className="w-full lg:w-2/4 md:w-3/4 px-4 md:px-8 lg:px-0">
            <Statistics />
          </div>
        </div>

        <div className="flex justify-center bg-gray-100">
          <div id="team" className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
            <Team />
          </div>
        </div>

        <div className="flex justify-center">
          <div id="contact" className="w-full md:w-3/4 px-4 md:px-8 lg:px-0">
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
