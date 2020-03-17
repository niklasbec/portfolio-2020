import React, { useState, useEffect } from 'react';

function Showcase(props) {

    const [imageState, setImageState] = useState({
        image: "https://i.imgur.com/AhHPYGE.png",
    })

    useEffect(() => {
        const card1 = document.getElementById('card1')
        card1.click()
      }, [])

    const clickHandler = e => {
        if (e.target.id === "card1" || e.target.id === "card2" || e.target.id === "card3") {
            const el = e.target
            el.children[0].classList.add("hover-status")
            el.classList.add("hover-card")
        }
        if (e.target.id === "card1") {
            setImageState({ image: "https://i.imgur.com/AhHPYGE.png" })
            document.querySelector("#card2").classList.remove("hover-card")
            document.querySelector("#card3").classList.remove("hover-card")
            document.querySelector("#card2").children[0].classList.remove("hover-status")
            document.querySelector("#card3").children[0].classList.remove("hover-status")
            props.setProjectLink("https://eventico.com/")
        } else if (e.target.id === "card2") {
            setImageState({ image: "https://i.imgur.com/W54OIYB.png" })
            document.querySelector("#card1").classList.remove("hover-card")
            document.querySelector("#card3").classList.remove("hover-card")
            document.querySelector("#card1").children[0].classList.remove("hover-status")
            document.querySelector("#card3").children[0].classList.remove("hover-status")
            props.setProjectLink("https://apartements.com/")
        } else if (e.target.id === "card3") {
            setImageState({ image: "https://i.imgur.com/qXjPkau.jpg" })
            document.querySelector("#card1").classList.remove("hover-card")
            document.querySelector("#card2").classList.remove("hover-card")
            document.querySelector("#card1").children[0].classList.remove("hover-status")
            document.querySelector("#card2").children[0].classList.remove("hover-status")
            props.setProjectLink("https://law.com/")
        }
    }

    return (

        <div className="showcase" id="work">
            <div id="contentWindow" className="left">
                <img src={imageState.image} width="100%" height="100%" className="contentImage" />
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
                        <h4>S&M Law</h4>
                        <p className="subline-project">Law Firm Website</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Showcase;
