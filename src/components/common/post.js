import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ReadOutlined, CalendarOutlined } from "@ant-design/icons";

const Post = ({ post }) => {
  const imageBackground = {
    backgroundImage: `url(${post.image.url})`,
  };
  const style = { ...imageBackground };

  return (
    <section>
      <div className="post-container">
        <div className="post-header">
          <div className="post-cover" style={style}></div>
        </div>
        <div className="post-body">
          <div>
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div className="post-text">
            <p>{truncateString(post.text.text, 300)} </p>
          </div>
          <div className="post-date">
            <Button shape="round" icon={<ReadOutlined />}>
              Czytaj dalej
            </Button>
            <div>
              <CalendarOutlined style={{ marginRight: "10px" }} />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "......";
}

export default Post;
