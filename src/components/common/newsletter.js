import React from "react";
import { Col, Divider } from "antd";

export default function Newsletter() {
  return (
    <Col
      xs={{ span: 24, order: 1 }}
      sm={{ span: 24, order: 1 }}
      md={{ span: 24, order: 1 }}
      lg={12}
      xl={10}
      xxl={9}
    >
      <div>
        <h1
          ref={socialsRef}
          style={{ display: "flex", justifyContent: "center" }}
        >
          Media Społecznościowe
        </h1>
      </div>
      <Divider />
    </Col>
  );
}
