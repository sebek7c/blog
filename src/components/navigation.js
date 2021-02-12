import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ExpoScaleEase } from "gsap/EasePack";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    path: "/",
    dataText: 1,
  },
  {
    title: "Blog",
    path: "/blog",
    dataText: 2,
  },
  {
    title: "O mnie",
    path: "/about",
    dataText: 3,
  },
  {
    title: "Kontakt",
    path: "/contact",
    dataText: 4,
  },
];

gsap.registerPlugin(ExpoScaleEase);

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
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
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default function Navigation() {
  function useCircleWidth() {
    const [circleWidth, setCircleWidth] = useState({ width: undefined });

    useEffect(() => {
      function handleWidth() {
        setCircleWidth({
          width: circle.current.clientWidth,
        });
      }
      handleWidth();
    }, []);
    return circleWidth;
  }
  const circle = useRef(null);
  const button = useRef(null);
  const circleWidth = useCircleWidth();
  const size = useWindowSize();
  const [menuActive, isMenuActive] = useState(false);

  const getVpdr = () => {
    const vph = Math.pow(size.height, 2); // Height
    const vpw = Math.pow(size.width, 2); // Width
    const vpd = Math.sqrt(vph + vpw); // Diagonal
    return (vpd * 2) / circleWidth.width; // Circle radius
  };

  const openNavbar = () => {
    const tl1 = gsap.timeline();
    tl1
      .to(".navbar", 0, { display: "flex" })
      .to("#bg-circle", 1.5, {
        scale: getVpdr(),
        ease: "expo.inOut",
      })
      .staggerFromTo(
        ".navbar ul li",
        0.5,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1 },
        0.1,
        1
      );
  };

  const closeNavbar = () => {
    const tl2 = gsap.timeline();
    tl2
      .staggerFromTo(
        ".navbar ul li",
        0.5,
        { y: 0, opacity: 1, delay: 0.5 },
        { y: 25, opacity: 0 },
        -0.1
      )
      .to("#bg-circle", 1, {
        scale: 0,
        ease: "expo.inOut",
        delay: -0.5,
      })
      .to(".navbar", 0, { display: "none" });
  };

  const toggle = () => {
    if (menuActive) {
      closeNavbar();
      isMenuActive(!menuActive);
    } else {
      openNavbar();
      isMenuActive(!menuActive);
    }
  };

  window.onresize = () => {
    if (menuActive) {
      gsap.to("#bg-circle", 1, { scale: getVpdr(), ease: "expo.inOut" });
    }
  };

  return (
    <div id="wrapper">
      <button
        className={`navbar-toggle ${menuActive ? "active" : null}`}
        id="toggle"
        type="button"
        onClick={toggle}
        ref={button}
      >
        <svg viewBox="0 0 100 100" width="80">
          <path
            className="line top"
            d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
          />
          <path className="line middle" d="m 30,50 h 40" />
          <path
            className="line bottom"
            d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
          />
        </svg>
      </button>

      <div className="navbar">
        <ul>
          <li>
            {navLinks.map((link, index) => {
              return (
                <Link
                  data-text={link.dataText}
                  key={index}
                  onClick={toggle}
                  to={link.path}
                >
                  {link.title}
                </Link>
              );
            })}
          </li>
        </ul>
      </div>
      <div id="bg-circle" ref={circle}></div>
    </div>
  );
}
