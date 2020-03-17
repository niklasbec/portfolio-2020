import React from "react";

function About() {
  return (
    <div id="about" className="about">
      <h1>Hey, I'm Nick!</h1>
      <p className="about-me">
        I'm a full stack software developer with a passion for clean designs.
        Most of my projects run with <span>JavaScript</span> and{" "}
        <span>React</span>, for my backends I prefer using <span>Node.js</span>
      </p>
      <p className="location">I am currently located in Hamburg, Germany.</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/niklas-becker-a14305178/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://image.flaticon.com/icons/svg/2111/2111499.svg"
            width="30px"
          />
        </a>
        <a
          href="https://twitter.com/niklassbe"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://image.flaticon.com/icons/svg/733/733579.svg"
            width="30px"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
