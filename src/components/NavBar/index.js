// Write your code here.
import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  state = {
    score: 0,
    topScore: 0,
  }

  render() {
    const {score, topScore} = this.state
    return (
      <div className="navbar-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <p>Emoji Game</p>
        <p>Score:{score}</p>
        <p>Top Score:{topScore}</p>
      </div>
    )
  }
}

export default NavBar
