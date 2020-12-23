import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import logo from './logo.svg'
import './index.css'


function Page() {
  useEffect(() => {
    const target = document.body.querySelector('.Js-resize')
    const requestSize = [1, 4, 7, 10, 13]
    const requestColors = ['deepskyblue', 'darkgray', 'steelblue', 'lightseagreen', 'darkturquoise']
    const anim = () => {
      const index = Math.floor(Math.random() * Math.floor(5))
      target.style.setProperty('--static-gradient-size', requestSize[index])
      target.style.setProperty('--static-gradient-color', requestColors[index])
    }
    setInterval(anim, 1000)
  }, [])
  
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
      <h1>Simple animation</h1>
      <div className="Simple-Animation Js-resize">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    </div>
  )
}

export default Page
