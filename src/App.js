import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Showcase from './components/showcase';
import Contact from './components/contact';

function App() {

  const [darkmode, setDarkmode] = useState(false)
  const [projectLink, setProjectLink] = useState("eventico.com")
  const [githubLink, setGithubLink] = useState("eventico.com")

  return (
    <div className="App">
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <About />
      <Showcase setProjectLink={setProjectLink} setGithubLink={setGithubLink} />
      <div className="flex">
        <div>
        <a id="seeWorkHosted" href={projectLink}  rel="noopener noreferrer" target="_blank"><img id="host-image" src="https://image.flaticon.com/icons/svg/1246/1246334.svg" width="64px" alt="website-icon"/></a>
        <p className="text-align">Link</p>
        </div>
        <div>
        <a href={githubLink}  rel="noopener noreferrer" target="_blank"><img id="github-image" src="https://image.flaticon.com/icons/svg/2111/2111432.svg" width="64px" alt="github-icon"/></a>
        <p className="text-align">See repo</p>
        </div>
      </div>
      <p className="disclaimer">Each project has a full write up and tech stack documentation on the GitHub Repo.</p>
      <Contact />
    </div>
  );
}

export default App;
