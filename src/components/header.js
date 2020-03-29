import React, {useEffect} from 'react';

function Header(props) {

  useEffect(() => {
    const image = document.getElementById('darkmode')
    image.click()
  }, [])

    function darkmodeToggle () {
        props.setDarkmode(!props.darkmode)
        const body = document.querySelector('body')
        const showcase = document.querySelector('.showcase')
        const image = document.getElementById('darkmode')
        const hostImage = document.getElementById("host-image")
        const githubImage = document.getElementById("github-image")

        if(props.darkmode === false) {
            body.style.cssText = 'background-color: white; color: black;'
            showcase.style.cssText = 'background-color: white; color: black;'
            showcase.classList.remove("showcase-dark")
            image.src = "https://image.flaticon.com/icons/svg/414/414840.svg"
            hostImage.src = "https://image.flaticon.com/icons/svg/1246/1246334.svg"
            githubImage.src = "https://image.flaticon.com/icons/svg/2111/2111432.svg"
        } else {
            body.style.cssText = 'background-color: black; color: white;'
            image.src = "https://image.flaticon.com/icons/svg/2487/2487570.svg"
            hostImage.src = "https://i.imgur.com/1RnN3E0.png"
            githubImage.src = "https://i.imgur.com/FqhZnwh.png"
            showcase.classList.add("showcase-dark")
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
            <a href='#contact'><li>Contact</li></a>
            <img onClick={darkmodeToggle} id='darkmode' src='https://image.flaticon.com/icons/svg/414/414840.svg' alt="darkmode toggle in form of a moon/sun" width="30px"/>
        </div>
      </div>
    );
  }
  
  export default Header;
  