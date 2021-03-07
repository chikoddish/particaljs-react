import React from "react";
import Particles from "react-particles-js";

const First = () => {
  return (
    <div>
      <Particles
        params={{
          particles: {
            color: {
              value: "#FFF",
            },
            line_linked: {
              color: {
                value: "#FFF",
              },
            },
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
        }}
      />
    </div>
  );
};

export default First;
