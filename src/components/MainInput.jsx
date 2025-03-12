import Button from './Button'

const MainInput = () => {
  return (
    <main>
      <div className="main-container">
        <textarea
          placeholder="Paste your text here..."
          className="mainInput"
        ></textarea>
        <Button />
      </div>
    </main>
  )
}

export default MainInput
