import React, { useState } from 'react';

function Showcase() {

    const [imageState, setImageState] = useState({
        image: "https://i.imgur.com/AhHPYGE.png",
    })

    const mouseOverEnter = e => {
        if (e.target.id === "card1" || e.target.id === "card2" || e.target.id === "card3") {
            const el = e.target
            el.children[0].classList.add("hover-status")
            el.classList.add("hover-card")
        }
        if (e.target.id === "card1") {
            setImageState({ image: "https://i.imgur.com/AhHPYGE.png" })
        } else if (e.target.id === "card2") {
            setImageState({ image: "https://i.imgur.com/W54OIYB.png" })
        } else {
            setImageState({ image: "https://i.imgur.com/qXjPkau.jpg" })
        }
        e.stopPropagation()
    }

    const mouseOverLeave = e => {
        if (e.target.id === "card1" || e.target.id === "card2" || e.target.id === "card3") {
            const el = e.target
            el.classList.remove("hover-card")
            el.children[0].classList.remove("hover-status")
        }
    }

    return (
        <div className="showcase" id="work">
            <div id="contentWindow" className="left">
                <img src={imageState.image} width="100%" height="100%" className="contentImage" />
            </div>
            <div className="right">
                <div id="card1" className="project-card" onMouseEnter={mouseOverEnter} onMouseLeave={mouseOverLeave}>
                    <div className="statusbar" />
                    <div className="project-info">
                        <h4>Eventico</h4>
                        <p className="subline-project">Party planning App!</p>
                    </div>
                </div>
                <div id="card2" className="project-card" onMouseEnter={mouseOverEnter} onMouseLeave={mouseOverLeave}>
                    <div className="statusbar" />
                    <div className="project-info">
                        <h4>Idealista</h4>
                        <p className="subline-project">Housing Marketplace</p>
                    </div>
                </div>
                <div id="card3" className="project-card" onMouseEnter={mouseOverEnter} onMouseLeave={mouseOverLeave}>
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
