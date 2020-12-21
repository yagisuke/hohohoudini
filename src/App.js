import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    function setupRippleButton(button) {
      let start;
      button.addEventListener('click', (ev) => {
        button.classList.add('animating');
        const [x, y] = [ev.offsetX, ev.offsetY];
        start = performance.now();
        const anim = (now) => {
          const count = Math.floor(now - start);
          button.style.cssText = `--ripple-x: ${x}; --ripple-y: ${y}; --animation-tick: ${count};`;
          if (1000 < count) {
            button.classList.remove('animating');
            button.style.cssText = `--animation-tick: 0`;
            return;
          }
          requestAnimationFrame(anim);
        };
        requestAnimationFrame(anim);
      });
    }
    document.querySelectorAll('.Js-ripple').forEach(setupRippleButton);
  }, [])

  function onClick() {
    setTimeout(() => {
      window.location.href = 'https://twitter.com/yagi_suke';
    }, 1000)
  }

  return (
    <div className="App">
      <div className="App-cover" />
      <div className="App-contents">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p className="App-link">
          <a
            href="https://github.com/yagisuke"
            target="_blank"
            rel="noopener noreferrer"
            >
            Produce by yagisuke
          </a>
        </p>
        <p>
          <button type="button" className="App-button Js-ripple" onClick={onClick}>Follow Me</button>
        </p>
      </div>
    </div>
  );
}

export default App;
