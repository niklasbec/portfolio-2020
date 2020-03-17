import React from 'react';

function Header(props) {

    function darkmodeToggle () {
        props.setDarkmode(!props.darkmode)
        const body = document.querySelector('body')
        const image = document.getElementById('darkmode')
        const seeWorkHosted = document.getElementById('seeWorkHosted')
    
        if(props.darkmode === false) {
            body.style.cssText = 'background-color: white; color: black;'
            image.src = "https://image.flaticon.com/icons/svg/414/414840.svg"
            seeWorkHosted.style.cssText = 'border: 2px solid black; color: black;'
        } else {
            body.style.cssText = 'background-color: black; color: white;'
            image.src = "https://image.flaticon.com/icons/svg/2487/2487570.svg"
            seeWorkHosted.style.cssText = 'border: 2px solid white; color: white;'
        }
    }

    return (
      <div className="header">
      <div className='logo-div'>
      <img src="https://image.flaticon.com/icons/svg/323/323332.svg" alt="german flag" width="25px" />
      <h3 classname='logo'>Niklas Becker</h3>
      </div>
        <div className="nav">
            <a href='#work'><li>Work</li></a>
            <a href='#about'><li>About</li></a>
            <a href='#contact'><li>Contact</li></a>
            <img onClick={darkmodeToggle} id='darkmode' src='https://image.flaticon.com/icons/svg/414/414840.svg' alt="darkmode toggle in form of a moon/sun" width="30px"/>
        </div>
      </div>
    );
  }
  
  export default Header;
  