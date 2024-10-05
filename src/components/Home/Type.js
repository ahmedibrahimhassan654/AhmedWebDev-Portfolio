import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer ",
          "MERN Stack Web Developer ",
          "React Js Web Developer ",
          "Node js Backend Developer ",
          "Wordpress Designer ",
          "SEO specialist ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
