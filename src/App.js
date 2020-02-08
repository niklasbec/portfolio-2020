import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';

function App() {

  const [darkmode, setDarkmode] = useState(false)

  return (
    <div className="App">
      <Header darkmode={darkmode} setDarkmode={setDarkmode}/>
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
