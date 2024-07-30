// Write your code here.
const WinOrLoseCard = props => {
  console.log('In result')

  const {score, onPlayAgain} = props
  const imgUrl =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const result = score === 12 ? 'You Won' : 'You Lose'
  const bestScore = score === 12 ? 'Best Score' : 'Score'
  const onReplay = () => {
    onPlayAgain()
  }

  return (
    <div>
      <img src={imgUrl} alt="win or lose" />
      <h1>{result}</h1>
      <p>{bestScore}</p>
      <p>{score}/12</p>
      <button type="button" onClick={onReplay}>
        Play Again
      </button>
    </div>
  )
}

export default WinOrLoseCard
