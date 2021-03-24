import React, { useState, useMemo, useRef, useEffect } from "react";
import PostsLayout from "../components/common/posts-layout";
import { Row, Col, Divider } from "antd";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../components/header";
import ContactsSvg from "../components/animations/contacts/contacts";
import WelcomeTextReveal from "../components/common/welcome-text";
import { BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const postRef = useRef(null);
  const socialsRef = useRef(null);

  useEffect(() => {
    const textrev1 = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      scrollTrigger: {
        trigger: postRef.current,
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "center center", // end after scrolling 500px beyond the start
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    gsap.set(postRef.current, { autoAlpha: 0 });
    textrev1.fromTo(
      postRef.current,
      { y: "-=300" },
      { duration: 12, y: "+=300", autoAlpha: 1 }
    );

    const textrev3 = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      scrollTrigger: {
        trigger: socialsRef.current,
        start: "top 70%", // when the top of the trigger hits the top of the viewport
        end: "center center", // end after scrolling 500px beyond the start
        scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    gsap.set(socialsRef.current, { autoAlpha: 0 });
    textrev3.fromTo(
      socialsRef.current,
      { y: "-=300" },
      { duration: 12, y: "+=300", autoAlpha: 1 }
    );
  }, []);

  return (
    <>
      <Header />
      <section className="container home">
        <WelcomeTextReveal />
        <div className="row">
          <Row
            gutter={[{ xs: 0, sm: 0, md: 24, lg: 32, xl: 32, xxl: 48 }]}
            justify="space-between"
          >
            <Col
              xs={{ span: 24, order: 1 }}
              sm={{ span: 24, order: 1 }}
              md={{ span: 24, order: 1 }}
              lg={12}
              xl={10}
              xxl={9}
            >
              <div>
                <h1
                  ref={socialsRef}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Media Społecznościowe
                </h1>
              </div>
              <Divider />
              <ContactsSvg />
            </Col>
            <Col
              xs={{ span: 24, order: 2 }}
              sm={{ span: 24, order: 2 }}
              md={{ span: 24, order: 2 }}
              lg={12}
              xl={13}
              xxl={14}
            >
              <div>
                <h1
                  className="ostatnie-posty"
                  style={{ display: "flex", justifyContent: "center" }}
                  ref={postRef}
                >
                  Ostatnie Posty
                </h1>
              </div>
              <Divider />
              <PostsLayout />
            </Col>
          </Row>
          <BackTop>
            <UpCircleFilled style={{ fontSize: "38px" }} />
          </BackTop>
        </div>
      </section>
    </>
  );
}
