import WordInput from './WordInput'
import SentInput from './SentInput'

const InputsContainer = ({ wordResults, sentenceResults }) => {
  return (
    <section className="inputsContainer">
      <WordInput wordResults={wordResults} />
      <SentInput sentenceResults={sentenceResults} />
    </section>
  )
}

export default InputsContainer
