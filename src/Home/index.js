import { Link } from 'react-router-dom'
import './index.css'


function Page() {
  return (
    <div>
      <h1>Houdini Lab</h1>
      <ul className="Home">
        <li><Link to="/hohohoudini/non_polyfill">Non polyfill</Link></li>
        <li><Link to="/hohohoudini/add_polyfill">Add polyfill</Link></li>
        <li><Link to="/hohohoudini/simple_animation">Simple animation</Link></li>
      </ul>
    </div>
  )
}

export default Page
