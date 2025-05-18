import LevelBadge from './LevelBadge'

const SentInput = ({ sentenceResults }) => {
  return (
    <div className="resultContainer">
      <p className="sentLevel">Sentence Levels</p>
      <div className="input input--sent">
        {(sentenceResults || []).map((item, index) => (
          <div key={index} className="outputText">
            <p>
              {item.sentence} <LevelBadge level={item.sentenceLevel} />
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SentInput
