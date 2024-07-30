/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.state = {
      emojisList,
      clickedEmojisIds: [],
      score: 0,
      topScore: 0,
      isGameOver: false,
    }
  }

  displayResult = () => {
    this.setState({isGameOver: true})
  }

  shuffleEmojis = id => {
    const {emojisList, clickedEmojisIds} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledEmojisList})
    const emojiId = clickedEmojisIds.includes(id)
    if (!emojiId) {
      this.setState(prevState => ({
        clickedEmojisIds: [...prevState.clickedEmojisIds, id],
        score: prevState.score + 1,
      }))
    }

    console.log(clickedEmojisIds.length)

    if (clickedEmojisIds.length === emojisList.length - 1 || emojiId) {
      this.setState(prevState => ({
        topScore:
          prevState.score > prevState.topScore
            ? prevState.score
            : prevState.topScore,
      }))
      this.displayResult()
    }
  }

  onPlayAgain = () => {
    const {topScore} = this.state
    this.setState({
      clickedEmojisIds: [],
      score: 0,
      topScore,
      isGameOver: false,
    })
  }

  render() {
    const {
      emojisList,
      score,
      topScore,
      isGameOver,
      clickedEmojisIds,
    } = this.state
    console.log(clickedEmojisIds)

    return (
      <div className="app-container">
        <NavBar score={score} topScore={topScore} isGameOver={isGameOver} />
        {isGameOver ? (
          <WinOrLoseCard score={score} onPlayAgain={this.onPlayAgain} />
        ) : (
          <ul className="emojis-container">
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                shuffleEmojis={this.shuffleEmojis}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
