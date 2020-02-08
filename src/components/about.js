import React from 'react';

function About() {

  return (
    <div id='about' className="about">
        <h1>Hey, I'm Nick!</h1>
        <p className='about-me'>I'm a full stack software developer with a passion
        for clean designs. Most of my projects run with <span>JavaScript</span> and <span>React</span>, for my backends I prefer using <span>Node.js</span></p>
        <p className='location'>
        I am currently located in Hamburg, Germany.
        </p>
    </div>
  );
}

export default About;