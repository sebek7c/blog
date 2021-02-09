import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as Socials } from "../svg/social_media.svg";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMediaSvg() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const ground = elements.getElementById("ground");
    const girl2 = elements.getElementById("girl2");
    const fb = elements.getElementById("fb");
    const inst = elements.getElementById("inst");
    const trees = elements.getElementById("trees");

    gsap.set([ground, girl2, fb, inst, trees], { autoAlpha: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      scrollTrigger: {
        trigger: elements,
        start: "40% 50%",
        end: "center center",
        scrub: 2,
      },
    });
    tl.fromTo(
      ground,
      { x: "-=300" },
      { duration: 12, x: "+=300", autoAlpha: 1 }
    )
      .fromTo(girl2, { y: "-=300" }, { duration: 12, y: "+=300", autoAlpha: 1 })
      .to(trees, { duration: 12, autoAlpha: 1 })
      .fromTo(inst, { x: "-=300" }, { duration: 12, x: "+=300", autoAlpha: 1 })
      .fromTo(fb, { x: "+=300" }, { duration: 12, x: "-=300", autoAlpha: 1 });
  });

  return (
    <div ref={wrapper}>
      <Socials />
    </div>
  );
}
