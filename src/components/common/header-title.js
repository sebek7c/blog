import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function HeaderTitle() {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const line4 = useRef(null);
  const line5 = useRef(null);
  const span1 = useRef(null);
  const span2 = useRef(null);
  const span3 = useRef(null);
  const span4 = useRef(null);
  const span5 = useRef(null);

  useEffect(() => {
    const textrev = gsap.timeline();
    textrev.from(
      [
        line1.current,
        span1.current,
        line2.current,
        span2.current,
        line3.current,
        span3.current,
        line4.current,
        span4.current,
        line5.current,
        span5.current,
      ],
      8,
      {
        y: 200,
        ease: "elastic.out(1, 1)",
        delay: 0.5,
        skewY: 10,
        stagger: {
          amount: 0.4,
        },
      }
    );
  }, []);

  return (
    <div className="wrapper">
      <div className="line" ref={line1}>
        <span ref={span1}>Witam na moim blogu.</span>
      </div>
      <div className="line" ref={line2}>
        <span ref={span2}> Nazywam się Monika</span>
      </div>
      <div className="line" ref={line3}>
        <span ref={span3}>
          with creative designs. Because of my passion for design,{" "}
        </span>
      </div>
      <div className="line" ref={line4}>
        <span ref={span4}>
          precision and details, I created Codegrid to bring
        </span>
      </div>
      <div className="line" ref={line5}>
        <span ref={span5}>concepts of web designing to you.</span>
      </div>
    </div>
  );
}
