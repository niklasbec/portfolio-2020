import React from 'react';

function Work() {

  return (
    <div className="work">
        <h2>Projects</h2>
        <ul id='work' className='work-list'>
            <li><p className='work-title'>Portfolio (this website)</p>
            <div className='tech-stack'>
              <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" width="50px"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="70px"/>
            </div>
            <a class="github-button" href="https://github.com/niklasbec/Sprint-Challenge-Authentication/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork niklasbec/Sprint-Challenge-Authentication on GitHub">Fork</a>
            </li>
            <li><p className='work-title'>Real estate platform</p>
            <div className='tech-stack'>
              <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" width="50px"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="70px"/>
            </div>
            <a class="github-button" href="https://github.com/niklasbec/Sprint-Challenge-Authentication/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork niklasbec/Sprint-Challenge-Authentication on GitHub">Fork</a>
            </li>
            <li><p className='work-title'>Labs Project</p>
            <div className='tech-stack'>
              <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" width="50px"/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="70px"/>
            </div>
            <a class="github-button" href="https://github.com/niklasbec/Sprint-Challenge-Authentication/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork niklasbec/Sprint-Challenge-Authentication on GitHub">Fork</a>
            </li>
        </ul>
    </div>
  );
}

export default Work;