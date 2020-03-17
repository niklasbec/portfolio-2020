import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Showcase from './components/showcase';
import Contact from './components/contact';

function App() {

  const [darkmode, setDarkmode] = useState(false)
  const [projectLink, setProjectLink] = useState({
    link: "eventico.com"
  })

  return (
    <div className="App">
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <About />
      <Showcase setProjectLink={setProjectLink} />
      <div className="flex">
        <a id="seeWorkHosted" className="button-hosted" href={projectLink} target="_blank">See hosted</a>
      </div>
      <Contact />
    </div>
  );
}

export default App;
