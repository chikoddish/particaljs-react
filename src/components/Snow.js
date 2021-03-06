import React from "react";
import Particles from "react-particles-js";

const Snow = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 10,
              random: true,
            },
            move: {
              direction: "bottom",
              out_mode: "out",
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default Snow;
