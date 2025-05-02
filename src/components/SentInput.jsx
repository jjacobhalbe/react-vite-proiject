const SentInput = ({ sentenceResults }) => {
  return (
    <div className="resultContainer">
      <p className="sentLevel">Sentence level</p>
      <div className="input input--sent">
        {(sentenceResults || []).map((sentence, index) => (
          <p key={index}>{sentence}</p>
        ))}
      </div>
    </div>
  )
}

export default SentInput
