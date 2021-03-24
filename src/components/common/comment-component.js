import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Divider, Avatar } from "antd";
import Moment from "react-moment";
import { UserOutlined } from "@ant-design/icons";

export default function CommentComponent({ author, content, createdAt }) {
  return (
    <Row justify="space-between" style={{ marginBottom: "20px" }}>
      <Col span={2}>
        <Avatar icon={<UserOutlined />} />
      </Col>
      <Col span={20}>
        <Row>{author}</Row>
        <Row className="createdAt">
          <Moment fromNow>{createdAt}</Moment>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <span className="comment-content">{content}</span>
        </Row>
        <Row>
          <Divider />
        </Row>
      </Col>
    </Row>
  );
}

CommentComponent.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
  createdAt: PropTypes.string,
};
