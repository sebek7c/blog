import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Drawer, Button, Badge, Spin } from "antd";
import { ReactComponent as CommentTestSVG } from "../animations/svg/commentTest.svg";
import Comments from "../common/comments";
import { useAuth } from "../../contexts/AuthContext";

export default function CommentsDrawer({
  comments,
  slugArticle,
  articleTitle,
  articleImage,
}) {
  const [visible, setVisible] = useState(false);
  const { signInSpinner, signOutSpinner } = useAuth();

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [comments]); // Empty array ensures that effect is only run on mount

  return (
    <>
      <div className="comm-drawer-icon-container">
        <Badge count={comments.length} showZero>
          <div
            className="comm-drawer-icon"
            onClick={showDrawer}
            style={{
              cursor: "pointer",
              display: "flex",
            }}
          >
            <Button
              icon={<CommentTestSVG />}
              shape="round"
              className="comments-icon-main"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Button>
          </div>
        </Badge>
      </div>
      <Drawer
        className="drawer"
        placement={windowSize.width < 1400 ? "bottom" : "left"}
        closable={true}
        onClose={onClose}
        visible={visible}
        mask={false}
        width="25vw"
        height="100%"
        zIndex={1006}
      >
        {signInSpinner || signOutSpinner ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "50vh",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <Comments
            slugArticle={slugArticle}
            comments={comments}
            articleTitle={articleTitle}
            articleImage={articleImage}
          />
        )}
      </Drawer>
    </>
  );
}

CommentsDrawer.propTypes = {
  comments: PropTypes.array,
  slugArticle: PropTypes.string,
  articleImage: PropTypes.object,
  articleTitle: PropTypes.string,
};
