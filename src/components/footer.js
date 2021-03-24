import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function Foooter() {
  return (
    <Layout>
      <Footer
        style={{
          textAlign: "center",
          color: "#6d6d6d",
          backgroundColor: "#f3f3f4",
          fontWeight: "lighter",
        }}
      >
        Website developed by Sebastian Maciejczuk ©2021
      </Footer>
    </Layout>
  );
}
