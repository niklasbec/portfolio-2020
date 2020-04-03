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
        document
        .querySelector("#mongo")
        .style.cssText = "display: block"
      props.setProjectLink("https://eventico.now.sh/");
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
        .querySelector("#mongo")
        .style.cssText = "display: none";
        document
        .querySelector("#redux")
        .style.cssText = "display: none"
      props.setProjectLink("https://apartments.now.sh/");
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
        document
        .querySelector("#mongo")
        .style.cssText = "display: none"
      props.setProjectLink("https://www.app.decksify.com/");
      props.setGithubLink("https://github.com/Labs-EU4/flashcards-client");
    }
  };

  const childClick = e => {
    console.log("hi")
    console.log(e.target.parentElement.id)
    if (e.target.parentElement.id === "card1" || e.target.parentElement.parentElement.id === "card1") {
      document.querySelector("#card1").click()
    } else if (e.target.parentElement.id === "card2" || e.target.parentElement.parentElement.id === "card2") {
      document.querySelector("#card2").click()
    } else if (e.target.parentElement.id === "card3" || e.target.parentElement.parentElement.id === "card3") {
      document.querySelector("#card3").click()
    }
}

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
            <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" alt="" width="15%" />
            <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" width="15%" alt="" />
            <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="15%" alt="" />
            <img id="redux" src="https://s3.us-east-2.amazonaws.com/upload-icon/uploads/icons/png/9818154791551942292-256.png" width="13%" height="90%" alt="" />
            <img id="mongo" src="https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" width="13%" height="90%" alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div id="card1" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info" onClick={childClick}>
            <h4>Eventico</h4>
            <p className="subline-project">Party planning App!</p>
          </div>
        </div>
        <div id="card2" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info" onClick={childClick}>
            <h4>Idealista</h4>
            <p className="subline-project">Housing Marketplace</p>
          </div>
        </div>
        <div id="card3" className="project-card" onClick={clickHandler}>
          <div className="statusbar" />
          <div className="project-info" onClick={childClick}>
            <h4>Decksify</h4>
            <p className="subline-project">Flashcard App</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
