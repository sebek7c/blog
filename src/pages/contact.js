import React from "react";
import { Row, Col, Divider } from "antd";
import ContactsSvg from "../components/animations/contacts/contacts";
import Header from "../components/header";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact-container">
        <Row align="middle">
          <Col span={8}>
            <div className="contact-title-container">
              <h1 className="contact-title">Kontakt</h1>
            </div>
          </Col>
          <Col span={12}>
            <ContactsSvg />
          </Col>
        </Row>
      </section>
    </>
  );
}
