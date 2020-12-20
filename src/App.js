import logo from './logo.svg';
import './App.css';
import 'css-paint-polyfill'
import workletURL from 'file-loader!houdini-static-gradient'

CSS.paintWorklet.addModule(workletURL)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/yagisuke"
          target="_blank"
          rel="noopener noreferrer"
        >
          Produce by yagisuke
        </a>
      </header>
    </div>
  );
}

export default App;
