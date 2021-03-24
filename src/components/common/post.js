import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { DoubleRightOutlined, CalendarOutlined } from "@ant-design/icons";
import GraphImg from "graphcms-image";
import { Avatar, Image } from "antd";
import PostAuthorMinature from "../../assets/images/mama.jpg";
import { ReactComponent as Calendar } from "../animations/svg/calendar.svg";
import moment from "moment";
import "moment/locale/pl";

moment.locale("pl");

const Post = ({ post }) => {
  return (
    <section>
      <div className="post-container">
        <div className="post-header">
          <Link to={`/articles/${post?.slug}`}>
            <GraphImg
              image={post.image}
              maxWidth={1200}
              className="image-post"
              style={{
                imageOrientation: "from-image",
                height: "400px",
              }}
            />
          </Link>
        </div>
        <div className="post-body">
          <div style={{ display: "flex" }}>
            <Avatar src={<Image src={PostAuthorMinature} />} />
            <Link style={{ display: "flex", color: "black" }} to={`/about`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "10px",
                }}
              >
                <span>Monika Maciejczuk</span>
                <h3
                  style={{
                    color: "#5C5C5C",
                    fontWeight: "lighter",
                    fontSize: "12px",
                  }}
                >
                  Autor posta
                </h3>
              </div>
            </Link>
          </div>
          <div>
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div className="post-text">
            <p>{truncateString(post.text.markdown, 300)} </p>
          </div>
          <div className="post-date">
            <Link to={`/articles/${post?.slug}`}>
              <Button
                shape="round"
                icon={
                  <DoubleRightOutlined
                    style={{ fontSize: "24px", color: "#5c5c5c" }}
                  />
                }
                style={{
                  border: "none",
                  borderColor: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  color: "#5c5c5c",
                }}
              >
                Czytaj dalej
              </Button>
            </Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Calendar style={{ marginRight: "10px" }} />
              <span
                style={{
                  color: "#b3b3b1",
                  fontWeight: "lighter",
                  fontSize: "14px",
                }}
              >
                {moment(post.date).format("D MMMM YYYY")}
              </span>
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
