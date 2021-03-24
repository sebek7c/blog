import React, { useState, useMemo, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Post from "./post";
import { Pagination, Spin } from "antd";
import ARTICLES_QUERY from "../../query/all-articles/index";
import { useQuery } from "@apollo/client";
import { ReactComponent as OwlSVG } from "../animations/svg/owl.svg";

gsap.registerPlugin(ScrollToPlugin);

const PostsLayout = () => {
  const { loading, error, data } = useQuery(ARTICLES_QUERY);
  const [articles, setArticles] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (data) {
      setArticles(data.articles);
    } else if (error)
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <OwlSVG />
          <span style={{ fontSize: "18px", marginBottom: "10px" }}>
            {"Wystąpił błąd."}
          </span>
          <span style={{ fontSize: "18px" }}>
            {" Sprawdź połączenie z internetem"}
          </span>
        </div>
      );
    else if (loading)
      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spin size="large" />
        </div>
      );
  }, [data]);

  const paginatedArticles = useMemo(() => {
    const lastIndex = current * pageSize;
    const firstIndex = lastIndex - pageSize;

    return articles.slice(firstIndex, lastIndex);
  }, [current, pageSize, articles]);

  function scrollTop() {
    gsap.to(window, { duration: 1, scrollTo: ref.current });
  }
  return (
    <section className="posts-layout">
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
        onClick={scrollTop}
      />
    </section>
  );
};

PostsLayout.propTypes = {
  posts: PropTypes.array,
};

export default PostsLayout;
