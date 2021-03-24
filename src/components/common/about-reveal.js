import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../../assets/images/mama.jpg";
import image2 from "../../assets/images/mama2.jpg";
import image3 from "../../assets/images/mama3.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutReveal() {
  function animateFrom(elem, direction) {
    direction = direction | 1;

    let x = 0,
      y = direction * 100;
    if (elem.classList.contains("gs_reveal_fromLeft")) {
      x = -100;
      y = 0;
    } else if (elem.classList.contains("gs_reveal_fromRight")) {
      x = 100;
      y = 0;
    }
    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  }

  function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
  }

  useEffect(() => {
    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem); // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        }, // assure that the element is hidden when scrolled into view
      });
    });
  });

  return (
    <div className="cInnerContent">
      <div className="features">
        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
            <div className="card">
              <img width="767" src={image1} alt="" />
            </div>
          </div>

          <div className="ipsGrid_span7 ipsType_left">
            <h2 className="heading_large gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in.
            </h2>
            <p className="gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in. In consectetur at
              nulla in bibendum. Aliquam in lacinia tortor,Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam aliquet leo dui, quis
              commodo quam tempus in. In consectetur at nulla in bibendum.
              Aliquam in lacinia tortor,Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone row-reverse">
          <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
            <div className="card">
              <img width="767" src={image2} alt="" />
            </div>
          </div>

          <div className="ipsGrid_span7 ipsType_right extra-margin">
            <h2 className="heading_large gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in.
            </h2>
            <p className="gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in. In consectetur at
              nulla in bibendum. Aliquam in lacinia tortor,Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam aliquet leo dui, quis
              commodo quam tempus in. In consectetur at nulla in bibendum.
              Aliquam in lacinia tortor,Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
          <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
            <div className="card">
              <img width="767" src={image3} alt="" />
            </div>
          </div>

          <div className="ipsGrid_span7 ipsType_left">
            <h2 className="heading_large gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in.
            </h2>
            <p className="gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in. In consectetur at
              nulla in bibendum. Aliquam in lacinia tortor,Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam aliquet leo dui, quis
              commodo quam tempus in. In consectetur at nulla in bibendum.
              Aliquam in lacinia tortor,Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone row-reverse">
          <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
            <div className="card">
              <img
                width="767"
                src="https://picsum.photos/479/479?index=4"
                alt=""
              />
            </div>
          </div>
          <div className="ipsGrid_span7 ipsType_right extra-margin">
            <h2 className="heading_large gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in.
            </h2>
            <p className="gs_reveal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              aliquet leo dui, quis commodo quam tempus in. In consectetur at
              nulla in bibendum. Aliquam in lacinia tortor,Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Aliquam aliquet leo dui, quis
              commodo quam tempus in. In consectetur at nulla in bibendum.
              Aliquam in lacinia tortor,Lorem ipsum dolor sit amet, consectetur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
