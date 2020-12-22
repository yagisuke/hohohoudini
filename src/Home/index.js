import { Link } from 'react-router-dom'
import './index.css'


function Page() {
  return (
    <div className="App">
      <h1>Houdini Lab</h1>
      <ul>
        <li><Link to="/hohohoudini/non_polyfill">Non polyfill</Link></li>
        <li><Link to="/hohohoudini/add_polyfill">Add polyfill</Link></li>
      </ul>
    </div>
  )
}

export default Page
