import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class AppItem extends Component {
  render() {
    const {appsList} = this.props
    const {cover, name} = appsList

    return (
      <Link className="navigate-link" to={`/${appsList.appId}`}>
        <li className="app-card">
          <img className="app-images" alt="app=img" src={cover} />
          <p className="app-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default AppItem
