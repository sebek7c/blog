import React from "react";
import { Row, Col } from "antd";

export default function Blog() {
  return (
    <section className="blog-container">
      <Row align="middle">
        <Col span={24}>
          <div className="blog-title-container">
            <h1 className="blog-title">Blog</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </section>
  );
}
