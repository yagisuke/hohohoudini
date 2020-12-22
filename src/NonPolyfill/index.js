import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './index.css';


function Page() {
  const scripts = `
    CSS.paintWorklet.addModule('https://unpkg.com/houdini-static-gradient/worklet.js');
  `
  return (
    <div className="App">
      <Helmet
        defer={true}
        script={[
          {
            innerHTML: scripts
          }
        ]}
      />
      <h1>Non polyfill</h1>
      <div className="App-contents">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default Page;
