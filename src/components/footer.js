import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function Foooter() {
  return (
    <Layout>
      <Footer
        style={{ background: "#333333", textAlign: "center", color: "white" }}
      >
        Monika Maciejczuk ©2021
      </Footer>
    </Layout>
  );
}
