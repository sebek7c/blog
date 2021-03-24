import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { Form, Button, List, Input, Col, Row, Empty, Divider } from "antd";
import moment from "moment";
import { gql, useMutation } from "@apollo/client";
import ADD_COMMENT from "../../mutations/add-comment";
import GraphImg from "graphcms-image";
import CommentComponent from "./comment-component";
import { ReactComponent as PenIcon } from "../animations/svg/pen.svg";
import { useAuth } from "../../contexts/AuthContext";
import AuthTabs from "../common/auth-tabs";
import UserData from "../common/user-data";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    itemLayout="horizontal"
    renderItem={(comment) => (
      <CommentComponent
        author={comment.name}
        content={comment.content}
        createdAt={comment.createdAt}
      />
    )}
  />
);

export default function Comments({
  comments,
  slugArticle,
  articleTitle,
  articleImage,
}) {
  const [commentsState, setCommentsState] = useState([]);
  const [newCommentValue, setNewCommentValue] = useState({ value: "" });
  const { currentUser, loading, isUserLoggedIn } = useAuth();
  const [openAuthTabs, setOpenAuthTabs] = useState(false);
  const [createComment, { data }] = useMutation(ADD_COMMENT);

  useEffect(() => {
    setCommentsState(comments);
  }, [comments]);

  return (
    <section>
      {isUserLoggedIn ? <UserData /> : null}
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AuthTabs
            openAuthTabs={openAuthTabs}
            setOpenAuthTabs={setOpenAuthTabs}
          />
        </Col>
      </Row>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <div className="article-preview">
            <Fragment>
              <GraphImg
                image={articleImage}
                maxWidth={1200}
                style={{ height: "60px", width: "60px", borderRadius: "15px" }}
              ></GraphImg>
            </Fragment>
            <span style={{ marginLeft: "20px" }}>{articleTitle}</span>
          </div>
        </Col>
      </Row>
      <Row justify="left" style={{ marginBottom: "10px" }}>
        <Col>
          <div>
            <h1 className="comm-count">Komentarze ({comments.length})</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            rules={[{ required: true, message: "Wpisz swój komentarz!" }]}
          >
            <TextArea
              onChange={(e) =>
                setNewCommentValue({
                  value: e.target.value,
                })
              }
              id="content"
              autoSize={{ minRows: 2 }}
              className="comment-input"
              placeholder="Podziel się swoim komentarzem"
              onClick={() => {
                isUserLoggedIn ? null : setOpenAuthTabs(true);
              }}
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="left">
        <Col span={4}>
          <Form.Item>
            <Button
              icon={<PenIcon />}
              htmlType="submit"
              type="primary"
              className="add-comment-button"
              onClick={(e) => {
                e.preventDefault();
                createComment({
                  variables: {
                    email: currentUser.email,
                    content: newCommentValue.value,
                    name: currentUser.email.substring(
                      0,
                      currentUser.email.lastIndexOf("@")
                    ),
                    slug: slugArticle,
                  },
                });
              }}
            >
              <span style={{ marginLeft: "10px" }}>Dodaj komentarz</span>
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Row style={{ margin: "40px 0 40px 0" }}>
        <Col span={24}>
          {comments.length > 0 ? (
            <CommentList comments={comments} />
          ) : (
            <Empty description="Brak komentarzy" />
          )}
        </Col>
      </Row>
    </section>
  );
}

Comments.propTypes = {
  comments: PropTypes.array,
  slugArticle: PropTypes.string,
  articleTitle: PropTypes.string,
  articleImage: PropTypes.object,
  currentUser: PropTypes.object,
};

CommentList.propTypes = {
  comments: PropTypes.array,
};
