import React from "react";
import { Row, Col, Divider } from "antd";
import AboutReveal from "../components/common/about-reveal";
import Header from "../components/header";

export default function About() {
  return (
    <>
      <Header />
      <section className="about-container">
        <Row align="middle">
          {/* <Col span={12}>
          <div className="about-me-image-container">
            <div className="about-me-image">
              <div className="about-me-circle"></div>
            </div>
          </div>
        </Col> */}
          <Col span={24}>
            <div className="about-me-title-container">
              <Divider>
                <h1 className="about-me-title">O mnie</h1>
              </Divider>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <AboutReveal />
          </Col>
        </Row>
      </section>
    </>
  );
}
