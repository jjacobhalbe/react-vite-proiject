const WordInput = ({ wordResults }) => {
  return (
    <div className="resultContainer">
      <p className="wordLevel">Word level</p>
      <div className="input input--word">
        {(wordResults || []).map((item, index) => (
          <span key={index} className={`word-span ${item.level.toLowerCase()}`}>
            {item.word} ({item.level})
          </span>
        ))}
      </div>
    </div>
  )
}

export default WordInput
