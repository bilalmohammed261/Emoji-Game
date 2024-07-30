// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOver} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      <h1>Emoji Game</h1>
      {!isGameOver ? (
        <div>
          <p>Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default NavBar
