import React from "react";
import HeaderTitle from "./common/header-title";
import Particles from "react-particles-js";

export default function Header() {
  return (
    <div className="header">
      <Particles
        height="100vh"
        width="100vw"
        params={{
          particles: {
            line_linked: {
              color: { value: "#5c5c5c" },
            },
            color: { value: "#5c5c5c" },
            number: {
              value: 25,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </div>
  );
}
