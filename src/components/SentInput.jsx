const SentInput = ({ sentenceResults }) => {
  return (
    <div className="resultContainer">
      <p className="sentLevel">Sentence Levels</p>
      <div className="input input--sent">
        {(sentenceResults || []).map((item, index) => (
          <div key={index} className="outputText">
            <p>
              {item.sentence}{' '}
              <span className={`word-span ${item.sentenceLevel}`}>
                {item.sentenceLevel}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SentInput
