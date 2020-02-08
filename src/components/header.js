import React from 'react';

function Header(props) {

    function darkmodeToggle () {
        props.setDarkmode(!props.darkmode)
        const body = document.querySelector('body')
        const image = document.getElementById('darkmode')
    
        if(props.darkmode === false) {
            body.style.cssText = 'background-color: white; color: black;'
            image.src = "https://image.flaticon.com/icons/svg/414/414840.svg"
        } else {
            body.style.cssText = 'background-color: black; color: white;'
            image.src = "https://image.flaticon.com/icons/svg/2487/2487570.svg"
        }
    }

    return (
      <div className="header">
        <h3 classname='logo'>Niklas Becker</h3>
        <div className="nav">
            <a href='#work'><li>Work</li></a>
            <a href='#about'><li>About</li></a>
            <a href='#contact'><li>Contact</li></a>
            <img onClick={darkmodeToggle} id='darkmode' src='https://image.flaticon.com/icons/svg/414/414840.svg' width="30px"/>
        </div>
      </div>
    );
  }
  
  export default Header;
  