import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as Contacts } from "../svg/contact.svg";

gsap.registerPlugin(ScrollTrigger);

export default function ContactsSvg() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const twitter = elements.getElementById("twitter");
    const instagram = elements.getElementById("instagram");
    const messenger = elements.getElementById("messenger");
    const facebook = elements.getElementById("facebook");

    const tl = gsap.timeline({ paused: true, yoyo: false, repeat: -1 });

    gsap.set([twitter, instagram, facebook, messenger], {
      scale: 0,
      transformOrigin: "50% 50%",
    });

    tl.to([twitter, instagram, facebook, messenger], 1, {
      scale: 1.5,
      ease: "elastic.inOut(2.5,1)",
    })
      .to([twitter, instagram, facebook, messenger], 4, { rotation: "-=720" })
      .to([twitter, instagram, facebook, messenger], 1, {
        scale: 0,
        ease: "elastic.inOut(2.5,1)",
      });
    tl.to([twitter, instagram, facebook, messenger], 1, {
      scale: 1.5,
      ease: "elastic.inOut(2.5,1)",
    })
      .to([twitter, instagram, facebook, messenger], 4, { rotation: "+=720" })
      .to([twitter, instagram, facebook, messenger], 1, {
        scale: 0,
        ease: "elastic.inOut(2.5,1)",
      })
      .play();
  });

  return (
    <div ref={wrapper} style={{ marginBottom: "60px" }}>
      <Contacts />
    </div>
  );
}
