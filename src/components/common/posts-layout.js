import React, { useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Post from "./post";
import { Pagination } from "antd";

gsap.registerPlugin(ScrollToPlugin);

const PostsLayout = ({ posts }) => {
  const [pageSize, setPageSize] = useState(3);
  const [current, setCurrent] = useState(1);
  const layout = useRef(null);

  const paginatedPosts = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return posts.slice(firstIndex, lastIndex);
  }, [current, pageSize]);

  useEffect(() => {
    gsap.to(window, { duration: 1, scrollTo: layout.current });
  }, [current, pageSize]);

  return (
    <section className="posts-layout" ref={layout}>
      {paginatedPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={posts.length}
        defaultCurrent={current}
        style={{ display: "flex", justifyContent: "center" }}
        onChange={setCurrent}
      />
    </section>
  );
};

PostsLayout.propTypes = {
  posts: PropTypes.array,
};

export default PostsLayout;
