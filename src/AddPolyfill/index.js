import { Helmet } from 'react-helmet'
import logo from './logo.svg'
import './index.css'


function Page() {
  const scripts = `
    (async () => {
      const needPolyfill = !('paintWorklet' in CSS)

      if (needPolyfill) {
        await import('https://unpkg.com/css-paint-polyfill')
      }

      await CSS.paintWorklet.addModule('https://unpkg.com/houdini-static-gradient/worklet.js')

      if (needPolyfill) {
        window.dispatchEvent(new Event('resize'))
      }
    })()
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
      <h1>Add polyfill</h1>
      <div className="App-contents">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

export default Page
