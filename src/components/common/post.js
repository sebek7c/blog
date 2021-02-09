import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const imageBackground = {
    backgroundImage: `url("${
      require(`../../assets/images/${post.image}`).default
    }")`,
  };
  const style = { ...imageBackground };

  return (
    <section>
      <div className="post-container">
        <Link to={post.link}>
          <div className="post-header">
            <div className="post-cover" style={style}></div>
          </div>
        </Link>
        <div className="post-body">
          <div>
            <h2 className="post-title">{post.title}</h2>
          </div>
          <div>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="post-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ullamcorper tortor nec sapien aliquet condimentu. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut ullamcorper tortor
              nec sapien aliquet condimentu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
