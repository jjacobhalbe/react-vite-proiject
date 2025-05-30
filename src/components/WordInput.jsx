import LevelBadge from './LevelBadge'

const WordInput = ({ wordResults }) => {
  return (
    <div className="resultContainer">
      <p className="wordLevel">Word level</p>
      <div className="input input--word">
        {(wordResults || []).map((item, index) => (
          <p className="outputText" key={index}>
            {item.word} <LevelBadge level={item.level} />
          </p>
        ))}
      </div>
    </div>
  )
}

export default WordInput
