const InputsContainer = ({ wordResults, sentenceResults }) => {
  return (
    <section className="inputsContainer">
      <WordInput wordResults={wordResults} />
      <SentInput sentenceResults={sentenceResults} />
    </section>
  )
}
