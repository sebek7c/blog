import React, { useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Post from "./post";
import { Pagination, Spin } from "antd";
import ARTICLES_QUERY from "../../query/all-articles/index";
import { useQuery } from "@apollo/client";

gsap.registerPlugin(ScrollToPlugin);

const PostsLayout = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [current, setCurrent] = useState(1);
  const layout = useRef(null);

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
    } else if (error) return `Error! ${error.message}`;
    else if (loading) return "Loading...";
  }, [data]);

  const paginatedArticles = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return articles.slice(firstIndex, lastIndex);
  }, [current, pageSize, articles]);

  function scrollTop() {
    gsap.to(window, { duration: 1, scrollTo: layout.current });
  }

  return (
    <section className="posts-layout" ref={layout}>
      {paginatedArticles.map((article) => (
        <Post key={article.slug} post={article} />
      ))}
      <Pagination
        simple
        showSizeChanger
        onShowSizeChange={setPageSize}
        pageSize={pageSize}
        total={articles.length}
        current={current}
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
