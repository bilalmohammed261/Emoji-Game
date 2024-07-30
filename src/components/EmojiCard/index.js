// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, shuffleEmojis} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const onClickEmoji = () => {
    shuffleEmojis(id)
  }
  return (
    <li className="card-container">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
