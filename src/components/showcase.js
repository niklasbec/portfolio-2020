import React, { useState, useEffect } from "react";

function Showcase(props) {
  const [imageState, setImageState] = useState({
    image: "https://i.imgur.com/AhHPYGE.png"
  });

  useEffect(() => {
    const card1 = document.getElementById("card1");
    card1.click();
  }, []);

  const clickHandler = e => {
    if (
      e.target.id === "card1" ||
      e.target.id === "card2" ||
      e.target.id === "card3"
    ) {
      const el = e.target;
      el.children[0].classList.add("hover-status");
      el.classList.add("hover-card");
    }
    if (e.target.id === "card1") {
      setImageState({ image: "https://i.imgur.com/AhHPYGE.png" });
      document.querySelector("#card2").classList.remove("hover-card");
      document.querySelector("#card3").classList.remove("hover-card");
      document
        .querySelector("#card2")
        .children[0].classList.remove("hover-status");
        document
        .querySelector("#redux")
        .style.cssText = "display: none";
      document
        .querySelector("#card3")
        .children[0].classList.remove("hover-status");
      props.setProjectLink("https://eventico.com/");
      props.setGithubLink("https://github.com/niklasbec/eventico");
    } else if (e.target.id === "card2") {
      setImageState({ image: "https://i.imgur.com/W54OIYB.png" });
      document.querySelector("#card1").classList.remove("hover-card");
      document.querySelector("#card3").classList.remove("hover-card");
      document
        .querySelector("#card1")
        .children[0].classList.remove("hover-status");
      document
        .querySelector("#card3")
        .children[0].classList.remove("hover-status");
        document
        .querySelector("#redux")
        .style.cssText = "display: none";
      props.setProjectLink("https://apartements.com/");
      props.setGithubLink("https://github.com/niklasbec/apartments");
    } else if (e.target.id === "card3") {
      setImageState({ image: "https://i.imgur.com/47RuKwu.png" });
      document.querySelector("#card1").classList.remove("hover-card");
      document.querySelector("#card2").classList.remove("hover-card");
      document
        .querySelector("#card1")
        .children[0].classList.remove("hover-status");
      document
        .querySelector("#card2")
        .children[0].classList.remove("hover-status");
        document
        .querySelector("#redux")
        .style.cssText = "display: block"
      props.setProjectLink("https://www.app.decksify.com/");
      props.setGithubLink("https://github.com/Labs-EU4/flashcards-client");
    }
  };

  return (
    <div className="showcase" id="work">
      <div id="contentWindow" className="left">
        <img
          src={imageState.image}
          width="100%"
          height="100%"
          className="contentImage"
          alt="project"
        />
        <div className="tech-stack">
        <div className="tech-stack-inner">
        <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="" width="15%"/>
        <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" width="15%" alt="" />
        <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="15%" alt="" />
        <img id="redux" src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/9818154791551942292-256.png" width="13%" height="90%" alt="" />
        </div>
        </div>
      </div>
      <div className="right">
        <div id="card1" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info">
            <h4>Eventico</h4>
            <p className="subline-project">Party planning App!</p>
          </div>
        </div>
        <div id="card2" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info">
            <h4>Idealista</h4>
            <p className="subline-project">Housing Marketplace</p>
          </div>
        </div>
        <div id="card3" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info">
            <h4>Decksify</h4>
            <p className="subline-project">Flashcard App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
