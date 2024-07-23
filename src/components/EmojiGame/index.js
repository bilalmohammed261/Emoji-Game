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

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = props
    this.state = {
      emojisList,
    }
  }

  shuffleEmojis = () => {
    const {emojisList} = this.state
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({emojisList: shuffledEmojisList})
  }

  render() {
    const {emojisList} = this.state
    return (
      <div className="app-container">
        <NavBar />

        <ul className="emojis-container">
          {emojisList.map(eachEmoji => (
            <EmojiCard
              key={eachEmoji.id}
              emojiDetails={eachEmoji}
              shuffleEmojis={this.shuffleEmojis}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
