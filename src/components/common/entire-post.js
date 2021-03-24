import React, { useState, useEffect, Fragment } from "react";
import ARTICLE_QUERY from "../../query/slingle-article";
import { graphql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  UserOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Divider, Row, Col, Spin } from "antd";
import GraphImg from "graphcms-image";
import { Avatar, Image } from "antd";
import PostAuthorMinature from "../../assets/images/mama.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as Calendar } from "../animations/svg/calendar.svg";
import { ReactComponent as OwlSVG } from "../animations/svg/owl.svg";
import { Affix, Button } from "antd";
import Comments from "./comments";
import CommentsDrawer from "../common/comm-drawer";
import moment from "moment";
import "moment/locale/pl";
import { AuthProvider } from "../../contexts/AuthContext";
import Header from "../header";

moment.locale("pl");

const EntirePost = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(ARTICLE_QUERY, {
    variables: {
      slug,
    },
    // pollInterval: 500,
  });

  useEffect(() => {}, [data]);

  if (loading)
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
  if (error)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <OwlSVG />
        <span style={{ fontSize: "18px", marginBottom: "10px" }}>
          {"Wystąpił błąd."}
        </span>
        <span style={{ fontSize: "18px" }}>
          {" Sprawdź połączenie z internetem."}
        </span>
      </div>
    );

  return (
    <>
      <Header />
      <section>
        <div className="container2">
          <Row justify="center">
            <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
              <div
                className="article-header"
                style={{ backgroundColor: "#fff", opacity: "0.9" }}
              >
                <div>
                  <h2 className="article-title">{data.article.title}</h2>
                </div>
                <div
                  className="mobile-column"
                  style={{
                    display: "flex",
                    marginTop: "22px",
                    cursor: "pointer",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <Avatar src={<Image src={PostAuthorMinature} />} />
                    <Link
                      style={{ display: "flex", color: "black" }}
                      to={`/about`}
                    >
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
                            color: "#b3b3b1",
                            fontWeight: "lighter",
                            fontSize: "12px",
                          }}
                        >
                          Autor posta
                        </h3>
                      </div>
                      <RightOutlined className="arrow-icon" />
                    </Link>
                  </div>
                  <div className="article-date">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Calendar style={{ marginRight: "10px" }} />
                      <span
                        style={{
                          fontWeight: "lighter",
                          fontSize: "16px",
                        }}
                      >
                        {moment(data.article.date).format("D MMMM YYYY")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="article-cover">
                <Fragment>
                  <GraphImg
                    image={data.article.image}
                    maxWidth={1200}
                    style={{ height: "50vh" }}
                  ></GraphImg>
                </Fragment>
              </div>
              <div
                className="article-body "
                style={{ backgroundColor: "#fff", opacity: "0.9" }}
              >
                <div className="article-text">
                  <p>{data.article.text.markdown}</p>
                </div>
              </div>
              <AuthProvider>
                <CommentsDrawer
                  slugArticle={slug}
                  comments={data.article.comments}
                  articleImage={data.article.image}
                  articleTitle={data.article.title}
                />
              </AuthProvider>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default EntirePost;
