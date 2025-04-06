import Button from './Button'

const MainInput = () => {
  return (
    <main>
      <div className="w-full flex flex-col items-center gap-[3vh] mx-auto">
        <textarea
          placeholder="Paste your text here..."
          className="w-[70%] h-[35vh] border-2 border-border rounded-md bg-primaryWhite text-[16px] resize-none shadow-custom p-3 transition-all duration-300 focus:border-borderHover focus:shadow-borderHover outline-none"
        ></textarea>
        <Button />
      </div>
    </main>
  )
}

export default MainInput
