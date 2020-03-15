import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Showcase from './components/showcase';
import Contact from './components/contact';

function App() {

  const [darkmode, setDarkmode] = useState(false)

  return (
    <div className="App">
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <About />
      <Showcase />
      <Contact />
    </div>
  );
}

export default App;
