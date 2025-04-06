import WordInput from './WordInput'
import SentInput from './SentInput'

const InputsContainer = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-[5vh] min-h-[200px] mt-[5vh] md:flex-row md:gap-[10vh]">
      <WordInput />
      <SentInput />
    </section>
  )
}

export default InputsContainer
